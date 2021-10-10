import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Typography } from "@material-ui/core";
import "../assets/CSS/bgEffect.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TelegramIcon from "@material-ui/icons/Telegram";
import theme from "../themes/theme";
import { getTranslate } from "../localization";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginBottom: "15px",
  },
  name: {
    color: "#e52764",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  desc: {
    marginBottom: "15px",
    width: "60%",
    [theme.breakpoints.down("xs")]: {
      width: "85%",
    },
  },
  btnContainer: {
    display: "flex",
    flexDirection: "row",
  },
  iconBTN: {
    borderRadius: "50%",
    border: "2px solid #37374e",
    color: "#37374e",
    margin: "10px",
    transition: " 200ms ease",
    "&:hover": {
      borderColor: "#e52764",
      transition: " 500ms ease",
      color: "#e52764",
    },
  },
  Icon: {
    fontSize: "2rem",
    color: "inherit",
  },
});

function Home() {
  const classes = useStyles();
  const translate = getTranslate();
  return (
    <div className={classes.root}>
      <div className={"bg"}></div>
      <Typography variant={"h1"} className={classes.title}>
        {translate.hi1}
        <span className={classes.name}>{translate.name}</span>
        {translate.hi2}
      </Typography>
      <Typography variant={"body1"} className={classes.desc}>
        {translate.homeDesc}
      </Typography>
      <div className={classes.btnContainer}>
        <a
          href="https://www.linkedin.com/in/nastaran-jalali-559722200/"
          target={"_blank"}
          rel="noreferrer"
        >
          <IconButton className={classes.iconBTN}>
            <LinkedInIcon className={classes.Icon} />
          </IconButton>
        </a>

        <a
          href="https://github.com/nastaranjalali"
          target={"_blank"}
          rel="noreferrer"
        >
          <IconButton className={classes.iconBTN}>
            <GitHubIcon className={classes.Icon} />
          </IconButton>
        </a>

        <a href="https://t.me/Notnastarann" target={"_blank"} rel="noreferrer">
          <IconButton className={classes.iconBTN}>
            <TelegramIcon className={classes.Icon} />
          </IconButton>
        </a>
      </div>
    </div>
  );
}

export default Home;
