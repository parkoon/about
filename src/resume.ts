export type ProfileModel = typeof PROFILE;
export const PROFILE = {
  name: "박종혁 | Frontend Developer",
  link: {
    github: "https://github.com/parkoon",
    email: "devparkoon@gmail.com",
  },
};
export const LAST_UPDATED_AT = "2019. 09. 17";

export type AboutMeModel = typeof ABOUT_ME[number];
export const ABOUT_ME = [
  // 저는 OOOO 하다는 평가를 받고 있습니다.
  //  1. -
  //  2. -
  {
    prefix: "주변 동료에게",
    suffix: "피드백을 받고 있습니다.",
    items: [
      "생성산이 높은",
      "팀의 분위기를 밝게 만드는",
      "서비스를 산용자 관점에서 만들기 위해 노력하는",
    ],
  },
  {
    prefix: "",
    suffix: "팀을 선호합니다.",
    items: [
      "의사결정이 빠른",
      "구성원 모두가 같은 그림을 그리고 있는",
      "개인의 성장 뿐만 아니라 비즈니스 성장에 대한 열정이 있는",
    ],
  },
];

export const EXPERIENCE = [
  {
    corp: "퀄슨 (Qaulson)",
    position: "Frontend Developer",
    from: "2019.12",
    to: "2021.05",
    features: [
      {
        title: "리얼 클래스 2.0",
        link: "https://realclass.co.kr",
        from: "2020.10",
        to: "2021.05",
        description:
          "애니, 미드, 팝송 등 다양한 컨텐츠로 배우는 영어 교육 서비스",
        tasks: [
          "리얼 클래스 2.0 LG XPay 기반 결제 시스템 구축",
          "멀티 프로필 도입 (하나의 계정에서 학습 내역, 진도를 개인별로 관리)",
          "B2B 쿠폰 시스템 개발",
          "리얼 클래스 2.0 계정 시스템 구축",
          "소셜 로그인 적용 (카카오, 네이버, 애플)",
        ],
        spec: [
          "TypeScript",
          "React.js",
          "Next.js",
          "Styled-component",
          "Redux",
        ],
      },
      {
        title: "21세기 영어",
        link: "https://e21.co.kr",
        from: "2020.06",
        to: "2020.10",
        description:
          "아이가 좋아하는 애니로 놀이처럼 배우는 어린이 영어 교육 서비스",
        tasks: [
          "21세기 영어 LG XPay 기반 결제 및 계정 시스템 구축",
          "소셜 로그인 적용 (카카오, 네이버, 애플)",
          "자녀 관리 페이지를 Webview 로 구현하여 앱에서 자녀의 정보를 관리할 수 있는 환경 제공",
        ],
        spec: ["TypeScript", "React.js", "Next.js", "Styled-component"],
      },
      {
        title: "Qualson Bridge Serer",
        link: "",
        from: "2020.03",
        to: "2021.05",
        description:
          "영어 학습 서비스 서버와 계정 / 결제 서버를 중계하고 있는 전면 서버",
        tasks: [
          "영어 학습 서비스 서버와 계정 / 결제 서버의 전면 서버인 브릿지 서버 구축",
          "요구사항에 맞게 데이터 가공 후 클라이언트에 전달",
          "고객 유입 페이지의 static API caching 으로 페이지 렌더링 속도 개선",
          "21세기 영어 및 리얼클래스 2.0 소셜 로그인 서버 구축",
        ],
        spec: ["Node.js", "Express.js"],
      },
    ],
  },
  {
    corp: "날리지포인트",
    position: "솔루션 본부 / 기술 개발팀",
    from: "2016.08",
    to: "2019.10",
    features: [
      {
        title: "KT Local Conference Service",
        from: "2017.09",
        to: "2018.10",
        description:
          "KT GiGA Genine 를 통해 사내에서 화상 회의를 할 수 있는 서비스",
        tasks: [
          "Node.js 기반의 WebSocket 을 이용한 시그널링 서버 개발",
          "WebRTC 를 이용해 KT GiGA Genie 와 영상통화가 가능 브라우저 메신저 개발",
          "Canvas 와 WebSocket 을 이용한 실시간 드로잉 개발",
          "Electron.js 를 이용해 브라우저가 아닌 별도의 윈도우 프로그램을 개발하여 제공",
        ],
        spec: [
          "WebRTC",
          "HTML/CSS",
          "Javascript",
          "React.js",
          "Node.js",
          "Socket.io",
        ],
      },
      {
        title: "Knowledge Talk",
        link: "",
        from: "2017.09",
        to: "2019.11",
        description:
          "HTML5와 WebRTC(Web Real-Time Communication)를 이용하여 웹 브라우저에서 별도의 플러그인 없이 영상통화 및 데이터 전송이 가능한 메신저 솔루션",
        tasks: [
          "Node.js 기반의 WebSocket 을 이용한 시그널링 서버 개발",
          "사용자, 화상통화, 채팅, 문서 등 데이터를 관리하는 관리 페이지 구현",
          "WebRTC 를 이용해 영상통화, 화면공유, 녹화 시스템 구현",
          "Canvas 와 WebSocket 을 이용한 실시간 드로잉 개발",
        ],
        spec: [
          "WebRTC",
          "HTML/CSS",
          "Javascript",
          "React.js",
          "Node.js",
          "Socket.io",
          "Redis",
          "Next.js",
          "Redux",
          "Antd",
        ],
      },
      {
        title: "LG Smart TV Software Collaboration",
        link: "",
        from: "2016.05",
        to: "2019.10",
        description:
          "LG 와 협업하여 진행한 프로젝트로, LG Smart TV 내 사용자 가이드 및 TV 홍보 및 컨퍼런스를 위한 데모 앱 개발 프로젝트",
        tasks: [
          "유저 가이드 페이지 개발 및 컨텐츠 유지보수",
          "Node.js 를 이용해 국가별 컨텐츠 생성 자동화 모듈 제작",
          "webOS의 AI & Roll Control API 기반으로 OLED TV 데모 앱 개발",
        ],
        spec: ["WebOS", "HTML/CSS", "Javascript", "Enact.js"],
      },
    ],
  },
];

export type SideProjectModel = typeof SIDE_PROJECT[number];
export const SIDE_PROJECT = [
  {
    title: "6월의 신부를 위하나 청첩장",
    link: "https://github.com/parkoon/june-bride",
    descriptions: ["아이폰의 지갑앱을 밴치마킹 하여 디자인", "123123123"],
  },
  {
    title: "ㅁㄴㄹㄴㅁㄹㄴㅁㅇㄹ",
    link: "213123.com",
    descriptions: ["123123123", "123123123"],
  },
];
