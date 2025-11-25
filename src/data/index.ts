export const PROFILE = {
  name: "빠른 실행으로 고객 가치를 만드는, FE 박종혁",
  link: {
    github: "https://github.com/parkoon",
    linkedIn: "https://www.linkedin.com/in/devparkoon",
    email: "devparkoon@gmail.com",
  },
};

export const LAST_UPDATED_AT = "2025. 11. 24";

export const ABOUT_ME = [
  "일을 작게 나누고 빠르게 실행하여 고객 가치를 만들어온 9년차 FE 개발자 박종혁입니다.",
  "복잡한 요구사항을 실행 가능한 단위로 쪼개어 빠르게 검증하고 개선하는 것을 즐깁니다. 완벽한 계획보다 빠른 실행과 피드백이라는 신념으로, 불확실성 속에서도 명확한 결과를 만들어왔습니다.",
  "고객 가치를 최우선으로 생각합니다. 완벽한 기능 10개보다 핵심 기능 3개로 빠르게 출시하여 사용자 피드백을 받거나, 과도한 추상화보다 명확하고 읽기 쉬운 코드를 작성하는 등, 때로는 기술적 우아함보다 실제 사용자가 마주하는 문제 해결을 우선시합니다.",
  "동료의 잠재력을 끌어내는 개발자입니다. 각자의 강점에 맞는 역할 분담을 제안하여 팀 전체의 생산성을 높입니다. 실패를 학습 기회로 전환하는 긍정적 태도와 원활한 커뮤니케이션 능력으로, 개인과 팀이 함께 성장하는 문화를 만들어갑니다.",
  "빠른 의사결정과 실행을 선호합니다. 실패를 두려워하지 않고 빠르게 시도하며, 그 과정에서 얻은 인사이트로 더 나은 결과를 만들어내는 팀과 함께 성장하고 싶습니다.",
];

type WorkExperience = {
  corp: string;
  about?: string[];
  position: string;
  from: string;
  to: string;
  features: WorkExperienceFeature[];
};
type WorkExperienceFeature = {
  title: string;
  from: string;
  to: string;
  with?: {
    fe?: number;
    be?: number;
  };
  description?: string;
  achievements: string[];
  contributions: string[];
  spec: string[];
};

