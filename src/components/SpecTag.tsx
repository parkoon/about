import React from "react";

type Props = {
  children: React.ReactNode;
};
function SpecTag({ children }: Props) {
  return (
    <div className="inline-block border border-black/60 py-1.5 px-2 mr-1 mb-1">
      {children}
    </div>
  );
}

export default SpecTag;
