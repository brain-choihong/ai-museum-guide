# AI 박물관 가이드

## 소개
박물관 소장품을 AI 가이드의 설명과 함께 감상하세요. 관리자는 DeepBrain AI의 [`AI STUDIOS`](https://aistudios.com/)의 기술을 통하여 소장품과 AI가이드를 쉽게 등록할 수 있습니다.

## 기능
* 로그인, 회원가입
* 소장품 등록, 수정, 삭제
* AI 휴먼 가이드 생성

## 설치 및 실행 방법
### DB
- 데이터베이스는 MongoDB를 사용합니다
- .env의 `MONGO_URI=`의 연결정보를 넣어줍니다.
### Project
1. ai-museum-guide를 clone하고 dependency를 설치합니다.
```shell
$ npm install

# or

$ yarn 
```

2. 루트 경로에 .env.local 파일 생성후 아래와 같이 환경변수를 넣어줍니다. [`해당 값들은 DeepBrainAI 측에서 제공 받아야 합니다.`](https://aistudios.com/demo)
```shell
NEXT_PUBLIC_GENERATE_TOKEN_URL=

NEXT_PUBLIC_MAKE_VIDEO_URL=
NEXT_PUBLIC_GET_VIDEO_URL=

NEXT_PUBLIC_APPID=
NEXT_PUBLIC_PLATFORM=
NEXT_PUBLIC_UUID=
NEXT_PUBLIC_SDK_V=
NEXT_PUBLIC_CLIENTHOSTNAME=
NEXT_PUBLIC_MODEL=
NEXT_PUBLIC_LANGUAGE=
```

3. 실행
```shell
$ npm run dev

# or

$ yarn dev
```

## AI 박물관 가이드 페이지
<img width="1514" alt="Screen Shot 2022-05-16 at 12 07 44 AM" src="https://user-images.githubusercontent.com/18342765/168479833-935d26d1-11d2-42b3-99b6-7d8ad92afaaa.png">
