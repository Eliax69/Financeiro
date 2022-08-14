import * as S from './styled';
import { listType, AppendType } from '../../utils/types';
import { MutableRefObject, useRef } from 'react';

export default function Append({ addToList, handleRE, month }: AppendType) {

    const date = useRef() as MutableRefObject<HTMLInputElement>;
    const category = useRef() as MutableRefObject<HTMLInputElement>;
    const title = useRef() as MutableRefObject<HTMLInputElement>;
    const value = useRef() as MutableRefObject<HTMLInputElement>;

    const checkEmpty = (Array: Array<MutableRefObject<HTMLInputElement>>): boolean => {
        let result = false;
        Array.forEach(input => {
            if(input.current.value == ''){
                input.current.style.borderColor = 'red';

                setTimeout(() => {
                    input.current.style.borderColor = 'gray';
                }, 1500)

                result = true;
            }
        })

        return result;
    }

    const type = (category: MutableRefObject<HTMLInputElement>): string => {
        let rType = 'warning';
        switch(category.current.value){
            case 'Alimentação':
                rType = 'expense';
                break;
            case 'Conta':
                rType = 'expense';
                break;
            case 'Salário':
                rType = 'revenue';
                break;
        }
        return rType;
    }

    const handleAddToList = () => {
        if(!checkEmpty([date, category, title, value])){
            addToList({
                date: date.current.value,
                category: category.current.value,
                type: type(category),
                month: month,
                title: title.current.value,
                value: value.current.value
            })
            if(type(category) == 'revenue'){
                handleRE('revenue', value.current.value);
            }else {
                handleRE('expense', value.current.value);
            }
        }else
        {
            console.log('está vázio.')
        }

    }

    return(
        <S.Append>
            <S.Box>
                <label htmlFor='date'>Data</label>
                <input ref={date} type='date' name='date' id='date' />
            </S.Box>
            <S.Box>
                <datalist id='datalist'>
                    <option value="Alimentação"></option>
                    <option value="Conta"></option>
                    <option value="Salário"></option>
                </datalist>
                <label htmlFor='category'>Categoria</label>
                <input ref={category} type='text' name='category' id='category' list='datalist'/>
            </S.Box>
            <S.Box>
                <label htmlFor='title'>Titulo</label>
                <input ref={title} type='text' name='title' id='title' />
            </S.Box>
            <S.Box>
                <label htmlFor='value'>Valor</label>
                <input ref={value} type='number' name='value' id='value' />
            </S.Box>
            <S.Button onClick={handleAddToList}>Adicionar</S.Button>
        </S.Append>
    )
}