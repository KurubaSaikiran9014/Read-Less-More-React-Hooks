import styled from 'styled-components'

export const Main = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Mini = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80vw;
  align-items: center;

  padding: 20px;
`

export const Head = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: bold;
  color: #1e293b;
`
export const Desc = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #334155;
`

export const Image = styled.img`
  width: 80%;
  margin: 20px;
  height: 40vh;
`

export const Para = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #334155;
`
export const Button = styled.button`
  background-color: #1f81ff;
  border-width: 0px;
  height: 30px;
  border-radius: 5px;
  width: 100px;
  color: #ffffff;
`
