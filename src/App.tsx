import Experience from "@/components/Experience";
import Layout from "@/components/Layout";
import AboutMe from "./components/AboutMe";
import LastUpdatedAt from "./components/LastUpdatedAt";

import {
  ABOUT_ME,
  EXPERIENCE,
  LAST_UPDATED_AT,
  PROFILE,
  SIDE_PROJECT,
} from "@/resume";
import Profile from "./components/Profile";
import SideProject from "./components/SideProject";

function App() {
  return (
    <Layout>
      <Profile name={PROFILE.name} link={PROFILE.link} />
      {ABOUT_ME.map(({ title, items }, index) => (
        <AboutMe key={index} title={title} items={items} />
      ))}
      <Experience items={EXPERIENCE} />
      <SideProject items={SIDE_PROJECT} />
      <LastUpdatedAt at={LAST_UPDATED_AT} />
    </Layout>
  );
}

export default App;
