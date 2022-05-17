import Link from "next/link";
import styled from "styled-components";

import DeleteButton from "components/common/DeleteButton";
import { useEffect, useState } from "react";

const CollectibleDetail = (props) => {
  const [videoUrl, setVideoUrl] = useState(props.data.video)
  const [isVideoUrl, setIsVideoUrl] = useState(false)

  useEffect(() => {
    if (videoUrl != '') {
      setIsVideoUrl(true);
    }
  }, [])

  return (
    <Container>
      <Title>{props.data.title}</Title>
      <ImageSection>
        <Image src={props.data.img} />
      </ImageSection>
      <DescSection>
        <Description isVideoUrl>{props.data.desc}</Description>
        {isVideoUrl && <VideoDscription>
          <CustomVideo width="240" height="400" controls>
            <source src={videoUrl} type="video/mp4" />
          </CustomVideo>
        </VideoDscription>}
      </DescSection>
      <ButtonSection>
        <Link href={`${props.id}/edit`}>
          <CustomButton>수정하기</CustomButton>
        </Link>
        <DeleteButton collectibleId={props.id}>삭제하기</DeleteButton>
      </ButtonSection>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled.span`
  margin-bottom: 1rem;
  font-size: 30px;
`;

const ImageSection = styled.div`
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  margin: 1rem 0;
`;

const DescSection = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Description = styled.p`
  width: ${props => props.videUrl ? '50%' : '100%'};
  font-size: 16px;
`;

const VideoDscription = styled.div`
  width: 50%;
  text-align: center;
`;

const CustomVideo = styled.video`
  margin: 0 auto;
`;

const ButtonSection = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 1rem auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CustomButton = styled.a`
  margin-right: 2rem;
  padding: 14px 16px;
  border-radius: 7px;
  color: #fff;
  font-weight: 700;
  background-color: blue;
`;

export default CollectibleDetail;
