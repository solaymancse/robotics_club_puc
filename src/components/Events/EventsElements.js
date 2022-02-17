import styled from 'styled-components';

export const Div = styled.div`
    margin-left: 150px;
    margin-right: 150px;
    border: 1px solid lightgray;
    padding: 30px ;
    display: flex;

    @media screen and (max-width: 575px){
        flex-direction: column;
        width: 100%;
        margin: 30px 0px;
        padding: 0px 0px 0px 10px;
    
    }

`;
