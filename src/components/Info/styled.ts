import styled from 'styled-components';

export const Info = styled.section`
    width: 100%;
    margin: -60px auto 0;
    padding: 40px 40px 40px 0;
    border-radius: 20px;
    box-shadow: 0px 0px 5px 3px #aeaeae;
    background-color: white;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-around;
`;

interface ContentType {
    direction: string,
    gap: string
}

export const Content = styled.div<Pick<ContentType, 'direction' | 'gap'>>`
    max-width: max-content;
    height: max-content;
    border-radius: 20px;
    gap: ${props => props.gap};
    display: flex;
    flex-flow: ${props => props.direction} nowrap;
    align-items: center;
    justify-content: center;
    background-color: white;

    .m-s-info
    {
        min-width: 190px;
        text-align: center;
    }

    .m-t-info, .m-f-info
    {
        font-size: 20px;
        cursor: pointer;
    }

    .f-span
    {
        color: gray;
        font-weight: 600;
    }

    .b-s-info
    {
        font-weight: 500;
    }

    span
    {
        font-size: 20px;
    }
`;