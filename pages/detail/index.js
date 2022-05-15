import CollectibleList from "components/detail/CollectibleList";

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
    <CollectibleList data={data} />
  );
}
