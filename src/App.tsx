import { AboutMe } from "./components/about-me";
import { LastUpdatedAt } from "./components/last-updated-at";
import { Layout } from "./components/layout";
import { OpenSourceProject } from "./components/open-source-project";
import { PersonalProject } from "./components/personal-project";
import { Profile } from "./components/profile";
import { WorkExperience } from "./components/work-experience";

function App() {
  return (
    <Layout>
      <Profile />
      <AboutMe />
      <WorkExperience />
      <OpenSourceProject />
      <PersonalProject />
      <LastUpdatedAt />
    </Layout>
  );
}

export default App;
