import Link from 'next/link'

export default () => (
    <>
      <div>
        <Link href="/">
          <a>Return home</a>
        </Link>
        <style global jsx>{`
          body {
              background: white;
              font-family: Calibri;
          }

          a {
              text-decoration: none;
              hover: bold;
          }
    `}</style>        
      </div>
    </>
  )
