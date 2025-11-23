type Props = {
  items: {
    label: string;
    link: string;
  }[];
};
function Contact({ items = [] }: Props) {
  return (
    <div className="flex max-sm:flex-col">
      {items.map(({ label, link }, index) => {
        const href = link.includes("@") ? `mailto:${link}` : link;
        const isLast = index === items.length - 1;
        return (
          <div
            key={index}
            className={`relative ${!isLast ? "mr-6 max-sm:mr-0 max-sm:mb-[7px]" : ""} ${!isLast ? "after:content-[''] after:absolute after:bottom-0 after:-right-3 after:h-full after:w-px after:bg-black/70 max-sm:after:hidden" : ""}`}
          >
            <span className="font-medium mr-[7px]">{label}</span>
            <a
              target="_blank"
              href={href}
              className="text-[var(--color-link)]"
            >
              {link}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Contact;
