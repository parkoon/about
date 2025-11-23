import React from "react";

type Props = {
  title?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  mb?: number;
  mt?: number;
};
function Section({ title, children, mt, mb, style }: Props) {
  return (
    <section style={{ marginTop: mt, marginBottom: mb, ...style }}>
      {title && (
        <h3 className="inline-block relative text-[38px] font-semibold mb-6 after:content-[''] after:absolute after:-right-[17px] after:bottom-0 after:w-3 after:h-3 after:rounded-full after:bg-[var(--color-primary)]">
          {title}
        </h3>
      )}
      <article>{children}</article>
    </section>
  );
}

export default Section;
