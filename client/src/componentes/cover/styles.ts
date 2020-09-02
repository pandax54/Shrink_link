import styled from 'styled-components';
import { shade } from 'polished';
import background from '../../assets/background.jpg';
import logoImg from '../../assets/interlink-logo-white.png';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 420px;
    background: rgba(0, 0, 0, 0.4) url('${ background}');
    background-blend-mode: darken;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center; 
    /* flex-direction: row; */
    min-width: 780px;
`


export const Logo = styled.div`
  position: absolute;
  background: url('${ logoImg}');    
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top right; 
  width: 170px;
  max-width: 200px;
  margin-left: 25px;
  /* max-width: 25%; */
  height: 500px;
`

export const Content = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    text-align: center;
    margin-top: 60px;
    margin-right: 30px;
`
export const Title = styled.h1`
    color: #f9f2f2;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 44px;
    font-weight: 400;
    margin-bottom: 18px;
`

export const Subtitle = styled.h2`
    color: #f9f2f2;
    /* max-width: 500px; */
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 70px;
`
export const InputDiv = styled.form`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Input = styled.input`
    width: 480px;
    height: 47px;
    border-radius: 4px 0 0 4px;
    border: none;
    padding: 0 18px;

    &::placeholder {
        font-size: 16px;
        color: #605c5c;
    }

`

export const Button = styled.button`
    height: 47px;
    border: none;
    width: auto;
    padding: 6px 16px;
    background: #f6435d;
    color: #f9f2f2;
    font-size: 1.2rem;
    font-weight: 500;
    border-radius: 0 4px 4px 0;
    /* position: absolute; */

    &:hover {
        background: ${shade(0.2, '#f6435d')};
    }
`
