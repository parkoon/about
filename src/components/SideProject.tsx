import styled from "@emotion/styled";
import List from "./List";
import Section from "./Section";

export const Link = styled.a`
  color: ${(props) => props.theme.colors.link};
  text-decoration: underline;
`;

function SideProject() {
  return (
    <Section title="Side Project" mt={87}>
      <List
        items={[
          <>
            <Link target="_blank" href="https://parkoon.github.io/koond/">
              Headless UI를 활용해 모바일 웹 환경에 최적화, 재활용 가능한
              컴포넌트 제작
            </Link>
          </>,
          <>
            아이폰 지갑앱을 밴치마킹 하여 제작한{" "}
            <Link target="_blank" href="https://junebride.vercel.app/">
              모바일 청첩장
            </Link>
          </>,
          <>
            이력서를 쉽게 만들고 github pages에 배포할 수 있게 도와주는{" "}
            <Link target="_blank" href="https://github.com/parkoon/resume-kit">
              플랫폼
            </Link>
          </>,
          <>
            네이버에서 구현한{" "}
            <Link
              target="_blank"
              href="https://github.com/naver/passport-naver"
            >
              passport-naver
            </Link>{" "}
            의 문제점(e.g., 프로필 데이터 누락)을 해결하기 위해 제작한{" "}
            <Link
              target="_blank"
              href="https://www.npmjs.com/package/passport-naver-v2"
            >
              모듈
            </Link>
          </>,
        ]}
      />
    </Section>
  );
}

export default SideProject;
