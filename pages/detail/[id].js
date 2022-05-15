import Link from "next/link";
import styled from "styled-components";

import DeleteButton from "components/common/DeleteButton";
import CollectibleDetail from "components/detail/CollectibleDetail";

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

export default function Detail({ collectible }) {
  return (
    <CollectibleDetail data={collectible.data} id={collectible.id} />
  );
}
