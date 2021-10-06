import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import theme from "../themes/theme";
import {getDirection} from "../localization";


const useStyles = makeStyles({
    root: {
        width: "100%",
        height: "120px",
        display: "flex",
        justifyContent: "flex-start",
        position:"relative",
        marginBottom:40
    },
    title: {
        margin: "50px 0 0 40px",
        [theme.breakpoints.down("sm")]: {
            fontSize: getDirection() === "rtl" ? 33 : 35,
        },
        '&::before': {
            content: "''",
            width: "150px",
            height: "5px",
            backgroundColor:"#e52764",
            position:"absolute",
            top:"auto",
            left:0,
            bottom:0,
            margin: "30px 0 0 50px",
            borderRadius:"100px",



        },
        '&:hover':{


            '&::before': {
                content: "''",
                width: "180px",
                height: "5px",
                backgroundColor:"#e52764",
                position:"absolute",
                top:"auto",
                left:0,
                bottom:0,
                margin: "30px 0 0 35px",
                borderRadius:"100px",



            }

        }

    }
});

function MenuItem(props) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Typography variant={"h2"} className={classes.title}>{props.text}</Typography>
        </div>

    );
}

export default MenuItem;