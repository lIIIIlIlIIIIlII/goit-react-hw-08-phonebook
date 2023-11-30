import styled from 'styled-components';

export const Wrapper = styled.div`
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 100vh;
  }

  display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
border-radius: 8px;
width: 450px;
min-height: 500px;
padding: 50px;
margin: 0 auto;
background: white;
height: auto;
border-radius: 5px;
margin: 2% auto;
box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.2);
padding: 2%;
`;

export const Header = styled.h1`
  margin: 2% auto 10% auto;
  text-align: center;
`;
