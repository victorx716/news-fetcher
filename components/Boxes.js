import React, { Component} from 'react';
import { Box, Container} from '../styles/styles'
const axios = require('axios')

class Boxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topLeft: '',
      topRight: '',
      bottomLeft: '',
      bottomRight: '',
      headlines: [],
    }
    this.handleTopLeft = this.handleTopLeft.bind(this)
    this.handleTopRight = this.handleTopRight.bind(this)
    this.handleBottomLeft = this.handleBottomLeft.bind(this)
    this.handleBottomRight = this.handleBottomRight.bind(this)            
  }

  
  handleTopLeft() {
    this.setState((state) => ({
      topLeft: this.state.headlines[Math.floor(Math.random() * this.state.headlines.length)].title
    }))
  }

  handleTopRight() {
    this.setState((state) => ({
      topRight: this.state.headlines[Math.floor(Math.random() * this.state.headlines.length)].title
    }))
  }

  handleBottomLeft() {
    this.setState((state) => ({
      bottomLeft: this.state.headlines[Math.floor(Math.random() * this.state.headlines.length)].title
    }))
  }

  handleBottomRight() {
    this.setState((state) => ({
      bottomRight: this.state.headlines[Math.floor(Math.random() * this.state.headlines.length)].title
    }))
  }

  componentDidMount() {
    axios.get('https://cryptocontrol.io/api/v1/public/news?key=' + process.env.API_KEY)    
      .then((res) => {                  
        this.setState({
          topLeft: res.data[0].title,
          topRight: res.data[1].title,
          bottomLeft: res.data[2].title,
          bottomRight: res.data[3].title,
          headlines: res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() { 
    return (
      <div>
        <Container id="container">
          Your Boxes
          
          <div>
            <Box onClick={this.handleTopLeft}>{this.state.topLeft}</Box>
            <Box onClick={this.handleTopRight}>{this.state.topRight}</Box>
          </div>
          
          <div>
            <Box onClick={this.handleBottomLeft}>{this.state.bottomLeft}</Box>
            <Box onClick={this.handleBottomRight}>{this.state.bottomRight}</Box>                          
          </div>
        
        </Container>
      </div>
    );
  }
}

export default Boxes