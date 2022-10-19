import { SideProjectModel } from "@/resume";
import React from "react";
import Description from "./Description";
import List from "./List";
import Section from "./Section";

type Props = {
  items: SideProjectModel[];
};
function SideProject({ items }: Props) {
  return (
    <Section title="Side Project" style={{ marginTop: 87 }}>
      {items.map(({ title, descriptions }, index) => (
        <Description key={index} title={title}>
          <List items={descriptions} />
        </Description>
      ))}
    </Section>
  );
}

export default SideProject;
