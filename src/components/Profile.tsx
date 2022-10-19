import styled from "@emotion/styled";
import React from "react";
import Contact from "./Contact";
import Section from "./Section";

type Props = {
  name: string;
  link: {
    github: string;
    linkedIn: string;
    email: string;
  };
};
function Profile({ name, link }: Props) {
  return (
    <Section title={name} style={{ marginBottom: 32 }}>
      <Contact
        items={[
          { label: "GitHub", link: link.github },
          { label: "LinkedIn", link: link.linkedIn },
          { label: "Email", link: link.email },
        ]}
      />
    </Section>
  );
}

export default Profile;
