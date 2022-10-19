import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div`
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, 0.7);
  padding: 4px 6px;

  margin-right: 4px;
`;

type Props = {
  children: React.ReactNode;
};
function SpecTag({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}

export default SpecTag;
