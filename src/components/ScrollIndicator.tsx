import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 5px;
  z-index: 10;
  background: ${(props) => props.theme.colors.primary};
`;

function ScrollIndicator() {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setScrolled((winScroll / height) * 100);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <Wrapper style={{ width: `${scrolled}%` }} />;
}

export default ScrollIndicator;
