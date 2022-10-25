import { ProfileModel } from "../resume";
import Contact from "./Contact";
import Section from "./Section";

type Props = ProfileModel;
function Profile({ name, link }: Props) {
  return (
    <Section title={name} mb={32}>
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
