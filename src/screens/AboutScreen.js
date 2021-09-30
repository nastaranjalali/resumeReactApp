import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import theme from "../themes/theme";
import {getTranslate} from "../localization";
import Title from "../components/Title";
import aboutMePic from "../assets/images/aboutMePic.jpg"
import {Grid} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: "100%",
        height: "100vh",

    },
    sectionContainer: {},
    picContainer: {
        // backgroundColor:"#883",
        position: "relative",
        padding: 20,
        "&::before": {
            content: "''",
            width: "20px",
            height: "230px",
            backgroundColor: "rgba(229,39,100,0.7)",
            position: "absolute",
            top: 20,
            left: 20,
        }, "&::after": {
            content: "''",
            width: "20px",
            height: "230px",
            backgroundColor: "rgba(229,39,100,0.7)",
            position: "absolute",
            bottom: 20,
            right: 20,
        },


    },
    aboutMePic: {
        width: "100%"

    },
    textContainer: {
        backgroundColor: "#833",
        padding: 35,


    }

});

function About() {
    const classes = useStyles()
    const translate = getTranslate()
    return (
        <Grid className={classes.root}>
            <Title text={translate.aboutMe}/>
            <Grid container direction={"row"} className={classes.sectionContainer}>
                <Grid xs={12} md={6} className={classes.picContainer}>
                    <img src={aboutMePic} alt="" className={classes.aboutMePic}/>
                </Grid>
                <Grid xs={12} md={6} className={classes.textContainer}>

                </Grid>
            </Grid>
        </Grid>


    );
}

export default About;