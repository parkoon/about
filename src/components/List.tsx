import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.ul`
  margin-left: 32px;
`;

const Item = styled.li`
  position: relative;
  line-height: 1.4;
  word-break: keep-all;
  &:not(:last-of-type) {
    margin-bottom: 7px;
  }
`;

type Props = {
  items: string[] | React.ReactNode[];
  type?: "disc" | "decimal";
};
function List({ items, type = "disc" }: Props) {
  return (
    <Wrapper>
      {items.map((item, index) => (
        <Item style={{ listStyleType: type }} key={index}>
          {item}
        </Item>
      ))}
    </Wrapper>
  );
}

export default List;
