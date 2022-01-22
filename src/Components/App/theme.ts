import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    brand: {
      blue:"#0042FF",
      green:"#7CFCBA",
      purple:"#7365FF",
      orange:"#FE6C59",
      grey:"#F6F6F6"
    },
    primary:"#0042FF",
    secondary: "#7CFCBA"
  },
})


export default theme;