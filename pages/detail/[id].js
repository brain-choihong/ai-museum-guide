import Link from "next/link";
import styled from "styled-components";

import DeleteButton from "components/common/DeleteButton";

export async function getServerSideProps({ params }) {
  const response = await fetch(`http://localhost:3000/api/collectibles/${params.id}`);
  const responseData = await response.json();
  const { data } = responseData;
  return {
    props: {
      collectible: {
        data: data,
        id: params.id,
      },
    },
  };
}

export default function CollectibleDetail({ collectible }) {
  return (
    <>
      <div>
        <Image src={collectible.data.img} />
        <video width="240" height="400" controls>
          <source src={collectible.data.video} type="video/mp4" />
        </video>
      </div>
      <Title>{collectible.data.title}</Title>
      <p>{collectible.data.desc}</p>
      <Link href={`${collectible.id}/edit`}>
        <CustomButton>수정하기</CustomButton>
      </Link>
      <DeleteButton collectibleId={collectible.id}>삭제하기</DeleteButton>
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

const CustomButton = styled.a`
  border: 1px solid black;
  font-size: 24px;
`