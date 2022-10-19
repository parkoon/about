const breakpoint = {
  small: 768,
};

type Key = keyof typeof breakpoint;

export const mq = (n: Key) => {
  const bpArray = Object.keys(breakpoint).map((key) => [
    key,
    breakpoint[key as Key],
  ]);

  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (max-width: ${size}px)`];
    return acc;
  }, []);

  return result;
};
