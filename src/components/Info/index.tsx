import * as S from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { InfoType } from '../../utils/types';
import { months } from '../../landing';

export default function Info({ rdb, month, handleMonth }: InfoType){

    const [currentDate, setCurrentDate] = useState('Loading');

    useEffect(() => {
        const [year, cmonth] = month.split('-');
        setCurrentDate(`${months[Number(cmonth)]} - ${year}`)
    }, [month])

    return(
        <S.Info>
            <S.Content direction='row' gap='0 50px'>
                <div className='m-f-info'>
                    <FontAwesomeIcon onClick={() => handleMonth('previous')} icon={faArrowLeft}/>
                </div>
                <div className='m-s-info'><span> {currentDate} </span></div>
                <div className='m-t-info'>
                    <FontAwesomeIcon onClick={() => handleMonth('next')} icon={faArrowRight}/>
                </div>
            </S.Content>
            <S.Content direction='column' gap='0 0'>
                <div className='r-f-info'>
                    <span className='f-span'>Receita</span>
                </div>
                <div className='r-s-info'>
                    <span className='receita-result'>R$ {rdb.revenue}</span>
                </div>
            </S.Content>
            <S.Content direction='column' gap='0 0'>
                <div className='d-f-info'>
                    <span className='f-span'>Despesa</span>
                </div>
                <div className='d-s-info'>
                    <span className='despesa-result'>R$ {rdb.expense}</span>
                </div>
            </S.Content>
            <S.Content direction='column' gap='0 0'>
                <div className='b-f-info'>
                    <span className='f-span'>Balanço</span>
                </div>
                <div className='b-s-info'>
                    <span style={rdb.balance >= 0 ? {color: 'green'} : {color: 'red'}} className='balanço-result'>R$ {rdb.balance}</span>
                </div>
            </S.Content>
        </S.Info>
    )
}