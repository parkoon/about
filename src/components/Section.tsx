import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.section``;
const Title = styled.h3`
  display: inline-block;
  position: relative;
  font-size: 38px;
  font-weight: 600;

  margin-bottom: 24px;

  &::after {
    content: "";
    position: absolute;
    right: -17px;
    bottom: 0;

    width: 12px;
    height: 12px;
    border-radius: 100%;
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const Content = styled.article``;

type Props = {
  title?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  mb?: number;
  mt?: number;
};
function Section({ title, children, mt, mb, style }: Props) {
  return (
    <Wrapper style={{ marginTop: mt, marginBottom: mb, ...style }}>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Wrapper>
  );
}

export default Section;
