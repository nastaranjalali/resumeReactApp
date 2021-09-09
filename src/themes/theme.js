import palette from "./palette";
import {createTheme} from '@material-ui/core/styles'
import {getDirection, getFonts} from "../localization/index"

const theme = createTheme(
    {
        palette: palette,
        direction: getDirection(),
        spacing: 2.5,
        typography: {
            h1: {
                fontWeight: 700,
                fontFamily: getFonts(),
                fontSize: "2.8rem",
                lineHeight: "4rem"
            },
            h2: {
                fontWeight: 700,
                fontFamily: getFonts(),
                fontSize: "2.57rem",
                lineHeight: "3.2857rem"
            },
            h3: {
                fontWeight: 600,
                fontFamily: getFonts(),
                fontSize: "2rem",
                lineHeight: "2.7rem"
            }, h4: {
                fontWeight: 600,
                fontFamily: getFonts(),
                fontSize: "1.71rem",
                lineHeight: "2.43rem"
            }, h5: {
                fontWeight: 600,
                fontFamily: getFonts(),
                fontSize: "1.43rem",
                lineHeight: "2.14rem"
            },
            h6: {
                fontWeight: 600,
                fontFamily: getFonts(),
                fontSize: "1.14rem",
                lineHeight: "1.857rem"
            },
            subtitle1: {
                fontWeight: 400,
                fontFamily: getFonts(),
                fontSize: "1.25rem",
                lineHeight: "2rem",
                marginTop: 15
            },
            body1: {
                fontWeight: 400,
                fontFamily: getFonts(),
                fontSize: 22,
                lineHeight: "1.8rem",
                color:"#37374e"
            },
            body2: {
                fontWeight: 600,
                fontFamily: getFonts(),
                fontSize: ".94rem",
                lineHeight: "1.8rem",
                color:"#e6e6e6",
                textAlign: "center",
                letterSpacing:1,
            },
            button:{
                fontWeight: 400,
                fontFamily: getFonts(),
                fontSize: ".9rem",
                lineHeight: 50,
                color:"#e6e6e6",
                letterSpacing:2
            }
        }
    }
)


export default theme