export const EXPERIENCE: WorkExperience[] = [
  {
    corp: "자비스앤빌런즈 (삼쩜삼)",
    about: [
      "세금 환급 1위 플랫폼",
      "누적 사용자 2,000만+",
      "리워드/혜택 플랫폼 운영",
    ],
    position: "Frontend Developer",
    from: "2024.09",
    to: "",
    features: [
      {
        title: "리워드 플랫폼 구축 및 운영",
        from: "2024.09",
        to: "",
        description: "FE 개발 70% · 리워드 피쳐 기획 · 사용자 데이터 분석",
        with: {
          fe: 2,
          be: 2,
        },
        achievements: [
          "DAU 30만+ 달성으로 2025년 연매출 120억 목표 기반 마련",
          "실험실 문화 제안 및 운영으로 빠른 검증 체계 구축",
          "15+ 리워드 피쳐 런칭 및 다양한 수익 모델 실험",
        ],
        contributions: [
          "보상-참여-리텐션 패턴 분석 → 반복 패턴 발견으로 신규 피처 개발 시간 단축",
          "실험실 운영 도입 → 디자인 완성도보다 사용자 반응 우선, 3개월 만에 3개 피처 정식 출시",
          "웹뷰 QA SDK 개발 → 캡처-드로잉-지라/슬랙 자동 연동으로 QA 리소스 절감",
          "프로토타입 기반 커뮤니케이션 도입 → 실제 동작하는 프로토타입으로 의사결정 속도 개선",
          "기획/백엔드 설계 초기 참여 → 단순한 구조 제안으로 개발 복잡도 감소 및 확장성 확보",
        ],
        spec: [
          "TypeScript",
          "React.js",
          "Next.js",
          "Zustand",
          "React Query",
          "Emotion",
          "Framer Motion",
          "OpenAPI Typescript",
        ],
      },
    ],
  },
  {
    corp: "엔터프라이즈 블록체인",
    about: ["일거리 매칭 플랫폼 운영"],
    position: "Frontend Developer",
    from: "2023.02",
    to: "2024.07",
    features: [
      {
        title: "인도네시아 대상 소상공인 구인구직 서비스",
        from: "2023.12",
        to: "2024.07",
        description:
          "FE 개발 70% · 웹 버전 설계부터 배포까지 주도 · 기술 의사결정 · UI/UX 설계",
        with: {
          fe: 2,
          be: 3,
        },
        achievements: [
          "앱 전용 서비스를 웹으로 확장하여 Grab 앱 지면 연동 성공",
          "웹 버전 출시로 유저 유입 경로 다각화 및 접근성 개선",
        ],
        contributions: [
          "타입 세이프 Fetch 라이브러리 구현 → Swagger 문서 기반 자동 타이핑으로 일관된 API 작업 환경 구축",
          "동적 라우팅 시스템 설계 → 라우팅 오류 최소화, 개발자 경험 개선",
          "리소스 제약 상황에서 인도네시아 주요 서비스 벤치마킹과 자체 UI/UX 설계 병행 → 빠른 기능 개발과 현지화 인사이트 확보",
          "Optimistic update 패턴 도입 → 인도네시아 네트워크 환경에서도 원활한 사용자 경험 제공",
          "재사용 가능한 컴포넌트 라이브러리 구축 (40+ 컴포넌트) → 일관된 UI/UX 제공 및 개발 속도 개선",
        ],
        spec: [
          "TypeScript",
          "React.js",
          "Next.js",
          "Zustand",
          "React Query",
          "Tailwind CSS",
          "OpenAPI Typescript",
        ],
      },
      {
        title: "Data ID Wallet 글로벌 플랫폼 구축",
        from: "2023.09",
        to: "2023.12",
        description:
          "FE 개발 60% · Next.js App Router 도입 리드 · 다국어 시스템 설계",
        with: {
          fe: 2,
          be: 3,
        },
        achievements: [
          "3개국 동시 출시 준비 완료 (서비스 피벗으로 일시 중단)",
          "Cookie 기반 다국어 처리로 경로 독립적 언어 전환 구현",
        ],
        contributions: [
          "Next.js 13 App Router 초기 도입 → 초기 로딩 속도 개선, SEO 최적화",
          "Cookie 기반 커스텀 다국어 라이브러리 자체 개발 → Path 독립적 언어 전환으로 유연한 URL 구조 확보, 3개 언어 지원",
          "엑셀 기반 다국어 파일 자동 생성 시스템 구축 → 번역 작업 효율성 개선, 휴먼 에러 최소화",
          "RSC/RCC 하이브리드 아키텍처 설계 → 클라이언트 번들 크기 감소",
          "무한 리다이렉트 이슈 해결 → 웹 크롤러 접근성 문제 해결",
        ],
        spec: [
          "TypeScript",
          "React.js",
          "Next.js",
          "Zustand",
          "React Query",
          "Tailwind CSS",
          "OpenAPI Typescript",
        ],
      },
      {
        title: "요긱 B2B 파트너 플랫폼 구축",
        description:
          "FE 개발 100% · 프로세스 개선 주도 · 전자계약 시스템 설계 · 기술 스택",
        from: "2023.02",
        to: "2023.09",
        achievements: [
          "리소스 재배치 전략으로 메인 서비스와 B2B 플랫폼 동시 성장",
          "입점사 30개+ 온보딩",
          "디자인 리소스 효율화로 개발 속도 개선 및 목표 일정 내 출시",
        ],
        contributions: [
          "리소스 효율화 전략 수립 → 디자인 인력은 메인 서비스에 집중, B2B는 개발자 주도 UI/UX 설계",
          "타사 B2B 서비스 벤치마킹 → 디자인 리소스 없이 빠른 UI/UX 설계",
          "전자계약 시스템 구축 (Cheerio + PDFKit) → 파트너사별 계약서 템플릿 관리, 전자 서명, 도장 이미지 동적 삽입, PDF 암호화로 법적 효력 있는 계약서 자동 생성",
          "다중 입점사 대응 권한 시스템 구축 → Role 기반 접근 제어",
        ],
        spec: [
          "TypeScript",
          "React.js",
          "Next.js",
          "Antd",
          "React Query",
          "Tailwind CSS",
          "OpenAPI Typescript",
        ],
      },
    ],
  },
  {
    corp: "한국신용데이터",
    position: "Frontend Developer",
    about: [
      `Series C 핀테크 유니콘`,
      `소상공인 금융·경영 플랫폼 '캐시노트' 운영`,
    ],
    from: "2021.06",
    to: "2023.02",
    features: [
      {
        title: "캐시노트 마켓",
        description:
          "FE 개발 50% · 상품 탐색부터 결제까지 커머스 핵심 기능 담당 · API 설계 참여",
        with: {
          fe: 2,
          be: 4,
        },
        from: "2021.09",
        to: "2023.02",
        achievements: [
          "3개월 만에 MVP 출시로 빠른 시장 검증",
          "소상공인 맞춤형 B2B 커머스 플랫폼 출시",
        ],
        contributions: [
          "상품 목록, 검색, 필터링 기능 구현 → 카테고리별 상품 탐색 및 정렬 기능 제공",
          "쿠폰 룰렛, 타임세일 등 다양한 프로모션 시스템 구축 → 마케팅 팀 자체 이벤트 운영",
          "재사용 가능한 컴포넌트 라이브러리 구축 → 일관된 UI 유지 및 개발 속도 개선",
        ],
        spec: [
          "TypeScript",
          "React.js",
          "Next.js",
          "React Query",
          "Tailwind CSS",
          "OpenAPI Typescript",
        ],
      },
      {
        title: "마켓 파트너센터 V2 전면 개편",
        description: "FE 개발 100% · V1→V2 마이그레이션 전담 · UI/UX 개선 주도",
        with: {
          fe: 1,
        },
        from: "2021.09",
        to: "2023.02",
        achievements: [
          "입점사의 상품/주문 관리 효율성 개선",
          "다중 입점사 지원으로 비즈니스 확장성 확보",
        ],
        contributions: [
          "Webpack 기반 V1에서 Next.js 기반 V2로 전면 재구축 → Zero-config로 빌드 설정 간소화, 개발 환경 안정화",
          "어드민 UI 표준화 → 일관된 UX 제공, 신규 입점사 온보딩 시간 감소",
          "실시간 대시보드 구현 → 매출·주문 현황 실시간 모니터링으로 빠른 의사결정 지원",
          "엑셀 대량 업로드/다운로드 최적화 → 대용량 상품 데이터의 안정적 처리",
          "다중 입점사 대응 권한 시스템 구축 → Role 기반 접근 제어",
        ],
        spec: [
          "TypeScript",
          "React.js",
          "Next.js",
          "Antd",
          "React Query",
          "Tailwind CSS",
          "OpenAPI Typescript",
        ],
      },
      {
        title: "한국신용데이터 홈페이지",
        description: "FE 개발 100% · Headless CMS 도입 · SEO 최적화",
        with: {
          fe: 1,
        },
        from: "2022.06",
        to: "2023.02",
        achievements: [
          "SEO 최적화로 검색 엔진 노출 개선 및 트래픽 증가",
          "비개발자도 직접 콘텐츠 업데이트 가능한 시스템 구축",
        ],
        contributions: [
          "Headless CMS 도입 → 비개발자도 콘텐츠 관리 가능한 환경 구축",
          "ISR/SSG 하이브리드 렌더링 전략 → 채용 페이지 ISR, 기타 정적 페이지 SSG로 최적 성능 달성",
          "Deploy Webhook 자동화 → 콘텐츠 변경 시 자동 빌드/배포로 운영 효율성 개선",
        ],
        spec: [
          "TypeScript",
          "React.js",
          "Next.js",
          "emotion",
          "contentful",
          "vercel",
        ],
      },
    ],
  },
  {
    corp: "퀄슨",
    about: [
      "에듀테크 스타트업",
      "리얼클래스, 21세기영어 등 영어 교육 서비스 운영",
    ],
    position: "Frontend Developer",
    from: "2019.12",
    to: "2021.05",
    features: [
      {
        title: "리얼클래스 2.0 결제/계정 시스템 구축",
        description: "FE 개발 60% · 결제 시스템 전담 · 멀티 프로필 설계",
        with: {
          fe: 2,
          be: 2,
        },
        from: "2020.10",
        to: "2021.05",
        achievements: [
          "결제 시스템 구축",
          "멀티 프로필 도입으로 가족 단위 사용자 확장",
        ],
        contributions: [
          "LG U+ XPay 결제 모듈 통합 → 간편 결제 지원",
          "멀티 프로필 시스템 설계/구현 → 계정당 최대 3개 프로필 관리, 개인별 학습 진도 추적",
          "B2C 쿠폰 시스템 개발 → 대량 쿠폰 발급으로 고객 유치",
          "소셜 로그인 통합 (카카오, 네이버, 애플) → 회원가입 절차 간소화",
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
        title: "BFF(Backend for Frontend) 구축",
        with: {
          fe: 1,
        },
        description: "BE 개발 100% · API Gateway 설계 · 캐싱 전략 수립",
        from: "2020.03",
        to: "2021.05",
        achievements: [
          "여러 서비스 간 데이터 통신 일원화로 안정성 개선",
          "API Gateway 도입으로 클라이언트 개발 복잡도 감소",
        ],
        contributions: [
          "API Gateway 구축 → MSA 환경에서 클라이언트 복잡도 감소",
          "캐싱 레이어 구현 → 반복 요청 최소화로 서버 부하 감소",
          "소셜 로그인 OAuth 2.0 서버 구축 → 토큰 관리 중앙화, 보안성 강화",
          "Rate Limiting 및 보안 헤더 설정 → API 남용 방지 및 XSS, CSRF 공격 차단",
          "PM2 클러스터 모드 활용 → CPU 코어별 프로세스 분산으로 처리량 증대",
        ],
        spec: ["Node.js", "Express.js", "Redis", "PM2"],
      },
    ],
  },
  {
    corp: "날리지포인트",
    about: ["B2B 솔루션 기업", "WebRTC 기반 화상 솔루션 개발"],
    position: "솔루션 본부 / 기술 개발팀",
    from: "2016.08",
    to: "2019.10",
    features: [
      {
        title: "KT GiGA Genie 화상회의 서비스",
        description: "FE 개발 50% · WebRTC 통신 구현 · 시그널링 서버 개발",
        with: {
          fe: 2,
          be: 2,
        },
        from: "2017.09",
        to: "2018.10",
        achievements: [
          "KT 기업 고객 대상 화상회의 서비스 출시",
          "소프트웨어 기반 솔루션으로 하드웨어 대비 비용 효율성 확보",
        ],
        contributions: [
          "P2P/SFU 화상통화 구현 → 실시간 통신 환경 구축",
          "시그널링 서버 구축 → 안정적인 피어 연결 관리",
          "실시간 화이트보드 개발 → 다중 사용자 동시 편집 지원",
          "데스크톱 앱 개발 → 웹 서비스를 PC 앱으로 확장",
        ],
        spec: [
          "WebRTC",
          "HTML/CSS",
          "JavaScript",
          "React.js",
          "Node.js",
          "Socket.io",
        ],
      },
      {
        title: "LG Smart TV 협업 프로젝트",
        description: "FE 개발 40% · webOS 앱 개발 · 다국어 자동화",
        with: {
          fe: 3,
        },
        from: "2017.09",
        to: "2019.11",
        achievements: [
          "글로벌 20개국+ 출시 지원",
          "다국어 콘텐츠 생성 자동화로 운영 효율성 개선",
        ],
        contributions: [
          "스마트TV 앱 개발 → TV 리모컨 최적화 UX",
          "다국어 콘텐츠 자동 생성 시스템 구축 → 20개국 언어 일괄 처리",
          "데모 앱 개발 → CES 2019 전시, 글로벌 마케팅 활용",
        ],
        spec: ["WebOS", "HTML/CSS", "JavaScript", "Enact.js"],
      },
    ],
  },
];

type PersonalProject = {
  title: string;
  from: string;
  to: string;
  links?: {
    title: string;
    url: string;
  }[];
  feature: {
    title: string;
    descriptions: string[];
  };
};

export const PERSONAL_PROJECT: PersonalProject[] = [
  {
    title: "숏글리시 (앱인토스)",
    from: "2025.10",
    to: "",
    links: [
      {
        title: "Live Demo (토스 앱 필요)",
        url: "intoss://shortglish",
      },
    ],

    feature: {
      title: "YouTube 쇼츠 영상으로 영어 쉐도잉을 학습하는 모바일 앱 서비스",
      descriptions: [
        "YouTube 영상 자막 동기화 및 실시간 추적 시스템 구현",
        "단어 조합, 빈칸 채우기, 쉐도잉 등 다양한 학습 모드 제공",
        "푸시 알림 서버 구축 및 앱인토스 로그인 연동",
        "사용자 데이터 및 학습 진도 관리",
        "콘텐츠 제작/관리를 위한 어드민 패널 개발",
      ],
    },
  },
  {
    title: "모바일 청첩장",
    from: "2022.03",
    to: "2022.04",
    links: [
      {
        title: "GitHub",
        url: "https://github.com/parkoon/june-bride",
      },
      {
        title: "Live Demo",
        url: "https://junebride.vercel.app",
      },
    ],
    feature: {
      title: "애플 지갑 앱 UI/UX를 벤치마킹한 모바일 최적화 청첩장",
      descriptions: ["인터랙티브 애니메이션 구현"],
    },
  },
  {
    title: "Resume Builder",
    from: "2020.03",
    to: "2020.08",
    links: [
      {
        title: "GitHub",
        url: "https://github.com/parkoon/resume-kit",
      },
    ],
    feature: {
      title: "비개발 직군도 쉽게 이력서를 웹에 배포할 수 있는 플랫폼",
      descriptions: [
        "프로필부터 포스팅까지 이력서 전체 구성 및 실시간 미리보기",
        "SEO 메타데이터 및 오픈그래프 이미지 자동 생성",
        "원클릭 자동 배포 시스템",
      ],
    },
  },
];

type OpenSourceProject = {
  title: string;
  name: string;
  links?: {
    title: string;
    url: string;
  }[];
  feature: {
    title: string;
    descriptions: string[];
  };
};
export const OPEN_SOURCE_PROJECT: OpenSourceProject[] = [
  {
    title: "오픈소스 제작 | 2024.07 배포",
    name: "Headless UI Mobile Components",
    links: [
      {
        title: "GitHub",
        url: "https://github.com/parkoon/koond",
      },
      {
        title: "Storybook",
        url: "https://parkoon.github.io/koond/",
      },
    ],

    feature: {
      title:
        "웹뷰 환경에서 네이티브 앱과 같은 UX를 제공하기 위한 컴포넌트 라이브러리",
      descriptions: [
        "20+ 재사용 가능한 Headless 컴포넌트 제공",
        "터치 제스처 최적화",
      ],
    },
  },
  {
    title: "오픈소스 제작 | 2019.02 배포",
    name: "passport-naver-v2",
    links: [
      {
        title: "GitHub",
        url: "https://github.com/parkoon/passport-naver-v2",
      },
      {
        title: "npm",
        url: "https://www.npmjs.com/package/passport-naver-v2",
      },
    ],
    feature: {
      title:
        "기존 passport-naver의 5년간 업데이트 중단 및 프로필 데이터 누락 문제 해결",
      descriptions: [
        "네이버 OAuth 2.0 최신 스펙 반영",
        "누락된 프로필 필드 추가 (생일, 연령대, 프로필 이미지 등)",
        "TypeScript 지원 추가",
        "주간 다운로드 2,000+ 달성",
      ],
    },
  },
];
