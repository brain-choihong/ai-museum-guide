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
    if (desc === "") {
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
    props.type === "edit" ? <h1>전시 소장품 수정하기</h1> : <h1>전시 소장품 등록하기</h1>;
  const submitBtnText = props.type === "edit" ? "수정하기" : "등록하기";

  return (
    <>
      {pageTitle}
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="title">소장품 이름</label>
          <input type="text" id="title" onChange={titleChangeHandler} defaultValue={title} />
        </div>
        <div>
          <label htmlFor="description">설명</label>
          <textarea
            id="description"
            onChange={descChangeHandler}
            ref={descEl}
            defaultValue={desc}
          />
          <button onClick={createAIGuideBtnHandler}>AI 가이드 영상 생성</button>
          {isLoading && <Spinner />}
          {isLoading && <p>생성중... {makeVideoProgress}</p>}
        </div>
        {videoUrl && <PreviewVideo url={videoUrl}></PreviewVideo>}
        <div>
          <label htmlFor="imgLink">이미지 링크</label>
          <input type="text" id="imgLink" onChange={imageChangeHandler} defaultValue={imageUrl} />
        </div>
        <div>
          <input type="submit" value={submitBtnText} />
          {!isCompletedForm && <ErrorMessage>모든 내용을 입력해주세요.</ErrorMessage>}
        </div>
      </form>
    </>
  );
}

const ErrorMessage = styled.p`
  color: red;
`;

export default CollectibleRegisterForm;
