// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 32px;
  max-width: 550px;
  @media screen and (min-width: 768px) {
    margin-top: 64px;
    margin-bottom: 64px;
  }
`

export const MainHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 26px;
  font-weight: bold;
  color: #1e293b;
  margin-bottom: 0px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.5;
  }
`

export const HeadingDescription = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  color: #334155;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 16px;
    line-height: 1.5;
  }
`

export const Image = styled.img`
  width: 100%;
  margin-top: 12px;
  @media screen and (min-width: 768px) {
    margin-top: 16px;
  }
`

export const ReactDescription = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  color: #334155;
  line-height: 1.5;
  @media screen and (min-width: 768px) {
    margin-bottom: 26px;
  }
`

export const Button = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 12px;
  background-color: #1f81ff;
  border: none;
  border-radius: 6px;
  margin-top: 8px;
  padding: 8px 16px;
  align-self: flex-start;
  cursor: pointer;
  outline: none;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    margin-top: 16px;
    align-self: center;
  }
`
