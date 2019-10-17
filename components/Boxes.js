import React from 'react';
import styled from 'styled-components'

const Box = styled.button`
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function Boxes() {
  return (
    <div>
      <Container id="container">
        Your Boxes
        
        <div>
          <Box>News 1</Box>
          <Box>News 2</Box>
        </div>
        
        <div>
          <Box>News 3</Box>
          <Box>News 4</Box>                          
        </div>
      
      </Container>
    </div>
  );
}

export default Boxes