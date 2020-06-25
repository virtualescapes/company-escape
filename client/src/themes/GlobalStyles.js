import React from 'react';
import { Global, css } from '@emotion/core';

function GlobalStyles() {
  return (
    <Global
      styles={(theme) => css`
        @import url('https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Mono:wght@100&display=swap"');
        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }
        body {
          font-family: 'Roboto', sans-serif;
          font-size: 16px;
          margin: 0px;
          background: ${theme.background};
          height: 100%;
          width: 100vw;
        }
      `}
    />
  );
}
export default GlobalStyles;
