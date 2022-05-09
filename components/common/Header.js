import styled from 'styled-components'
import Link from 'next/link'
function Header() {
  return (
    <Wrap>
      <HeaderMenu>
        <li>
          <Link href="/">Logo</Link>
        </li>
        <li>
          <Link href="/detail">Detail</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
          &nbsp; &nbsp;
          <Link href="/register">Sign up</Link>
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
  }
`
const Wrap = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
`
export default Header
