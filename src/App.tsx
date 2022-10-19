import { useState } from "react";
import Layout from "@/components/Layout";
import styled from "@emotion/styled";
import Section from "@/components/Section";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import LastUpdatedAt from "./components/LastUpdatedAt";
import DashedDivider from "./components/DashedDivider";
import AboutMe from "./components/AboutMe";

import { PROFILE, ABOUT_ME, EXPERIENCE, SIDE_PROJECT } from "@/resume";
import Profile from "./components/Profile";
import SideProject from "./components/SideProject";

const Box = styled.div`
  height: 200px;
`;

function App() {
  return (
    <Layout>
      <Profile name={PROFILE.name} link={PROFILE.link} />
      {ABOUT_ME.map(({ title, items }, index) => (
        <AboutMe key={index} title={title} items={items} />
      ))}
      <Experience items={EXPERIENCE} />

      <SideProject items={SIDE_PROJECT} />
    </Layout>
  );
}

export default App;
