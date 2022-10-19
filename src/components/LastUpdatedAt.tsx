import styled from "@emotion/styled";

const Wrapper = styled.div`
  font-style: italic;
  font-size: 14px;

  text-align: center;
  margin-top: 120px;
`;

type Props = {
  at: string;
};
function LastUpdatedAt({ at }: Props) {
  return <Wrapper>Last updated: {at}</Wrapper>;
}

export default LastUpdatedAt;
