import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import theme from "../themes/theme";
import {getTranslate} from "../localization";
import Title from "../components/Title";
import aboutMePic from "../assets/images/aboutMePic.jpg"
import {Button, Grid, Typography} from "@material-ui/core";

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
        minHeight: 400,
        "&::before": {
            content: "''",
            width: "20px",
            height: "60%",
            backgroundColor: "rgba(229,39,100,0.7)",
            position: "absolute",
            top: 20,
            left: 20,
        }, "&::after": {
            content: "''",
            width: "20px",
            height: "60%",
            backgroundColor: "rgba(229,39,100,0.7)",
            position: "absolute",
            bottom: 20,
            right: 20,
        },


    },
    aboutMePic: {
        width: "100%",
        height: "100%"

    },
    textContainer: {
        padding: 20,
        textAlign: "left",


    },
    name: {
        color: "rgba(229,39,100,1)"
    },
    bold: {
        minWidth: 130,
        display: "inline-block"
    },
    cvButton:{
        '&:hover':{
            backgroundColor: "rgba(191, 23, 77, 0.6)",
        }
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
                    <Typography variant={"h3"} style={{marginBottom: "15px"}}>{translate.hi1}<span
                        className={classes.name}>{translate.name}</span>{translate.hi2}</Typography>
                    <Typography variant={"body1"} style={{marginBottom: "15px"}}>{translate.homeDesc}</Typography>
                    <Typography variant={"body1"} style={{marginBottom: 10}}>
                        <b className={classes.bold}>{translate.fullName}</b>
                        : {translate.name}
                    </Typography><Typography variant={"body1"} style={{marginBottom: 10}}>
                    <b className={classes.bold}>{translate.age}</b>
                    : 21 {translate.years}
                </Typography><Typography variant={"body1"} style={{marginBottom: 10}}>
                    <b className={classes.bold}>{translate.nationality}</b>
                    : {translate.iranian}
                </Typography><Typography variant={"body1"} style={{marginBottom: 10}}>
                    <b className={classes.bold}>{translate.languages}</b>
                    : {translate.persian}, {translate.english}, {translate.german},
                </Typography><Typography variant={"body1"} style={{marginBottom: 10}}>
                    <b className={classes.bold}>{translate.phone}</b>
                    : (+98)9034066980
                </Typography>
                    <div style={{
                        display: "flex", marginTop: 25,
                        "&::hover": {}

                    }}>
                        <Button variant="button" className={classes.cvButton}>{translate.downloadcv}</Button>
                    </div>
                </Grid>
            </Grid>
            <Title text={translate.services}/>
        </Grid>


    );
}

export default About;