import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
`;
const Item = styled.div`
  position: relative;
  &:not(:last-child) {
    margin-right: 24px;
  }

  &:not(:last-child)::after {
    position: absolute;
    bottom: 0;
    right: -12px;
    content: "";
    height: 100%;
    width: 1px;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;
const Label = styled.span`
  font-weight: 500;
  margin-right: 7px;
`;
const Link = styled.a`
  color: ${(props) => props.theme.colors.link};
`;

type Item = {
  label: string;
  link: string;
};
type Props = {
  items: Item[];
};
function Contact({ items = [] }: Props) {
  return (
    <Wrapper>
      {items.map(({ label, link }) => {
        const href = link.includes("@") ? `mailto:${link}` : link;
        return (
          <Item>
            <Label>{label}</Label>
            <Link target="_blank" href={href}>
              {link}
            </Link>
          </Item>
        );
      })}
    </Wrapper>
  );
}

export default Contact;
