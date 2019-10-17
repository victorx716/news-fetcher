import styled from 'styled-components';

export const Box = styled.button`
  border: 1px solid white;
  color: white;
  background: #f4511e;
  width: 15em;
  height: 15em;
  opacity: 0.8;
  :hover {
    opacity: 1;
  }
  margin: 2px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Header = styled.div`
  display: flex;
  justify-content: center;
  
`

export const Footer = styled.a`
  position: absolute;
  top: 0px;
  left: 0px;
  padding: 7px;
`