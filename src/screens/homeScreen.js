import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {IconButton, Typography} from "@material-ui/core";
import styles from "../assets/CSS/bgEffect.css"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';
import theme from "../themes/theme";
import {getTranslate} from "../localization";


const useStyles = makeStyles({
    root: {
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    name: {
        color: "#e52764",
        [theme.breakpoints.down("xs")]:{
            display:"block"
        }
    },
    btnContainer :{
        display:"flex",
        flexDirection:"row",

    },
    iconBTN:{
        borderRadius:"50%",
        border:"2px solid #37374e",
        color:"#37374e",
        margin:"10px",
        transition:" 200ms ease",
        '&:hover':{
            borderColor:"#e52764",
            transition:" 500ms ease",
            color:"#e52764",

        },

    },
    Icon:{
        fontSize:"2rem",
        color:"inherit",

    }
});

function Home() {
    const classes = useStyles()
    const translate = getTranslate()
    return (
        <div className={classes.root}>
            <div className={"bg"}>
            </div>
            <Typography variant={"h1"} style={{marginBottom:"15px"}}>{translate.hi1}<span className={classes.name}>{translate.name}</span>{translate.hi2}</Typography>
            <Typography variant={"body1"} style={{marginBottom:"15px",width:"60%"}}>{translate.homeDesc}</Typography>
            <div className={classes.btnContainer}>
                <IconButton className={classes.iconBTN}>
                    <LinkedInIcon className={classes.Icon}/>
                </IconButton>
                <IconButton className={classes.iconBTN}>
                    <GitHubIcon className={classes.Icon}/>
                </IconButton>
                <IconButton className={classes.iconBTN}>
                    <TelegramIcon className={classes.Icon}/>
                </IconButton>
            </div>
        </div>

    );
}

export default Home;