import { css, Global } from "@emotion/react";
import emotionReset from "emotion-reset";

const defaultStyle = css`
  ${emotionReset}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: Pretendard, Arial, Helvetica, sans-serif;
    font-size: 16px;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    outline: none;
    padding: 0;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }

  /* 모바일 환경에서 생기는 하이라이트 제거 (https://stackoverflow.com/questions/45049873/how-to-remove-the-blue-highlight-of-button-on-mobile) */
  input,
  textarea,
  button,
  select,
  div,
  a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;

function GlobalStyle() {
  return <Global styles={defaultStyle} />;
}

export default GlobalStyle;
