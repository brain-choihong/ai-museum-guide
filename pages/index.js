import styled from 'styled-components'
export default function Home() {
  return (
    <Wrap>
      <p>AI 박물관 가이드</p>
      <img src="https://cdn.museum.go.kr/attach_files/H_20170530194340621_002.jpg" />
    </Wrap>
  )
}
const Wrap = styled.div`
  height: 95vh;
  width: 100%;
  text-align: center;
  font-size: 40px;
  p {
    margin: 15px 0;
  }
  img {
    width: 300px;
  }
`
