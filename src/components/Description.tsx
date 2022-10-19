import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 18px;
  }
`;

const Title = styled.h4`
  font-weight: 400;
  font-size: 20px;

  margin-bottom: 10px;
`;

const Content = styled.div``;

type Props = {
  title: string;
  children: React.ReactNode;
};
function Description({ title, children }: Props) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Wrapper>
  );
}

export default Description;
