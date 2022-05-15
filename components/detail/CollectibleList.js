import Link from "next/link";

import styled from "styled-components";

const CollectibleList = (props) => {
  return (
    <Container>
      <PageTitle>조선 전시실 소장품</PageTitle>
      <ul>
        {props.data.map((d, i) => {
          return (
            <Item key={i}>
              <Link href={`/detail/${d._id}`}>
                <a>
                  <ImageWrapper>
                    <Image src={d.img} />
                  </ImageWrapper>
                  <Title>{d.title}</Title>
                </a>
              </Link>
            </Item>
          );
        })}
      </ul>
    </Container>
  );
};

export default CollectibleList;

const Container = styled.div`
  width: 100%;
  max-width: 1000px;

  margin: 0 auto;
`;

const PageTitle = styled.span`
  font-size: 20px;
`

const Title = styled.p`
  color: #838b91;
`;

const ImageWrapper = styled.div`
  width: 229px;
  margin: 1rem 0;
  border-radius: 8px;

  overflow: hidden;
`;

const Image = styled.img`
  width: 229px;

  object-fit: cover;
  transition: all 0.1s linear;

  &:hover {
    transform: scale(1.05);
  }
`;

const Item = styled.li`
  float: left;
  margin-right: 1.3rem;
  margin-bottom: 1rem;
`;
