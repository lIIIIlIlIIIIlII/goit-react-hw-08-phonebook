import styled from 'styled-components';

export const Form = styled.form`
  text-align: center;
`;

export const Input = styled.input`
display: flex;
background: #fff;
color: #333;
padding: 15px;
width: 280px;
border: 1px solid #000; ы
border-radius: 0;
outline: none; 
`;
export const Button = styled.button`
display: inline-block;
color: #252537;
width: 280px;
height: 50px;
padding: 0 20px;
background: #fff;
border: 1px solid #000; 
outline: none;
cursor: pointer;
text-align: center;
transition: all 0.2s linear;
margin: 7% auto;
letter-spacing: 0.05em;


&:hover {
  color: #fff; 
  background: #000; 
}
`;