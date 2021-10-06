import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";


const useStyles = makeStyles({
    root: {
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        position: "relative",
        padding: "10px 20px 10px 20px",
    },
    image: {
        maxWidth: "100%",
        cursor: "pointer",
        backfaceVisibility:"hidden",
        verticalAlign: "top",

},
    title: {
        transition: "300ms",
        '&:hover': {
            color: "rgb(229,39,100)",
            cursor: "pointer",
        },
    },
    container:{
        margin:15
    },
});


function Portfolio(props) {
    const classes = useStyles()

    return (
        <Grid className={classes.root}>
            <Grid className={classes.container}>
                <div className={'portfolioPic'}>
                    <img src={props.imgSrc} className={classes.image} alt={"portfolio"}/>
                    <div className={"overlay21"}/>
                    <div className={"overlay22"}/>
                </div>
                <Typography variant={"h4"} className={classes.title}>{props.title}</Typography>
                <Typography variant={"body1"}>{props.language}</Typography>
            </Grid>
        </Grid>
    );
}

export default Portfolio;