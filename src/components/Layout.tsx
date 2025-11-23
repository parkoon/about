import React from "react";
import ScrollIndicator from "./ScrollIndicator";

type Props = {
  children: React.ReactNode;
};
function Layout({ children }: Props) {
  return (
    <main className="max-w-[1024px] w-full mx-auto pt-[62px] px-5 pb-8">
      <ScrollIndicator />
      {children}
    </main>
  );
}

export default Layout;
