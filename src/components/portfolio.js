import React, {useEffect, useState} from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {Grid, LinearProgress} from "@material-ui/core";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import {getDirection} from "../localization";

const useStyles = makeStyles({
    root: {
        width:"100%",
        display: "flex",
        alignItems: "flex-start",
        position:"relative",
        padding:"10px 20px 10px 20px"
    },
    image:{
        width:"100%",
        cursor:"pointer",

    },
    title:{
        transition:"300ms",

        '&:hover':{
            color:"rgb(229,39,100)",
            cursor:"pointer",

        },

    },
    lang:{

    },
    portfolioContainer:{
        padding:15,
    },



});


function Portfolio(props) {
    const classes = useStyles()



    return (
        <Grid className={classes.root}>
            <Grid className={classes.portfolioContainer}>
                <img src={props.imgSrc} className={classes.image}/>
                <Typography variant={"h4"} className={classes.title}>{props.title}</Typography>
                <Typography variant={"body1"} className={classes.lang}>{props.language}</Typography>
            </Grid>



        </Grid>

    );
}

export default Portfolio;