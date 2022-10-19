import { mq } from "@/styles/media-query";
import styled from "@emotion/styled";
import SpecTag from "./SpecTag";
import List from "./List";
import { EXPERIENCE } from "@/resume";
import Section from "./Section";
import Description from "./Description";

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
`;

const Row = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 18px;
  }
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
    <Section title="Experience" style={{ marginTop: 87 }}>
      {items.map(({ corp, from, to, features, position }, index) => (
        <Wrapper key={index}>
          <Left>
            <Title>{corp}</Title>
            <span>{position}</span>
            <div>
              {from} - {to || "현재"}
            </div>
          </Left>
          <Right>
            {features.map((feature, index) => (
              <>
                <div key={index}>
                  <Title>{feature.title}</Title>
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
                    {feature.spec.map((label, index) => (
                      <SpecTag key={index}>{label}</SpecTag>
                    ))}
                  </Description>
                </div>
                {index < features.length - 1 && <Divider />}
              </>
            ))}
          </Right>
        </Wrapper>
      ))}
    </Section>
  );
}

export default Experience;
