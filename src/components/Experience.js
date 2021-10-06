import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import {getDirection} from "../localization";
import theme from "../themes/theme";
const useStyles = makeStyles({
    root: {
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        position: "relative",
        padding: 20,
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            justifyContent: "flex-start",
        },
    },
    yearContainer: {
        display: "flex",
        alignItems: "flex-start",
        '&::before': {
            content: "''",
            width: 3,
            backgroundColor: "#37374e",
            position: "absolute",
            top: 55,
            left: 30,
            bottom: 0,
            borderRadius: 100,
        }
    },
    descContainer: {
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        marginLeft: 140,
        position: "relative",
        width: "65%",
        [theme.breakpoints.down("md")]: {
            marginLeft: 60,
        },
        [theme.breakpoints.down("sm")]: {
            marginLeft: 50,
            width: "80%",
        },
    },
    icon: {
        color: "#37374e",
        marginRight: 10
    },
    title: {
        color: "rgb(229,39,100)",
        textAlign: "left",
        [theme.breakpoints.down("sm")]: {
            marginTop: 20,
            fontSize: getDirection() === "rtl" ? 20 : 22,
        },
        '&::before': {
            content: "''",
            width: 30,
            height: 1,
            backgroundColor: "#37374e",
            position: "absolute",
            top: 17,
            left: -40,
            borderRadius: "100px",
            [theme.breakpoints.down("sm")]: {
                display: "none"
            },
        }
    },
    company: {
        color: '#fff',
        textAlign: "left",
        fontSize: getDirection() === "rtl" ? 18 : 20,
        [theme.breakpoints.down("xs")]: {
            fontSize: getDirection() === "rtl" ? 16 : 18,
        },
    },
    desc: {
        fontSize: getDirection() === "rtl" ? 20 : 22,
        textAlign: "left",
        [theme.breakpoints.down("xs")]: {
            fontSize: getDirection() === "rtl" ? 18 : 20,
        },
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