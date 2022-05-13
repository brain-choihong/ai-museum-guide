import CollectibleRegisterForm from "components/admin/CollectibleRegsiterForm";

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
export default function CollectibleEdit({ collectible }) {
  return (
    <>
      <div>
        <CollectibleRegisterForm
          title={collectible.data.title}
          desc={collectible.data.desc}
          video={collectible.data.video}
          img={collectible.data.img}
          type='edit'
          collectibleId={collectible.id}
        />
      </div>
    </>
  );
}
