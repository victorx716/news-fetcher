import Link from 'next/link'
import Boxes from './Boxes'
import { Header, Footer } from '../styles/styles'

export default () => (
    <div>
      <Header>
        Welcome to your curated news
      </Header>
      
      <div>
      </div>
      <Boxes/>

        <Link href="/about">
          <Footer>About</Footer>
        </Link>
    </div>
)