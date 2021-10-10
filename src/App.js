import React from "react";
import theme from "./themes/theme";
import {ThemeProvider, StylesProvider, jssPreset} from "@material-ui/core/styles";
import {CssBaseline} from "@material-ui/core";
import IndexScreen from "./screens/index"
import {create} from 'jss';
import rtl from 'jss-rtl';
import {getDirection} from "./localization/index";
import {BrowserRouter} from "react-router-dom";

const jss = create({plugins: [...jssPreset().plugins, rtl()]});

function App() {

    return getDirection() === "ltr" ? (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <StylesProvider>
                    <CssBaseline/>
                    <IndexScreen/>
                </StylesProvider>
            </ThemeProvider>
        </BrowserRouter>
    ) : (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <StylesProvider jss={jss}>
                    <CssBaseline/>
                    <IndexScreen/>
                </StylesProvider>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App;
