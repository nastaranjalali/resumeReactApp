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
                fontSize: "3.2857 rem",
                lineHeight: "4 rem"
            },
            h2: {
                fontWeight: 700,
                fontFamily: getFonts(),
                fontSize: "2.57 rem",
                lineHeight: "3.2857 rem"
            },
            h3: {
                fontWeight: 600,
                fontFamily: getFonts(),
                fontSize: "2 rem",
                lineHeight: "2.7 rem"
            }, h4: {
                fontWeight: 600,
                fontFamily: getFonts(),
                fontSize: "1.71 rem",
                lineHeight: "2.43 rem"
            }, h5: {
                fontWeight: 600,
                fontFamily: getFonts(),
                fontSize: "1.43 rem",
                lineHeight: "2.14 rem"
            },
            h6: {
                fontWeight: 600,
                fontFamily: getFonts(),
                fontSize: "1.14 rem",
                lineHeight: "1.857rem"
            },
            subtitle1: {
                fontWeight: 400,
                fontFamily: getFonts(),
                fontSize: "1.25 rem",
                lineHeight: "2rem",
                marginTop: 15
            },
            body1: {
                fontWeight: 400,
                fontFamily: getFonts(),
                fontSize: 18,
                lineHeight: "1.8rem",
                color:"#636363"
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