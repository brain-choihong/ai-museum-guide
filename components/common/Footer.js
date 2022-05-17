import styled from 'styled-components'

function Footer() {
  return (
    <Wrap>
      <Logo>AI 박물관 가이드</Logo>
      <Text>© 2022, All Rights Reserved - AI Studio</Text>
      <Text>v1.1.1 - 2022.5.8</Text>
    </Wrap>
  )
}
const Text = styled.p`
  color: #838b91;
`
const Logo = styled.p`
  color: #838b91;
`
const Wrap = styled.div`
  background: #1b222d;
  width: 100%;
  position: relative;
  padding: 50px 100px;
  display: flex;
  justify-content: space-between;
`
export default Footer
