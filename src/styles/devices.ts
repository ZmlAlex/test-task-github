const BREAKPOINTS = {
  tablet: 550,
  tabletM: 768,
  laptop: 1100,
  desktop: 1500,
};

const devices = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tablet / 16}rem)`,
  tabletMAndUp: `(min-width: ${BREAKPOINTS.tabletM / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptop / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktop / 16}rem)`,
};

export default devices;
