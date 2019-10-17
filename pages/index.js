require('dotenv').config()
import Newsfeed from '../components/Newsfeed';

export default () => (
  <div>
    <Newsfeed/>
    <style global jsx>{`
    body {
        background: rgba(255, 255, 255, 0.5);
        font-family: Calibri;
    }

    a {
        text-decoration: none;
    }
    `}</style>
  </div>
)