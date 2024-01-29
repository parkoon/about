import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { EXPERIENCE } from "../resume";
import List from "./List";

const Header = styled.div`
  display: flex;
`;
const Title = styled.h4`
  font-weight: 400;
  font-size: 20px;

  margin-bottom: 10px;
  margin-right: 7px;
`;

const Button = styled.button`
  text-decoration: underline;
  color: ${(props) => props.theme.colors.primary};
`;

const BodyTitle = styled.div`
  font-weight: 400;
  margin-bottom: 4px;
`;

const Body = styled.div<{ more: boolean }>`
  display: ${(props) => (props.more ? "block" : "none")};

  &:not(:last-of-type) {
    margin-bottom: 12px;
  }
`;

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
      <Header>
        <Title>Look Back</Title>
        <Button onClick={() => setMore((prev) => !prev)}>
          {more ? "닫기" : "자세히 보기"}
        </Button>
      </Header>
      {item.map(({ title, descriptions }) => {
        return (
          <Body more={more}>
            <BodyTitle>{title}</BodyTitle>
            <List items={descriptions} />
          </Body>
        );
      })}
    </>
  );
}

export default LookBack;
