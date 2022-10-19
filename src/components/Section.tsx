import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.section``;
const Title = styled.h3`
  position: relative;
  font-size: 38px;
  font-weight: 600;

  margin-bottom: 34px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -17px;
    width: 52px;
    height: 5px;
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const Content = styled.article``;

type Props = {
  title?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
};
function Section({ title, children, style }: Props) {
  return (
    <Wrapper style={style}>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Wrapper>
  );
}

export default Section;
