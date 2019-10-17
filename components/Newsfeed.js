import Link from 'next/link'
import Boxes from './Boxes'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  
`

const Footer = styled.a`
  position: absolute;
  top: 0px;
  left: 0px;
  padding: 7px;
`

export default () => (
    <div>
      <Container>
        Welcome to your curated news
      </Container>
      
      <div>
      </div>
      <Boxes/>

        <Link href="/about">
          <Footer>About</Footer>
        </Link>
    </div>
)