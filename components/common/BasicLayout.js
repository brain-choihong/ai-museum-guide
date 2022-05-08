import styled from 'styled-components'
import Footer from './Footer'
import Header from './Header'
function BasicLayout({ children }) {
  return (
    <Wrap>
      <Header />
      {children}
      <Footer />
    </Wrap>
  )
}

const Wrap = styled.section`
  width: 100%;
`

export default BasicLayout
