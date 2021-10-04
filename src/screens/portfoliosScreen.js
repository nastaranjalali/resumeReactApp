
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
import Experience from "../components/Experience";
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import Portfolio from "../components/portfolio";
import photo from "../assets/images/portfolio.png"

const useStyles = makeStyles({
    root: {
        width: "100%",
        height: "100vh",

    },
    portfolioContainer:{
        display:"flex",
        flexWrap:"wrap"
    },




});

function Portfolios() {
    const classes = useStyles()
    const translate = getTranslate()
    return (
        <Grid className={classes.root}>
            <Title text={translate.portfolios}/>
            <Grid container direction={"row"} >
                <Grid className={classes.portfolioContainer}>
                    <Grid xs={12} md={6} lg={4}>
                        <Portfolio imgSrc={photo} title={"portfolio sample"} language={"react JS"}/>
                    </Grid>
                    <Grid xs={12} md={6} lg={4}>
                        <Portfolio imgSrc={photo} title={"portfolio sample"} language={"react JS"}/>
                    </Grid>
                    <Grid xs={12} md={6} lg={4}>
                        <Portfolio imgSrc={photo} title={"portfolio sample"} language={"react JS"}/>
                    </Grid>
                    <Grid xs={12} md={6} lg={4}>
                        <Portfolio imgSrc={photo} title={"portfolio sample"} language={"react JS"}/>
                    </Grid>
                    <Grid xs={12} md={6} lg={4}>
                        <Portfolio imgSrc={photo} title={"portfolio sample"} language={"react JS"}/>
                    </Grid>
                    <Grid xs={12} md={6} lg={4}>
                        <Portfolio imgSrc={photo} title={"portfolio sample"} language={"react JS"}/>
                    </Grid>


                </Grid>


            </Grid>


        </Grid>


    );
}


export default Portfolios;