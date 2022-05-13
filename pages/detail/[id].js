import styled from "styled-components";

export async function getServerSideProps({ params }) {
  const response = await fetch(`http://localhost:3000/api/collectibles/${params.id}`);
  const responseData = await response.json();
  const { data } = responseData;
  return {
    props: {
      data,
    },
  };
}

export default function CollectibleDetail({ data }) {
  return (
    <>
      <div>
        <Image src={data.img} />
        <video width="240" height="400" controls>
          <source src={data.video} type="video/mp4" />
        </video>
      </div>
      <Title>{data.title}</Title>
      <p>{data.desc}</p>
    </>
  );
}

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  margin: 1rem 0;
`;

const Title = styled.span`
  margin-bottom: 1rem;
  font-size: 30px;
`;
