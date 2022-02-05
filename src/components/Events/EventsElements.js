import styled from 'styled-components'

export const Div = styled.div`
    margin-left: 150px;
    margin-right: 150px;
    border: 1px solid lightgray;
    padding: 30px ;
    display: flex;

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 15px;
        margin: 20px 0;
    }

`;