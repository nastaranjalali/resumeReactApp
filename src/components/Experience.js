import React, {useEffect, useState} from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {Grid, LinearProgress} from "@material-ui/core";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import {getDirection} from "../localization";

const useStyles = makeStyles({
    root: {
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        position:"relative",
        padding:20
    },

    yearContainer:{
        display: "flex",
        alignItems: "flex-start",
        '&::before':{
            content: "''",
            width: "3px",
            backgroundColor:"#37374e",
            position:"absolute",
            top:55,
            left:30,
            bottom:0,
            borderRadius:"100px",
        }
    },
    descContainer:{
        display: "flex",
        alignItems: "flex-start",
        flexDirection:"column",
        marginLeft:140,
        position:"relative",
        width:"70%"

    },
    icon:{
        color:"#37374e",
        marginRight:10
    },
    title:{
        color:"rgba(229,39,100,1)",
        '&::before':{
            content: "''",
            width: "30px",
            height:1,
            backgroundColor:"#37374e",
            position:"absolute",
            top:17,
            left:-40,
            bottom:0,
            borderRadius:"100px",
        }
    },
    company:{
        color:'#fff',
        fontSize: getDirection()==="rtl"?18:20,

    },
    desc:{
        fontSize: getDirection()==="rtl"?16:18,
        textAlign:"left",

    },

});


function Experience(props) {
    const classes = useStyles()



    return (
        <Grid className={classes.root}>
            <Grid className={classes.yearContainer}>
                <RadioButtonUncheckedIcon className={classes.icon}/>
                <Typography variant={"h6"}>{props.year}</Typography>
            </Grid>
            <Grid className={classes.descContainer}>
                <Typography variant={"h5"} className={classes.title}>{props.jobTitle}</Typography>
                <Typography variant={"body1"} className={classes.company}>{props.company}</Typography>
                <Typography variant={"body1"} className={classes.desc}>{props.desc}</Typography>
            </Grid>


        </Grid>

    );
}

export default Experience;