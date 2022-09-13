import { css } from "styled-components";

const fontCss = css`
  @font-face {
    font-family: 'Flexa';
    src: url('../fonts/GTFlexaTrial-Th.woff2') format('woff2'),
      url('../fonts/GTFlexaTrial-Th.woff') format('woff')
    ;
    font-style: normal;
    font-display: fallback;
    font-weight: 200;
  }

  @font-face {
    font-family: 'Flexa';
    src: url('../fonts/GTFlexaTrial-Rg.woff2') format('woff2'),
      url('../fonts/GTFlexaTrial-Rg.woff') format('woff')
    ;
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Flexa';
    src: url('../fonts/GTFlexaTrial-RgIt.woff2') format('woff2'),
      url('../fonts/GTFlexaTrial-RgIt.woff') format('woff')
    ;
    font-weight: 400;
    font-style: italic;
    font-display: swap;
  }


  @font-face {
    font-family: 'Flexa';
    src: url('../fonts/GTFlexaTrial-ExpBd.woff2') format('woff2'),
      url('../fonts/GTFlexaTrial-ExpBd.woff') format('woff')
    ;
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  body {
    font-family: 'Flexa', Helvetica, arial, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
  }


  h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6,.h0 {
    b,strong {
      font-weight: 700;
      font-family: 'Flexa';
    }
  }

  h2, .h2 {
    font-size: 2rem ;
  }

`;

export default fontCss;