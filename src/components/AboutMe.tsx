import styled from "@emotion/styled";
import { AboutMeModel } from "../resume";
import List from "./List";

const Wrapper = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 18px;
  }
`;
const Header = styled.div`
  display: flex;
  align-items: center;

  font-weight: 500;
  font-size: 17px;

  margin-bottom: 13px;
`;

const Body = styled.div``;
const Box = styled.code`
  width: 15px;
  height: 15px;
  border: 1px solid rgba(0, 0, 0, 0.8);

  &:not(:last-of-type) {
    margin-right: 2px;
  }
`;

const BoxWrapper = styled.div`
  display: flex;
  margin: 0 4px;
`;

type Props = AboutMeModel;
function AboutMe({ prefix, suffix, items }: Props) {
  return (
    <Wrapper>
      <Header>
        저는 {prefix}
        <BoxWrapper>
          <Box />
          <Box />
          <Box />
          <Box />
        </BoxWrapper>
        {suffix}
      </Header>

      <Body>
        <List type="decimal" items={items} />
      </Body>
    </Wrapper>
  );
}

export default AboutMe;
