import List from "./List";
import Section from "./Section";
import Description from "./Description";
import SpecSheet from "./SpecSheet";
import React from "react";

import { EXPERIENCE } from "../resume";
import LookBack from "./LookBack";
import { Link } from "./SideProject";

type Props = {
  items: (typeof EXPERIENCE)[number][];
};
function Experience({ items }: Props) {
  return (
    <Section title="Experience" mt={87}>
      {items.map(({ corp, from, to, features, position }, index) => (
        <div
          key={index}
          className={`flex max-sm:flex-col ${index < items.length - 1 ? "mb-[62px]" : ""}`}
        >
          <div className="mr-3 max-sm:mr-0 max-sm:mb-8 min-w-[240px]">
            <h3 className="relative text-[32px] font-normal mb-3 whitespace-pre-line leading-[110%]">
              {corp}
            </h3>
            <div className="mb-1">{position}</div>
            <div>
              {from} - {to || "현재"}
            </div>
          </div>
          <div className="w-full">
            {features.map((feature, featureIndex) => (
              <React.Fragment key={featureIndex}>
                <div>
                  {feature.link ? (
                    <a
                      target="_blank"
                      href={feature.link}
                      className="inline-block text-[28px] font-normal mb-3 text-[var(--color-link)] underline"
                    >
                      {feature.title}
                    </a>
                  ) : (
                    <h4 className="text-[28px] font-normal mb-3">
                      {feature.title}
                    </h4>
                  )}
                  <div className="italic mb-[27px] text-black/60">
                    {feature.from} - {feature.to || "현재"}
                  </div>
                  <Description title="Description">
                    {feature.description}
                  </Description>
                  <Description title={`What i ${feature.to ? "did" : "do"}`}>
                    <List
                      items={feature.tasks.map((task) => {
                        if (typeof task === "string") {
                          return <>{task}</>;
                        }

                        return (
                          <Link target="_blank" href={task.link}>
                            {task.title}
                          </Link>
                        );
                      })}
                    />
                  </Description>
                  <Description title="Spec Sheet">
                    <SpecSheet items={feature.spec} />
                  </Description>

                  {feature.lookBack.length > 0 && (
                    <LookBack item={feature.lookBack} />
                  )}
                </div>
                {featureIndex < features.length - 1 && (
                  <div className="w-full h-px border-b border-dashed border-black/80 my-8" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}
    </Section>
  );
}

export default Experience;
