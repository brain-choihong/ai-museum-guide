import Link from "next/link";

import styled from "styled-components";

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/collectibles");
  const responseData = await response.json();
  const { data } = responseData;
  return {
    props: {
      data,
    },
  };
}

export default function Detail({ data }) {
  return (
    <>
      <h2>조선 전시실 소장품</h2>
      <ul>
        {data.map((d, i) => {
          return (
            <Item key={i}>
              <Link href={`/detail/${d._id}`}>
                <a>
                  <Image src={d.img} />
                  <Title>{d.title}</Title>
                </a>
              </Link>
            </Item>
          );
        })}
      </ul>
    </>
  );
}

const Title = styled.p`
  color: #838b91;
`;

const Image = styled.img`
  width: 100%;
  max-width: 200px;
  margin: 1rem 0;
`;

const Item = styled.li`
  float: left;
  margin-right: 1rem;
`;
