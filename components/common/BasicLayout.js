import styled from 'styled-components'
import Footer from './Footer'
import Header from './Header'
function BasicLayout({ children }) {
  return (
    <Wrap>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Wrap>
  )
}

const Content = styled.div`
  min-height: 500px;
  padding: 20px 50px;
`

const Wrap = styled.section`
  width: 100%;
`

export default BasicLayout
