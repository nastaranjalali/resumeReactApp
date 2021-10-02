import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import theme from "../themes/theme";
import {getTranslate} from "../localization";
import Title from "../components/Title";
import aboutMePic from "../assets/images/aboutMePic.jpg"
import {Button, Grid, Typography} from "@material-ui/core";
import Service from "../components/Service";
import PaletteIcon from '@material-ui/icons/Palette';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import CodeIcon from '@material-ui/icons/Code';
import Skill from "../components/Skill";

const useStyles = makeStyles({
    root: {
        width: "100%",
        height: "100vh",

    },
    skillContainer:{

    }




});

function ResumeScreen() {
    const classes = useStyles()
    const translate = getTranslate()
    return (
        <Grid className={classes.root}>
            <Title text={translate.mySkills}/>
            <Grid container direction={"row"} >
                <Grid xs={12} lg={6} className={classes.skillContainer}>
                    <Skill title={translate.html5} val={100}/>
                    <Skill title={translate.js} val={70}/>
                    <Skill title={translate.reactJS} val={50}/>
                    <Skill title={translate.materialUI} val={80}/>

                </Grid>
                <Grid xs={12} lg={6} className={classes.skillContainer}>
                    <Skill title={translate.css3} val={90}/>
                    <Skill title={translate.jquery} val={40}/>
                    <Skill title={translate.bootstrap} val={60}/>
                    <Skill title={translate.photoshop} val={45}/>
                </Grid>
            </Grid>
            <Title text={translate.services}/>
            <Grid container direction={"row"} className={classes.servicesContainer}>

            </Grid>

        </Grid>


    );
}


export default ResumeScreen;