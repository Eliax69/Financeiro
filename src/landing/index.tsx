import * as S from './styled';
import GlobalStyle from '../style/GlobalStyle';
import Header from '../components/Header';
import Info from '../components/Info';
import Append from '../components/Append';
import Show from '../components/Show';
import { listType, rdbType } from '../utils/types';
import { useEffect, useState } from 'react';

export const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

const getCurrentDate = () => {
    let now = new Date();
    return `${now.getFullYear()} - ${now.getMonth()}`;
}

export default function Landing() {
    const [month, setMonth] = useState(getCurrentDate());
    const [list, setList] = useState<listType[]>([]);

    const addToList = (newItem: listType) => {
        setList(old => [...old, newItem]);
    }

    const [rdb, setRdb] = useState<rdbType>({} as rdbType);

    const handleRE = (type: string, payload: string) => {
        switch(type){
            case 'revenue':
                setRdb(old => ({...old,
                    revenue: old.revenue + Number(payload),
                }))
                break;
            case 'expense':
                setRdb(old => ({...old,
                    expense: old.expense + Number(payload),
                }))
                break;
        }
    }

    const handleMonth = (type: string) => {
        let [year, cmonth] = month.split('-');
        let currentDate: Date;
        switch(type){
            case 'next':
                currentDate = new Date(Number(year), Number(cmonth), 1);
                currentDate.setMonth(currentDate.getMonth() + 1);
                setMonth(`${currentDate.getFullYear()} - ${currentDate.getMonth()}`);
                break;
            case 'previous':
                currentDate = new Date(Number(year), Number(cmonth), 1);
                currentDate.setMonth(currentDate.getMonth() - 1);
                setMonth(`${currentDate.getFullYear()} - ${currentDate.getMonth()}`);
                break;
        }
    }

    useEffect(() => {
        const filteredList = list.filter(item => item.month == month)
        if(filteredList[0]){
            console.log('este mês não está vázio')
            console.log(filteredList);
            let revenue = 0, expense = 0;
            filteredList.filter(item => {
                if(item.type == 'revenue'){
                    revenue += Number(item.value);
                }else{
                    expense += Number(item.value);
                }
            });
            setRdb({
                revenue: revenue,
                expense: expense,
                balance: revenue - expense
            });
            console.log('revenue:', revenue, 'expense:', expense)
        }else
        {
            console.log('este mês está vázio')
            setRdb({
                revenue: 0,
                expense: 0,
                balance: 0
            })
        }
    }, [list, month])

    return (
        <>
            <GlobalStyle />

            <Header />
            <S.Container>
                <Info handleMonth={handleMonth} month={month} rdb={rdb}/>
                <Append month={month} handleRE={handleRE} addToList={addToList}/>
                <Show month={month} list={list} />
            </S.Container>
        </>
    )
}