import { PERSONAL_PROJECT } from "../data";
import { LinkList } from "./link-list";
import { List } from "./list";
import { Section } from "./section";
import { TwoColumnWrapper } from "./two-column-wrapper";

export const PersonalProject = () => {
  return (
    <Section title="Personal Project" mt={87}>
      <div className="flex flex-col gap-[62px]">
        {PERSONAL_PROJECT.map((project) => (
          <TwoColumnWrapper
            key={project.title}
            left={
              <>
                <h3 className="relative text-xl font-semibold mb-1 whitespace-pre-line leading-[110%]">
                  {project.title}
                </h3>

                <div className="mb-3">
                  {project.from} - {project.to || "현재"}
                </div>
                <LinkList links={project.links || []} />
              </>
            }
            right={
              <>
                <h2 className="text-lg font-semibold mb-1">
                  {project.feature.title}
                </h2>
                <List
                  items={project.feature.descriptions.map(
                    (description, index) => (
                      <p key={index}>{description}</p>
                    )
                  )}
                />
              </>
            }
          />
        ))}
      </div>
    </Section>
  );
};
