import { extendTheme } from "@chakra-ui/react"
import "@fontsource/comfortaa/700.css"
import "@fontsource/comfortaa/400.css"
const theme = extendTheme({
  colors:{
    primaryBlue:"#6A8BF5",
    primaryRed:"#ffd6eb",
    primaryGreen:"#CCE8E6",
    backgroundBlue:"#F2F2FD",
    backgroundRed:"#fff5fa",
    backgroundGreen:"#F5FDFF",
    highlightPurple:"#EBD6F2",
    highlightPink:"#FEFAFA",
    primaryBlack:"#2E2E36"
  },
  fonts:{
    heading: 'Comfortaa',
    body: 'Comfortaa'
  },
})

export default theme