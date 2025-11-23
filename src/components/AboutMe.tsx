import { AboutMeModel } from "../resume";
import List from "./List";

type Props = AboutMeModel;
function AboutMe({ suffix, items }: Props) {
  return (
    <div className="mb-[18px] last:mb-0">
      <div className="flex flex-wrap items-center font-medium text-[17px] mb-[13px] leading-[1.4]">
        저는
        <div className="flex mx-1">
          <code className="w-[15px] h-[15px] border border-black/80 mr-[2px]" />
          <code className="w-[15px] h-[15px] border border-black/80 mr-[2px]" />
          <code className="w-[15px] h-[15px] border border-black/80" />
        </div>
        {suffix}
      </div>

      <div>
        <List type="decimal" items={items} />
      </div>
    </div>
  );
}

export default AboutMe;
