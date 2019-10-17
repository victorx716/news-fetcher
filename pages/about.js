import Link from 'next/link'

function About() {
  return (
    <>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>About Us</li>
      </ul>

      <h1>About</h1>
      <p>We are a cool news site</p>
    </>
  )
}

export default About