import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

// Use Chakra-UI theme config for setting up layout and UI/UX
export const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
})

export const BlogTheme = extendTheme({
  breakpoints,
  colors: {
    card: "#F9FAF3",
    cardBorder: "#b2b5a3",
    cardLightText: "#E0E0DF",
    sectionBackground: "rgba(249,250,243, 0.3)",
    spotlightDescription: "rgba(78, 78, 78, 0.7)",
    cardBackground: "rgba(203, 187, 159, 0.6)",
    tabBackground: "rgba(203, 187, 159, 0.6)",
    footerText: "rgba(104,101,96, 0.4)",
    footerBackground: "#D1CAC1",
    bodyBackground: "rgba(48, 61, 70, 0.9)",
  },
})
