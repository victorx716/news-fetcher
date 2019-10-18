import styled from 'styled-components';

export const Box = styled.button`
  border: 2px solid white;
  color: white;
  background: #f4511e;
  width: 200px;
  height: 200px;
  opacity: 0.8;
  :hover {
    opacity: 1;
  }
  margin: 2px;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;  
  font-size: 11px;
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