import styled from "@emotion/styled";
import { mq } from "../styles/media-query";

const Wrapper = styled.div`
  display: flex;

  ${mq("small")} {
    flex-direction: column;
  }
`;
const Item = styled.div`
  position: relative;
  &:not(:last-child) {
    margin-right: 24px;

    ${mq("small")} {
      margin-right: 0;
      margin-bottom: 7px;
    }
  }

  &:not(:last-child)::after {
    position: absolute;
    bottom: 0;
    right: -12px;
    content: "";
    height: 100%;
    width: 1px;
    background-color: rgba(0, 0, 0, 0.7);

    ${mq("small")} {
      display: none;
    }
  }
`;
const Label = styled.span`
  font-weight: 500;
  margin-right: 7px;
`;
const Link = styled.a`
  color: ${(props) => props.theme.colors.link};
`;

type Props = {
  items: {
    label: string;
    link: string;
  }[];
};
function Contact({ items = [] }: Props) {
  return (
    <Wrapper>
      {items.map(({ label, link }, index) => {
        const href = link.includes("@") ? `mailto:${link}` : link;
        return (
          <Item key={index}>
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
