import React, { useEffect, useState } from "react";

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
  return (
    <div
      className="fixed top-0 left-0 h-[5px] z-10 bg-[var(--color-primary)]"
      style={{ width: `${scrolled}%` }}
    />
  );
}

export default ScrollIndicator;
