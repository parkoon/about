import styled from "@emotion/styled";

const Wrapper = styled.div``;

const Item = styled.span`
  &:not(:last-of-type)::after {
    content: "|";
    padding: 0 7px;
    font-size: 0.9em;
    color: rgba(0, 0, 0, 0.7);
  }
`;

type Props = {
  items: string[];
};
function SpecSheet({ items }: Props) {
  return (
    <Wrapper>
      {items.map((item) => (
        <Item key={item}>{item}</Item>
      ))}
    </Wrapper>
  );
}

export default SpecSheet;
