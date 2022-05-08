import styled from 'styled-components'
import Footer from './Footer'
function BasicLayout({ children }) {
  return (
    <Wrap>
      {children}
      <Footer />
    </Wrap>
  )
}

const Wrap = styled.section`
  width: 100%;
`

export default BasicLayout
