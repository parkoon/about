import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.main`
  max-width: 768px;
  width: 100%;
  margin: 0px auto;
  padding: 62px 20px 32px;
`;

type Props = {
  children: React.ReactNode;
};
function Layout({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}

export default Layout;
