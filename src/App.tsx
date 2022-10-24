import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import LastUpdatedAt from "./components/LastUpdatedAt";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import SideProject from "./components/SideProject";
import { ABOUT_ME, EXPERIENCE, LAST_UPDATED_AT, PROFILE } from "./resume";

function App() {
  return (
    <Layout>
      <Profile {...PROFILE} />
      {ABOUT_ME.map((item, index) => (
        <AboutMe key={index} {...item} />
      ))}
      <Experience items={EXPERIENCE} />
      <SideProject />
      <LastUpdatedAt at={LAST_UPDATED_AT} />
    </Layout>
  );
}

export default App;
