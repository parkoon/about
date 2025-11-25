import { PROFILE } from "../data";
import { Link } from "./link";
import { Section } from "./section";

const ITEMS = [
  { label: "GitHub", link: PROFILE.link.github },
  { label: "LinkedIn", link: PROFILE.link.linkedIn },
  { label: "Email", link: PROFILE.link.email },
];
export const Profile = () => {
  return (
    <Section title={PROFILE.name} mb={52}>
      <div className="flex max-sm:flex-col">
        {ITEMS.map(({ label, link }, index) => {
          const href = link.includes("@") ? `mailto:${link}` : link;
          const isLast = index === ITEMS.length - 1;
          return (
            <div
              key={index}
              className={`relative ${
                !isLast ? "mr-6 max-sm:mr-0 max-sm:mb-[7px]" : ""
              } ${
                !isLast
                  ? "after:content-[''] after:absolute after:bottom-0 after:-right-3 after:h-full after:w-px after:bg-black/70 max-sm:after:hidden"
                  : ""
              }`}
            >
              <span className="font-medium mr-[7px]">{label}</span>
              <Link href={href}>{link}</Link>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
