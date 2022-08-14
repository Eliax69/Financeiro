import styled, { css } from 'styled-components';

export const Show = styled.section`
    width: 100%;
    padding: 40px 40px 40px 0;
    border-radius: 20px;
    box-shadow: 0px 0px 5px 3px #aeaeae;
    background-color: white;
`;

export const Table = styled.table`
    width: 100%;
    text-align: left;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;

    thead
    {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        
        tr
        {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-around;

            th
            {
                font-size: 20px;
            }
        }
    }

    tbody
    {
        margin-top: 20px;
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        row-gap: 5px;

        tr
        {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-around;

            td
            {
                font-size: 18px;
                width: 150px;
                text-align: center;
            }
        }
    }
`;

interface tdType {
    type: string,
}

export const Td = styled.td<Pick<tdType, 'type'>>`
    background-color: blueviolet;
    padding: 5px 10px;
    border-radius: 5px;
    color: white;

    ${props => props.type == 'revenue' && css`
        background-color: rgb(66, 192, 28);
    `}

    ${props => props.type == 'expense' && css`
        background-color: rgb(192, 28, 28);
    `}
`;