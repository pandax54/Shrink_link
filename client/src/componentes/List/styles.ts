import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    text-align: center;
    flex-direction: column;
    background: #fff;

    footer {
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin: 30px auto;

        div {
            display: flex;

            img {
                width: 20px;
                height: 20px;
                margin: 0 6px;
            }
        }

        a {
            img {
                width: 30px;
            }
        }

    }
    
`

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 30px auto;
    flex-direction: column;
    min-width: 800px;
    margin-bottom: 50px;
`
export const Title = styled.h1`
    color: #605c5c;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 44px;
    font-weight: 400;
    margin-bottom: 18px;
`

export const ListContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-bottom: 50px;

`

export const Ulr = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(246, 67, 93, 0.4);
    padding-bottom: 10px;
    margin-bottom: 10px;
    margin-top: 30px;

    a {
        text-decoration: none;
        color: #605c5c;
        font-size: 20px;
    }

    span {
        color: #605c5c;
        font-size: 20px;
    }
`




