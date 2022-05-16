import styled from 'styled-components'
export default function Home() {
  return <Wrap>AI 박물관 가이드</Wrap>
}
const Wrap = styled.div`
  height: calc(100vh - 200px);
  width: 100%;
  text-align: center;
  font-size: 50px;
  padding-top: 200px;
`
