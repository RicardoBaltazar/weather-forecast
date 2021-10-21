import styled from 'styled-components';

export const Container = styled.div`
    width: 375px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin: 1rem 0;
    div {
        display: flex;
        justify-content: space-between;
        width: 100%;
        div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }
`