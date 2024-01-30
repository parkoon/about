import styled from "@emotion/styled";
import List from "./List";
import Section from "./Section";
import Description from "./Description";
import SpecSheet from "./SpecSheet";
import React from "react";

import { mq } from "../styles/media-query";
import { EXPERIENCE } from "../resume";
import LookBack from "./LookBack";
import { Link } from "./SideProject";

const Wrapper = styled.div`
  display: flex;

  &:not(:last-of-type) {
    margin-bottom: 62px;
  }

  ${mq("small")} {
    flex-direction: column;
  }
`;

const Title = styled.h3`
  position: relative;
  font-size: 32px;
  font-weight: 400;

  margin-bottom: 12px;
  white-space: pre-line;
  line-height: 110%;
`;
const FeatureTitle = styled.h4`
  font-size: 28px;
  font-weight: 400;

  margin-bottom: 12px;
`;

const LinkTitle = styled.a`
  display: inline-block;
  font-size: 28px;
  font-weight: 400;

  margin-bottom: 12px;

  color: ${(props) => props.theme.colors.link};
  text-decoration: underline;
`;

const Left = styled.div`
  margin-right: 12px;

  min-width: 240px;

  ${mq("small")} {
    margin-right: 0;
    margin-bottom: 32px;
  }
`;
const Right = styled.div`
  width: 100%;
`;

const Date = styled.div`
  font-style: italic;
  margin-bottom: 27px;
  color: rgba(0, 0, 0, 0.6);
`;

const Position = styled.div`
  margin-bottom: 4px;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.8);

  margin: 32px 0;
`;

type Props = {
  items: (typeof EXPERIENCE)[number][];
};
function Experience({ items }: Props) {
  return (
    <Section title="Experience" mt={87}>
      {items.map(({ corp, from, to, features, position }, index) => (
        <Wrapper key={index}>
          <Left>
            <Title>{corp}</Title>
            <Position>{position}</Position>
            <div>
              {from} - {to || "현재"}
            </div>
          </Left>
          <Right>
            {features.map((feature, index) => (
              <React.Fragment key={index}>
                <div>
                  {feature.link ? (
                    <LinkTitle target="_blank" href={feature.link}>
                      {feature.title}
                    </LinkTitle>
                  ) : (
                    <FeatureTitle>{feature.title}</FeatureTitle>
                  )}
                  <Date>
                    {feature.from} - {feature.to || "현재"}
                  </Date>
                  <Description title="Description">
                    {feature.description}
                  </Description>
                  <Description title={`What i ${feature.to ? "did" : "do"}`}>
                    <List
                      items={feature.tasks.map((task) => {
                        if (typeof task === "string") {
                          return <>{task}</>;
                        }

                        return (
                          <Link target="_blank" href={task.link}>
                            {task.title}
                          </Link>
                        );
                      })}
                    />
                    {/* <List
                      items={[
                        <>
                          PFP NFT와 음악 디제잉을 결합한 소셜 플랫폼 PFP Play
                        </>,
                        <>
                          아이폰 지갑앱을 밴치마킹 하여 제작한{" "}
                          <Link
                            target="_blank"
                            href="https://junebride.vercel.app/"
                          >
                            모바일 청첩장
                          </Link>
                        </>,
                        <>
                          이력서를 쉽게 만들고 github pages에 배포할 수 있게
                          도와주는{" "}
                          <Link
                            target="_blank"
                            href="https://github.com/parkoon/resume-kit"
                          >
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
                          의 문제점(e.g., 프로필 데이터 누락)을 해결하기 위해
                          제작한{" "}
                          <Link
                            target="_blank"
                            href="https://www.npmjs.com/package/passport-naver-v2"
                          >
                            모듈
                          </Link>
                        </>,
                      ]}
                    /> */}
                  </Description>
                  <Description title="Spec Sheet">
                    <SpecSheet items={feature.spec} />
                  </Description>

                  {feature.lookBack.length > 0 && (
                    <LookBack item={feature.lookBack} />
                  )}
                </div>
                {index < features.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </Right>
        </Wrapper>
      ))}
    </Section>
  );
}

export default Experience;
