import styled from 'styled-components'
import Link from 'next/link'
import { useCookies } from 'react-cookie'
import { useEffect, useState } from 'react'
// import { useRouter } from 'next/router'

function Header() {
  const [cookies, removeCookie] = useCookies(['rememberNumber'])
  const id = cookies?._dd_s
  const [cookie, setCookie] = useState(id)
  // const router = useRouter()

  useEffect(() => {
    const loginUser = localStorage.getItem('loginUser');
    setCookie(loginUser)
  }, [])

  const handleClick = () => {
    // removeCookie('_dd_s')
    localStorage.removeItem('loginUser');
    setCookie(undefined)
    location.href = '/login'
  }
  return (
    <Wrap>
      <HeaderMenu>
        <li>
          <Link href="/">Logo</Link>
        </li>
        <li>
          {cookie && (
            <>
              <Link href="/detail">Detail</Link>
              &nbsp; &nbsp;
              <Link href="/admin">Create</Link>
            </>
          )}
        </li>
        <li>
          {cookie ? (
            <p onClick={handleClick}>Logout</p>
          ) : (
            <>
              <Link href="/login">Login</Link>
              &nbsp; &nbsp;
              <Link href="/register">Sign up</Link>
            </>
          )}
        </li>
      </HeaderMenu>
    </Wrap>
  )
}
const HeaderMenu = styled.ul`
  margin: 0 auto;
  width: 1000px;
  display: flex;
  justify-content: space-between;
  li {
    color: #ddd;
    padding: 10px;
    p {
      cursor: pointer;
    }
  }
`
const Wrap = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
`
export default Header
