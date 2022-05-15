import { useRouter } from "next/router";

function DeleteButton(props) {
  const router = useRouter();
  const clickHandler = async (e) => {
    e.preventDefault();

    const isRemove = confirm("정말 삭제 하시겠습니까?");
    if (isRemove) {
      try {
        const response = await fetch(`/api/collectibles/${props.collectibleId}`, {
          method: "DELETE",
        });
        const responseData = await response.json();
        router.push("/detail");
      } catch (error) {
        alert("삭제 실패하였습니다.");
      }
    }
  };

  return <button onClick={clickHandler}>삭제하기</button>;
}

export default DeleteButton;
