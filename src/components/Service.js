import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";


const useStyles = makeStyles({
    root: {
    },
    service:{
        width:"100%",
        padding:20,
        margin:20,
        backgroundColor:"#0f0f24",
        border:"1px solid #37374e",
        borderTop:"8px solid #37374e",
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-start",
        transition:"300ms",
        "&:hover":{
            borderTop:"8px solid rgba(229,39,100,1)",

        }
    },
    title:{
        margin:"20px 0 20px 0",
        paddingBottom:20,
        position:"relative",
        "&::before":{
            content: "''",
            width: "60px",
            height: "5px",
            backgroundColor:"#37374e",
            position:"absolute",
            top:"auto",
            left:0,
            bottom:0,
            borderRadius:"100px",

        }

    },
    desc:{

    }

});

function Service(props) {
    const classes = useStyles()
    return (
        <Grid container lg={4} md={6} xs={12} className={classes.root}>
            <Grid className={classes.service}>
                {props.icon}
                <Typography variant={"h5"} className={classes.title} >{props.title}</Typography>
                <Typography variant={"body1"} className={classes.desc}>{props.desc}</Typography>
            </Grid>
        </Grid>

    );
}

export default Service;