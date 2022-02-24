import { createGlobalStyle } from 'styled-components/macro';
import { COLORS } from 'styles/constants';

const GlobalStyles = createGlobalStyle`

/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html, body, #__next {
  height: 100%;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; */
    font-family: Helvetica, sans-serif;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  width:100%;
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#__next {
  isolation: isolate;
}




html {
  --color-white: hsl(${COLORS.white});
  --color-red: hsl(${COLORS.red});
  --color-green: hsl(${COLORS.green});
  --color-primary: hsl(${COLORS.primary});
  --color-secondary: hsl(${COLORS.secondary});
  --color-gray-100: hsl(${COLORS.gray[100]});
  --color-gray-300: hsl(${COLORS.gray[300]});
  --color-gray-500: hsl(${COLORS.gray[500]});
  --color-gray-700: hsl(${COLORS.gray[700]});
  --color-gray-900: hsl(${COLORS.gray[900]});
  --color-blue-100: hsl(${COLORS.blue[100]});
  --color-backdrop: hsl(${COLORS.gray[700]} / 0.8);
}
`;

export default GlobalStyles;
