import Link from 'next/link'

function Home() {
  return (
    <>
      <ul>
        <li>Home</li>
        <li>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
      </ul>

      <h1>News Fetcher</h1>
    </>
  )
}

export default Home