import { useRouter } from "next/router";

import styled from "styled-components";

function DeleteButton(props) {
  const router = useRouter();
  const clickHandler = async (e) => {
    e.preventDefault();

    const isRemove = confirm("정말 삭제 하시겠습니까?");
    if (isRemove) {
      try {
        console.log(props.collectibleId);
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

  return <CustomButton onClick={clickHandler}>삭제하기</CustomButton>;
}

const CustomButton = styled.button`
  margin-right: 2rem;
  padding: 14px 16px;
  border-radius: 7px;
  color: #fff;
  font-weight: 700;
  background-color: blue;
`;

export default DeleteButton;
