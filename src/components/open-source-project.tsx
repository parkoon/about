import React from "react";
import { OPEN_SOURCE_PROJECT } from "../data";
import { Link } from "./link";
import { List } from "./list";
import { Section } from "./section";
import { TwoColumnWrapper } from "./two-column-wrapper";

export const OpenSourceProject = () => {
  return (
    <Section title="Open Source Project" mt={87}>
      <div className="flex flex-col gap-[62px]">
        {OPEN_SOURCE_PROJECT.map((project) => (
          <TwoColumnWrapper
            key={project.title}
            left={
              <>
                <h3 className="relative text-xl font-semibold mb-1 whitespace-pre-line leading-[110%]">
                  {project.title}
                </h3>
                {project.links && project.links.length > 0 && (
                  <div className="flex items-center gap-2 flex-wrap">
                    {project.links.map((link, index) => (
                      <React.Fragment key={index}>
                        <Link target="_blank" href={link.url}>
                          {link.title}
                        </Link>
                        {index < project.links!.length - 1 && (
                          <span className="text-black/40">|</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </>
            }
            right={
              <>
                <h2 className="text-lg font-semibold mb-1">
                  숏폼으로 배우는 영어
                </h2>
                <List
                  items={project.feature.descriptions.map(
                    (description, index) => (
                      <p key={index}>{description}</p>
                    )
                  )}
                />
              </>
            }
          />
        ))}
        {/* <List
        items={[
          <>
            <Link target="_blank" href="https://parkoon.github.io/koond/">
              Headless UI를 활용해 모바일 웹 환경에 최적화, 재활용 가능한
              컴포넌트 제작
            </Link>
            (2024.07 ~)
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
      /> */}
      </div>
    </Section>
  );
};
