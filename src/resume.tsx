export type ProfileModel = typeof PROFILE;
export const PROFILE = {
  name: "박종혁",
  link: {
    github: "https://github.com/parkoon",
    linkedIn: "https://www.linkedin.com/in/devparkoon",
    email: "devparkoon@gmail.com",
  },
};
export const LAST_UPDATED_AT = "2024. 01. 29";

export type AboutMeModel = (typeof ABOUT_ME)[number];
export const ABOUT_ME = [
  // 저는 OOOO 하다는 평가를 받고 있습니다.
  //  1. -
  //  2. -
  {
    suffix: "팀원이라는 피드백을 받고 있습니다.",
    items: [
      "생산성이 높은",
      "팀의 분위기를 밝게 만드는",
      "고객 가치를 최우선으로 생각하는",
    ],
  },
  {
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
    corp: "엔터프라이즈\n블록체인",
    position: "Frontend Developer",
    from: "2023.2",
    to: "",
    features: [
      {
        title: "JOOB",
        description: "인도네시아 향 소상공인 구인구직 서비스",
        link: "https://grab.joob.id",
        from: "2023.12",
        to: "",
        tasks: [
          "잡 탐색부터 매칭까지 일거리 매칭에 필요한 전반적인 기능 작업",
          {
            title: "openapi-typescript 를 활용한 fetch 라이브러리 구현",
            link: "https://medium.com/@devparkoon/%EB%8D%94-%EC%9D%B4%EC%83%81-%EC%8A%A4%EC%9B%A8%EA%B1%B0-%EB%B3%B4%EA%B3%A0-%ED%83%80%EC%9E%85%EC%9D%84-%ED%83%80%EC%9D%B4%ED%95%91%ED%95%98%EC%A7%80-%EC%95%8A%EA%B8%B0-feat-openapi-typescript-0229a0581109",
          },
          {
            title: "페이지 라우팅 효율화",
            link: "https://medium.com/@devparkoon/dx-%EA%B0%9C%EC%84%A0-%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%9D%BC%EC%9A%B0%ED%8C%85-%ED%9A%A8%EC%9C%A8%ED%99%94-919c3e8e19fd",
          },
        ],
        spec: [
          "Typescript",
          "React.js",
          "Next.js",
          "Zustand",
          "react-query",
          "tailwind css",
          "openapi-typescript",
        ],
        lookBack: [],
      },
      {
        title: "Data ID Wallet",
        description:
          "블록체인을 활용하여 경력과 개인의 일거리 수행 경험을 기록하는 Data ID 글로벌 서비스",
        link: "https://data.id",
        from: "2023.09",
        to: "2023.12 (서비스 일시 중단)",
        tasks: [
          "Next.js App router 도입 및 프로젝트 기반 작업",
          "엑셀 기반 다국어 파일 생성 자동화",
          "RSC / RCC 에서 사용할 수 있는 cookie 기반 다국어 라이브러리 개발",
          "재사용성이 높은 공용컴포넌트 부터 서비스 로직이 포함된 컴포넌트를 분리하여 설계",
        ],
        spec: [
          "Typescript",
          "React.js",
          "Next.js",
          "Zustand",
          "react-query",
          "tailwind css",
          "openapi-typescript",
        ],
        lookBack: [
          {
            title: "App Router 도입",
            descriptions: [
              "프로젝트를 세팅할 때 App Router가 나온지 얼마 안됐지만, Pages Router를 사용하는건 레거시로 생각에 App Router로 프로젝트 기반 작업을 시작했다.",
              "axios를 사용할 수 없다는 단점이 있었지만, router group, loading/error/layout 과 같이 관심사를 분리하고 서비스 로직에 집중할 수 있는 환경, app 디렉토리 내 _components 와 같은 폴더 구조를 허용하면서 colocation 방향 제시 등이 매력적이었다.",
              "물론, next/image 사용시 OOM 이슈, scroll restoration 이슈 등이 있었지만 App Router의 커뮤니티는 작지 않았고, 이슈 탭에서 충분히 해결책을 찾을 수 있는 정도였다.",
            ],
          },
          {
            title: "다국어 처리",
            descriptions: [
              "대부분의 다국어 처리 라이브러리는 path 기반으로 동작한다. Data ID Wallet은 첫 path를 핸들러라 명칭했고, 그 핸들러를 사용자별로 가져갈 수 있었기에 path 기반의 다국어 처리는 어려운 상황이었다.",
              "이러한 이유로 cookie 기반으로 다국어를 처리할 수 있는 라이브러리가 필요했다. 다국어 처리의 핵심은 설정된 언어를 기준으로 파일을 읽고, 번역 키 값을 이용해 텍스트를 가져오는 정도라 라이브러리를 직접 만드는데 큰 어려운음 없었다. 텍스트 내부에 변수 처리를 정규 표현식으로 처리해야 하는 부분이 조금 까다로웠지만 검색을 통해서 충분히 해결할 수 있는 정도였다.",
              "언어가 설정되어 있지 않은 경우, next middleware 에서 기본 언어 쿠키에 세팅해주고 redirect를 해주고 있었는데 쿠키를 가져갈 수 없는 환경에서는 무한 redirect가 발생했다. (실제로, 웹 크롤러가 og image 처리를 위해 페이지에 접근했을 떄 문제가 발생했다.) ",
              "위 문제를 해결하기 위해, middleware에서 redirect가 아닌, next response 에 쿠키를 세팅해 줘야 했다. 이 방법은 다른 문제를 발생시켰는데, middleware에서 설정한 쿠키를 next/headers 에서 제공해주는 cookies를 이용해 바로 가져다 쓸 수 없었고, 새로고침을 해야 그 값을 가져올 수 있었다.",
              "next/headers의 cookies는 요청 헤더에 접근을 하고 있고, 나는 middleware에서 응답 헤더에 값을 넣어주고 있었다. 응답 헤더에 있는 쿠키를 요청 헤더에 오버라이딩 하는 작업이 필요했고, 이를 통해 문제를 해결 할 수 있었다.",
            ],
          },
        ],
      },
      {
        title: "요긱",
        description: "긱 워커 및 N잡러를 위한 일거리 매칭 서비스",
        link: "",
        from: "2023.02",
        to: "2023.09 (서비스 종료)",
        tasks: [
          "채용부터 계약 및 출퇴근 관리를 아우르는 파트너 전용 플랫폼 개발",
          "파트너사 별 계약서 템플릿 및 서명 모듈 구축",
          "cheerio 및 pdfkit을 활용한 PDF 변환 모듈 구축",
          "쿠폰 발급 등 판촉을 위한 이벤트 페이지 작업",
        ],
        spec: [
          "Typescript",
          "React.js",
          "Next.js",
          "Antd",
          "react-query",
          "tailwind css",
          "openapi-typescript",
        ],
        lookBack: [
          {
            title: "일을 좀 더 효율적으로",
            descriptions: [
              '입사하고 업무를 받기 전, 파트너 전용 플랫폼(이하 PWS)을 PoC 하는 과정에 있고, "결과물이 너무 늦게 나오는거 같아요" 라는 말을 PM을 통해 들었다.',
              "PWS는 일반 사용자를 대상으로 하는 서비스가 아닌, 데이터를 다뤄야 하는 입점사를 대상으로 하고 있었다. 그럼에도 퍼블리싱 작업부터 너무 많은 시간을 투자하고 있었기에 결과물이 늦을 수 밖에 없었다.",
              "위와 같은 상황에서는 최소한의 디자인으로 사용성에만 문제가 없으면 된다고 생각했기에 UI 라이브러리를 커스터마이징해서 사용하는 것을 제안했다. 디자인 인력 또한 PWS가 아닌 메인 서비스(요긱)에 투입하는 것을 제안했다.",
              "제안이 반영되면서, 유저 플로우에 대해서만 기획자와 논의하고 UI/UX는 역으로 디자이너에게 컨펌을 받는 방식으로 업무를 진행했다.",
              "이를 통해 인력 리소스를 효율적으로 사용할 수 있었고, 작업 속도 역시 확연히 빨라졌다.",
            ],
          },
          {
            title: "PDF를 좀 더 현실적으로",
            descriptions: [
              "브라우저단에서 캔버스를 이용해 html을 이미지로 변환하고 그것을 pdf로 변환하면 쉽게 웹 페이지를 pdf로 변환할 수 있었지만, 파일 암호 설정과 같은 기능을 이용하기 위해서는 단순히 브라우저에서 파일을 생성하는 것이 아닌 서버단에서 처리가 필요했다.",
              "Node 환겨에서 puppeteer 라이브러리를 이용하면 페이지를 스크래핑해서 pdf를 변환할 수 있었지만, 서명 시점에서 서비스 입점사의 도장 이미지를 삽입해야 하는 요구사항이 있어 puppeteer를 사용할 수 없었다.",
              "대안으로, pdfkit 라이브러리를 선택했고 pdfkit은 우리가 생각하는 pdf를 그대로 만들 수 있었지만, html을 cheerio를 이용해서 분석하고 각 태그를 pdfkit으로 정의한 스타일에 매칭시켜야 하는 번거로움이 있었다. 또한 html depth를 재귀를 통해 처리하는 것도 쉬운일이 아니었다.",
              "모든 html tag에 대해서 pdfkit에 맞게 변환하는 작업을 했었더라면, 가치 있는 오픈 라이브러리가 탄생할 수 있었지만, 계약서에 들어가는 약속된 태그에 대해서만 작업을 해놓은게 조금 아쉽다.",
            ],
          },
        ],
      },
    ],
  },
  {
    corp: "한국신용데이터",
    position: "Frontend Developer",
    from: "2021.6",
    to: "2023.2",
    features: [
      {
        title: "캐시노트 마켓",
        description: "소상공인에게 상품을 공급하는 플랫폼",
        link: "",
        from: "2021.9",
        to: "2023.2",
        tasks: [
          "상품 탐색부터 장바구니, 결제까지의 커머스에 필요한 기능 작업",
          "쿠폰 룰렛과 같은 판촉을 위한 이벤트 페이지 작업",
          "react-query 를 openapi-typescript 와 함께 사용하여 타입 세이프하게 API 작업",
        ],
        spec: [
          "Typescript",
          "React.js",
          "Next.js",
          "react-query",
          "tailwind css",
          "openapi-typescript",
        ],
        lookBack: [
          {
            title: "무에서 유를 창조",
            descriptions: [
              "프론트엔드 2명이 레포 이름부터 시작해 기술 스펙 선택 및 구현, 배포까지 3개월이라는 짧다면 짧은 기간동안 빠른 배포를 위해 앞만 보고 달렸던거 같다.",
            ],
          },
          {
            title: "디자인을 받고",
            descriptions: [
              "디자인을 처음 받고, 바로 페이지 작업을 하는 것이 아닌 골방에서 컴포넌트 설계부터 시작했다. 디자이너와 커뮤니케이션을 통해 디자인 의도를 파악하고 공통으로 처리할 수 있는 부분에 대해서는 최대한 공통으로 처리하려고 노력했다.",
            ],
          },
          {
            title: "개발 하면서",
            descriptions: [
              "react-query 와 openapi-typescript 조합은 신의 한 수 였던거 같다. react-query 를 사용하면 키 값을 어떻게 관리할지 고민을 많이 하게 되는데, openapi-typescript 로 생성된 url 을 키 값으로 사용하니 고민 하는 시간을 많이 줄일 수 있었다. 또한, query parameter 와 response body 모두 url 과 매칭해서 타이핑 해놓으니, swagger 를 참고해 모델을 만들고 만든 모델을 react-query 에 타이핑 하는 시간과 수고를 덜 수 있었다.",
              "query parameter 와 response body 를 url 과 매칭하는데 생각보다 타이핑이 쉽지 않아서, ts-toolbelt 를 활용하여 좀 더 쉽게 원하는 타이핑을 할 수 있었다.",
              "인터렉션(e.g., 버튼 클릭, 장바구니 수량 변경 알림 등) 작업을 해보고 싶었지만, 우선순위에 밀려 못한 것이 아쉽다. 배포 이후에 다른 커머스 서비스를 참고하여 장바구니 담기 애니메이션, 장바구니 카운팅 애니메이션을 적용했다.",
              "장바구니 데이터(e.g., 장바구니 수량)를 로컬 스토리지를 활용하지 않고 API 를 활용했기에, 데이터를 변경할 때마다 API 결과를 기다리고 화면을 업데이트해야 했다. 이 부분의 퍼포먼스를 개선하기 위해서 react-query 의 optimistic updates 를 활용했다.",
              "화면 작업을 주로 담당하고 있어서, 배포 환경 구축(github action + docker + cloud front + ecs)을 제대로 경험해보지 못한게 아쉽다.",
            ],
          },
          {
            title: "배포 이후에",
            descriptions: [
              "첫 배타 서비스 런칭이 있던 날, hotjar 를 통해 사용자가 어떠한 형태로 프로덕을 탐색하는지 팀원들과 같이 지켜보면서, ‘이건 이렇게 바꿔보면 어쩔지, 이건 어떻게 조정해보면 좋을지’에 대해서 얘기했던게 기억이 많이 남는다.",
              "배포 이전에 챙기지 못했던 백엔드 작업, 정산 작업 등으로 클라이언트 작업량이 줄면서 시간이 뜨는 날이 많았다. 이 때 배포 일정에 신경쓰면저 챙기지 못했던 것들 (e.g., 리팩토링, 인터렉션, UI/UX)이나, 백엔드 도움 없이 프론트가 처리할 수 있는 일에 대해서 많은 고민(e.g., 최근 검색어 구현, 상품 디스플레이 형태 작업 등)을 했다.",
            ],
          },
        ],
      },
      {
        title: "마켓 파트너센터",
        description:
          "캐시노트 마켓에 입점한 입점사가 상품을 등록하고, 주문을 관리할 수 있는 플랫폼",
        link: "https://vendors.kcd.co.kr/v2",
        from: "2021.9",
        to: "2023.2",
        tasks: [
          "상품 판촉비 관리, 쿠폰 관리와 같이 판촉을 위한 어드민 작업",
          "상품 관리, 주문 관리, 배송 관리와 같이 상품 주문에 필요한 기능 작업",
          "신규 주문수, 금액 사업장 등의 통계 데이터를 볼 수 있는 대시보드 작업",
        ],
        spec: [
          "Typescript",
          "React.js",
          "Next.js",
          "Antd",
          "react-query",
          "tailwind css",
          "openapi-typescript",
        ],
        lookBack: [
          {
            title: "V1 에서 V2로",
            descriptions: [
              "다중 입점사가 들어오기 전까지, 해당 서비스를 사용하는 사람은 회사 내부 사용자였고, 메인 서비스(캐시노트 마켓) 우선순위에 밀려 사용성에 대해서 시간을 많이 투자하지 못했다.",
              "디자인도 전달받지 않은 상황에서 antd 에서 제공해주는 컴포넌트를 UX를 고려하지 않고 붙이기만 했다.",
              "react-query를 openapi-generator와 같이 사용했다. openapi-generator는 openapi-typescript와 다르게 함수까지 모두 자동으로 생성해준다. 여기서 문제가 서버에서 API 스펙을 수정하면 함수명이 달라지는 상황이 생겼고, 이는 코드 문제까지 이어졌다. 그리고 함수를 커스터마이징 할 수 없던 것이 가장 불편했다.",
              "V1을 구성할 때 webpack을 한땀 한땀 만들어 나갔는데, 시간을 대부분 메인 서비스에 투자하다 보니 webpack 이슈가 있을 때 이슈 해결에 시간을 사용하는게 효율적이지 못하다고 판단했다. V2 에서는 욕심을 버리고 메인 서비스와 동일한 next.js로 프로젝트를 다시 구성했다.",
              "어드민 성향이 강한 서비스라 SSR을 사용할 필요가 없지만, zero config, page architecture, image optimization 등 SSR 이외에 next.js 에서 제공해주는 기능들이 매력적이라 선택하게 되었다.",
              "V2로 가면서 V1의 코드를 모두 엎고 위 문제들을 해결했다. 코드를 엎고 새로 만들어 가는 과정에서 성장을 할 수 있는 것 같다.",
            ],
          },
          {
            title: "UI/UX",
            descriptions: [
              "내부 운영 툴로만 사용한다면 디자인이 크게 상관이 없지만, 2022년 4분기에는 다중 입점사 대응 과제를 통해 다른 사장님들도 사용해야 하는 서비스가 되기 때문에 UI/UX가 중요해졌다.",
              "디자인 인력 부족으로, 디자인을 받을 수 없는 상황에서 antd를 사용한 서비스를 참고해 디자인을 개선해 나갔다.",
              "UX의 경우, 내가 사장님이 되어 실제 상황과 유사한 시나리오를 구성하고, 툴을 직접 사용해 보면서 불편한 점들을 개선하려고 했다. 또한 운영업무로 해당 툴을 미리 사용하고 있었던 팀원에게도 불편한 점들을 설문하고 개선해나갔다.",
            ],
          },
        ],
      },
      {
        title: "한국신용데이터 홈페이지",
        description:
          "KCD 미션, 비전, 제품, 조직 문화, 채용 소식 등을 한 눈에 볼 수 있는 공간",
        link: "https://www.kcd.co.kr",
        from: "2022.6",
        to: "2023.2",
        tasks: [
          "홈, 회사소개, 서비스, 팀 문화, 인재영입, 새 소식 페이지 작업",
          "Headless CMS(confentful)를 이용하여 채용 정보, 최근 뉴스, 보도 자료 관리",
        ],
        spec: [
          "Typescript",
          "React.js",
          "Next.js",
          "emotion",
          "contentful",
          "vercel",
        ],
        lookBack: [
          {
            title: "나 홀로 한달 반",
            descriptions: [
              "기존에 있던 홈페이지에 대해서 알고 있는 사람이 아무도 없었고, 코드도 전혀 관리가 되고 있지 않았다. 브랜딩 TF 팀이 구성이 되고 디자인이 나왔지만 내부에 개발자 부족해 외주 업체를 맡겨야 하는 상황이 었다. 우리 회사의 홈페이지를 외부에 맡기는 것도 그렇고, 사이드 프로젝트를 하고 싶었던 참에 홈페이지 개발에 참여하게 되었다.",
              "Headless CMS를 처음 다뤄 봤는데, 서버 구성 없이 데이터를 다룰 수 있다는 점이 굉장히 매력적이었다. 다른 서비스에도 특정 유저를 타겟팅 하고 있는 데이터가 아니고 백엔드 인력이 부족한 상황에서 Headless CMS를 사용해도 좋을 것 같다.",
              "인재영입 페이지, 새 소식 페이지의 경우 데이터 변화가 잦을 수 있기 때문에 ISR로 구성했다.",
              "회사 연혁과 같이 데이터 변화가 많지 않은 경우에는 SSG로 구성하고, 데이터 변화가 있는 경우 다시 빌드 및 배포가 이뤄질 수 있도록 contentful에 vercel deploy webhook을 구성했다.",
            ],
          },
        ],
      },
    ],
  },
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
        lookBack: [],
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
        lookBack: [],
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
        lookBack: [],
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
        lookBack: [],
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
        lookBack: [],
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
        lookBack: [],
      },
    ],
  },
];

// 사이드 프로젝트 데이터는 `<SideProject />` 컴포넌트에 하드코딩
export type SideProjectModel = (typeof SIDE_PROJECT)[number];
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

export const LOOK_BACK = [
  {
    title: "asdasdas",
    descriptions: [`${(<code>zzz</code>)}aaaaa`],
  },
];
