import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

import Spinner from "components/common/Spinner";
import PreviewVideo from "./PreviewVideo";
import styled from "styled-components";

function CollectibleRegisterForm(props) {
  const [title, setTitle] = useState(props.title);
  const [desc, setDesc] = useState(props.desc);
  const [videoUrl, setVideoUrl] = useState(props.video);
  const [imageUrl, setImageUrl] = useState(props.img);
  const [makeVideoProgress, setMakeVideoProgress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isCompletedForm, setIsCompletedFrom] = useState(true);

  const descEl = useRef(null);

  const router = useRouter();

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const descChangeHandler = (e) => {
    setDesc(e.target.value);
  };

  const imageChangeHandler = (e) => {
    setImageUrl(e.target.value);
  };

  const createAIGuideBtnHandler = async () => {
    if (desc === "" || desc === undefined) {
      alert("설명란을 작성해주세요!");
      descEl.current.focus();
      return;
    }

    if (isLoading) {
      alert("영상 제작 중입니다.");
      return;
    }

    setIsLoading(true);
    try {
      const genTokenUrl = "/api/aistudios";
      let response = await fetch(genTokenUrl, {
        method: "POST",
        body: JSON.stringify({ desc: desc }),
      });
      let responseData = await response.json();

      if (!responseData.success) {
        throw new Error();
      }

      if (responseData.pending) {
        let timer = setInterval(async () => {
          setMakeVideoProgress(responseData.data.progress);

          response = await fetch("/api/aistudios/videos", {
            method: "POST",
            body: JSON.stringify({ token: responseData.data.token, key: responseData.data.key }),
          });
          responseData = await response.json();
          
          if (responseData.data.hasOwnProperty("video")) {
            clearInterval(timer);
            setVideoUrl(responseData.data.video);
            setIsLoading(false);
            setMakeVideoProgress("");
          }
        }, 1000);
      }
    } catch (error) {
      alert("영상 생성을 실패하였습니다");
      setIsLoading(false);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (isLoading) return;

    console.log(title, desc, videoUrl, imageUrl);
    if (
      title === "" ||
      desc === "" ||
      imageUrl === "" ||
      title === undefined ||
      desc === undefined ||
      imageUrl === undefined
    ) {
      setIsCompletedFrom(false);
      return;
    }
    setIsCompletedFrom(true);

    if (props.type === "edit") {
      try {
        const response = await fetch(`/api/collectibles/${props.collectibleId}`, {
          method: "PUT",
          body: JSON.stringify({ title: title, desc: desc, img: imageUrl, video: videoUrl }),
        });
        const responseData = await response.json();
        if (responseData.success) router.push(`/detail/${props.collectibleId}`);
      } catch (error) {
        alert(error.message);
        return;
      }
    } else {
      try {
        const response = await fetch("/api/collectibles", {
          method: "POST",
          body: JSON.stringify({ title: title, desc: desc, img: imageUrl, video: videoUrl }),
        });
        const responseData = await response.json();
        if (responseData.success) router.push("/detail");
      } catch (error) {
        alert(error.message);
        return;
      }
    }
  };

  const pageTitle =
    props.type === "edit" ? (
      <Title>전시 소장품 수정하기</Title>
    ) : (
      <Title>전시 소장품 등록하기</Title>
    );
  const submitBtnText = props.type === "edit" ? "수정하기" : "등록하기";

  return (
    <CreateContLayout>
      {pageTitle}
      <form onSubmit={submitHandler}>
        <InputWrapper>
          <InputLable>
            <label htmlFor="title">소장품 이름</label>
          </InputLable>
          <TitleInput type="text" id="title" onChange={titleChangeHandler} defaultValue={title} />
        </InputWrapper>

        <InputWrapper>
          <InputLable>
            <label htmlFor="description">설명</label>
          </InputLable>
          <DescInput
            id="description"
            onChange={descChangeHandler}
            ref={descEl}
            defaultValue={desc}
          />
        </InputWrapper>

        <CreateVideoWrapper>
          <CreateVideoButton onClick={createAIGuideBtnHandler}>AI 가이드 영상 생성</CreateVideoButton>
          {isLoading && <Spinner />}
          {isLoading && <p>생성중... {makeVideoProgress}</p>}
          <div>{videoUrl && <PreviewVideo url={videoUrl}></PreviewVideo>}</div>
        </CreateVideoWrapper>

        

        <InputWrapper>
          <InputLable>
            <label htmlFor="imgLink">이미지 링크</label>
          </InputLable>
          <input type="text" id="imgLink" onChange={imageChangeHandler} defaultValue={imageUrl} />
        </InputWrapper>

        <CreateButton type="submit" value={submitBtnText} />
        {!isCompletedForm && <ErrorMessage>모든 내용을 입력해주세요.</ErrorMessage>}
      </form>
    </CreateContLayout>
  );
}

const Title = styled.h2`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  margin: 10px 0 15px;
`;

const ErrorMessage = styled.p`
  color: red;
`;

const InputWrapper = styled.div`
  display: flex;
`;

const CreateVideoWrapper = styled.div`
  display: flex;
  margin: 1rem 0;
`;

const CreateVideoButton = styled.button`
  margin-right: 2rem;
  padding: 14px 16px;
  border-radius: 7px;
  color: #fff;
  font-weight: 700;
  background-color: blue;
  height: 4rem;
  width: 6rem;
`

const InputLable = styled.div`
  width: 40%;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const TitleInput = styled.input``;
const CreateContLayout = styled.div`
  max-width: 400px;
  margin: 0 auto;
  input {
    width: 100%;
    margin: 10px 0;
    padding: 10px;
  }
`;

const DescInput = styled.textarea`
  width: 100%;
  height: 150px;
  resize: none;
  margin: 5px 0;
  padding: 10px;
`;

const CreateButton = styled.input`
  font-size: 17px;
  width: 100px;
  color: #fff;
  font-weight: 700;
  background-color: blue;
  width: 100%;
  padding: 12px 0;
  border-radius: 7px;
  margin: 20px auto 0 auto;
  display: block;
  cursor:pointer;
`;

export default CollectibleRegisterForm;
