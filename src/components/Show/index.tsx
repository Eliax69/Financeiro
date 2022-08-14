import * as S from './styled';
import { listType, ShowType } from '../../utils/types';
import { v4 as uuid } from 'uuid';
import { useEffect, useState } from 'react';

export default function Show(props: ShowType){

    const [currentMonth, setCurrentMonth] = useState<listType[]>([]);

    useEffect(() => {
        setCurrentMonth(props.list.filter(item => item.month == props.month))
    }, [props.month, props.list])

    return(
        <S.Show>
            <S.Table>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Categoria</th>
                        <th>Titulo</th>

                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentMonth.map(item => (
                            <tr style={item.category != '' ? {display: 'flex'}:{display: 'none'}} key={uuid()}>
                                <td>{item.date}</td>
                                <S.Td type={item.type}>{item.category}</S.Td>
                                <td>{item.title}</td>
                                <td style={item.type == 'expense' ? {color: 'red'} : {color: 'green'}}>R$ {item.value}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </S.Table>
        </S.Show>
    )
}