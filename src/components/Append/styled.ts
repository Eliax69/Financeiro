import styled from 'styled-components';

export const Append = styled.section`
    width: 100%;
    padding: 40px 40px 40px 0;
    border-radius: 20px;
    box-shadow: 0px 0px 5px 3px #aeaeae;
    background-color: white;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-around;
`;

export const Box = styled.div`
    width: max-content;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: center;

    label
    {
        font-size: 20px;
        font-weight: 600;
    }

    input
    {
        border-radius: 3px;
        font-size: 15px;
        border: 1px solid gray;
        padding: 5px 10px;
    }
`;

export const Button = styled.button`
    background-color: #AED7E5;
    color: rgb(18, 18, 24);
    padding: 5px 40px;
    font-size: 19px;
    align-self: flex-end;
    cursor: pointer;
`;