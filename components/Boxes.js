import React, { Component} from 'react';
import { Box, Container} from '../styles/styles'


class Boxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topLeft: '',
      topRight: '',
      bottomLeft: '',
      bottomRight: '',
    }
  }

  render() {
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
}

export default Boxes