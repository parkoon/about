import styled from "@emotion/styled";
import React from "react";
import ScrollIndicator from "./ScrollIndicator";

const Wrapper = styled.main`
  max-width: 1024px;
  width: 100%;
  margin: 0px auto;
  padding: 62px 20px 32px;
`;

type Props = {
  children: React.ReactNode;
};
function Layout({ children }: Props) {
  return (
    <Wrapper>
      <ScrollIndicator />
      {children}
    </Wrapper>
  );
}

export default Layout;
