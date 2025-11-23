import { useEffect, useState } from "react";
import { EXPERIENCE } from "../resume";
import List from "./List";

type Props = {
  item: (typeof EXPERIENCE)[number]["features"][number]["lookBack"];
};
function LookBack({ item }: Props) {
  const [more, setMore] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const openParam = urlParams.get("open");

    if (openParam) {
      setMore(true);
    }
  }, []);
  return (
    <>
      <div className="flex">
        <h4 className="font-normal text-xl mb-2.5 mr-[7px]">Look Back</h4>
        <button
          onClick={() => setMore((prev) => !prev)}
          className="underline text-[var(--color-primary)]"
        >
          {more ? "닫기" : "자세히 보기"}
        </button>
      </div>
      {item.map(({ title, descriptions }, index) => {
        return (
          <div
            key={index}
            className={`${index < item.length - 1 ? "mb-3" : ""} ${more ? "block" : "hidden"}`}
          >
            <div className="font-normal mb-1">{title}</div>
            <List items={descriptions} />
          </div>
        );
      })}
    </>
  );
}

export default LookBack;
