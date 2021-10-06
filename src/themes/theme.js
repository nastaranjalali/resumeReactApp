import palette from "./palette";
import {createTheme} from '@material-ui/core/styles'
import {getDirection, getFonts} from "../localization/index"

const theme = createTheme(
    {
        palette: palette,
        direction: getDirection(),
        spacing: 2.5,
        breakpoints: {
            values: {
                xs: 0,
                sm: 700,
                md: 900,
                lg: 1200,
                xl: 1536,
            },
        },
        typography: {
            h1: {
                fontWeight: 700,
                fontFamily: getFonts(),
                fontSize: getDirection()==="rtl"?43:45,
                lineHeight: "4rem"
            },
            h2: {
                fontWeight: 700,
                fontFamily: getFonts(),
                fontSize: getDirection()==="rtl"?39:41,
                lineHeight: "3.2857rem"
            },
            h3: {
                fontWeight: 600,
                fontFamily: getFonts(),
                fontSize: getDirection()==="rtl"?30:32,
                lineHeight: "2.7rem"
            }, h4: {
                fontWeight: 600,
                fontFamily: getFonts(),
                fontSize: getDirection()==="rtl"?25:27,
                lineHeight: "2.43rem"
            }, h5: {
                fontWeight: 600,
                fontFamily: getFonts(),
                fontSize: getDirection()==="rtl"?21:23,
                lineHeight: "2.14rem"
            },
            h6: {
                fontWeight: 600,
                fontFamily: getFonts(),
                fontSize: getDirection()==="rtl"?16:18,
                lineHeight: "1.857rem"
            },
            subtitle1: {
                fontWeight: 400,
                fontFamily: getFonts(),
                fontSize: getDirection()==="rtl"?18:20,
                lineHeight: "2rem",
                marginTop: 15
            },
            body1: {
                fontWeight: 400,
                fontFamily: getFonts(),
                fontSize: getDirection()==="rtl"?20:22,
                lineHeight: "1.81rem",
                color:"#63637e",

            },
            body2: {
                fontWeight: 600,
                fontFamily: getFonts(),
                fontSize: getDirection()==="rtl"?13:15,
                lineHeight: "1.8rem",
                color:"#e6e6e6",
                textAlign: "center",
                letterSpacing: getDirection()==="rtl"?0:1,
            },
            button:{
                fontWeight: 400,
                fontFamily: getFonts(),
                fontSize: getDirection()==="rtl"?15:17,
                lineHeight: 3,
                backgroundColor: "rgba(229,39,100,1)",
                color:"#e6e6e6",
                letterSpacing: getDirection()==="rtl"?0:2,
                borderRadius:10,
                '&:hover':{
                    backgroundColor:"#ffc"
                }
            }
        }
    }
)


export default theme