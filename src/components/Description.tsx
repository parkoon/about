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
const LinkTitle = styled.a`
  display: block;
  font-weight: 400;
  font-size: 20px;

  margin-bottom: 10px;

  color: ${(props) => props.theme.colors.link};
`;

const Content = styled.div``;

type Props = {
  title: string;
  link?: string;
  children: React.ReactNode;
};
function Description({ title, link, children }: Props) {
  return (
    <Wrapper>
      {link ? (
        <LinkTitle target="_blank" href={link}>
          {title}
        </LinkTitle>
      ) : (
        <Title>{title}</Title>
      )}

      <Content>{children}</Content>
    </Wrapper>
  );
}

export default Description;
