import styled from 'styled-components';

export const Container = styled.div`
    width: 385px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin: 1rem 0;
    @media(max-width: 500px) {
            width: 90vw;
        }
    hr {
        border: 1px solid #ffffff;
        width: 100%;
    }
    h2{
        color: #ffffff;
        font-size: 2rem;
        margin: 2rem 1.5rem 1rem;
    }
    div {
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin: 0 auto;
        @media(max-width: 500px) {
            width: 100%;
        }
        div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            p {
                font-weight: bold;
                margin-bottom: 1rem;
                font-size: 0.8rem;
                @media(max-width: 500px) {
                    font-size: 0.7rem;
                }
                span {
                    margin: 0 0.4rem;
                }
            }
        }
    }
`