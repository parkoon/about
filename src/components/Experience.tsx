import { mq } from "@/styles/media-query";
import styled from "@emotion/styled";
import SpecTag from "./SpecTag";
import List from "./List";
import { EXPERIENCE } from "@/resume";
import Section from "./Section";
import Description from "./Description";
import SpecSheet from "./SpecSheet";
import React from "react";

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
  font-size: 32px;
  font-weight: 400;

  margin-bottom: 12px;
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
    margin-bottom: 12px;
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
  items: typeof EXPERIENCE[number][];
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
                  <Description title={`What id ${feature.to ? "did" : "do"}`}>
                    <List items={feature.tasks} />
                  </Description>
                  <Description title="Spec Sheet">
                    <SpecSheet items={feature.spec} />
                    {/* {feature.spec.map((label, index) => (
                      <SpecTag key={index}>{label}</SpecTag>
                    ))} */}
                  </Description>
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
