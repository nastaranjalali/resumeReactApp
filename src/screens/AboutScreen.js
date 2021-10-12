import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { getDirection, getTranslate } from "../localization";
import Title from "../components/Title";
import aboutMePic from "../assets/images/aboutMePic.jpg";
import { Button, Grid, Typography } from "@material-ui/core";
import Service from "../components/Service";
import PaletteIcon from "@material-ui/icons/Palette";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import CodeIcon from "@material-ui/icons/Code";
import theme from "../themes/theme";
import CVFile from "../assets/cv.jpg"

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100vh",
  },
  picContainer: {
    position: "relative",
    padding: 20,
    minHeight: 400,
    [theme.breakpoints.down("xs")]: {
      minHeight: 300,
    },
    "&::before": {
      content: "''",
      width: 20,
      height: "60%",
      backgroundColor: "rgba(229,39,100,.7)",
      position: "absolute",
      top: 20,
      left: 20,
    },
    "&::after": {
      content: "''",
      width: 20,
      height: "60%",
      backgroundColor: "rgba(229,39,100,.7)",
      position: "absolute",
      bottom: 20,
      right: 20,
    },
  },
  aboutMePic: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    padding: 20,
    textAlign: "left",
  },
  info: {
    marginBottom: 10,
    [theme.breakpoints.down("md")]: {
      fontSize: getDirection() === "rtl" ? 18 : 20,
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: getDirection() === "rtl" ? 15 : 17,
    },
  },
  name: {
    color: "rgb(229,39,100)",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  bold: {
    minWidth: 130,
    display: "inline-block",
  },
  cvButton: {
    "&:hover": {
      backgroundColor: "rgba(191, 23, 77, 0.6)",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  servicesContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    paddingBottom: 40,
  },
  icon: {
    fontSize: "3.5rem",
    color: "rgb(229,39,100)",
  },
});

function About() {
  const classes = useStyles();
  const translate = getTranslate();
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `cv.jpg`;
    link.href = CVFile;
    link.click();
  };
  return (
    <Grid className={classes.root}>
      <Title text={translate.aboutMe} />
      <Grid container direction={"row"}>
        <Grid xs={12} lg={6} className={classes.picContainer}>
          <img src={aboutMePic} alt="" className={classes.aboutMePic} />
        </Grid>
        <Grid xs={12} lg={6} className={classes.textContainer}>
          <Typography variant={"h3"} style={{ marginBottom: 15 }}>
            {translate.hi1}
            <span className={classes.name}>{translate.name}</span>
            {translate.hi2}
          </Typography>
          <Typography
            variant={"body1"}
            className={classes.info}
            style={{ marginBottom: 15 }}
          >
            {translate.homeDesc}
          </Typography>
          <Typography variant={"body1"} className={classes.info}>
            <b className={classes.bold}>{translate.fullName}</b>:{" "}
            {translate.name}
          </Typography>
          <Typography variant={"body1"} className={classes.info}>
            <b className={classes.bold}>{translate.age}</b>: 21{" "}
            {translate.years}
          </Typography>
          <Typography variant={"body1"} className={classes.info}>
            <b className={classes.bold}>{translate.nationality}</b>:{" "}
            {translate.iranian}
          </Typography>
          <Typography variant={"body1"} className={classes.info}>
            <b className={classes.bold}>{translate.languages}</b>:{" "}
            {translate.persian}, {translate.english}, {translate.german}
          </Typography>
          <Typography variant={"body1"} className={classes.info}>
            <b className={classes.bold}>{translate.phone}</b>: (+98)9034066980
          </Typography>
          <div
            style={{
              display: "flex",
              marginTop: 25,
            }}
          >
            <Button
              onClick={onDownload}
              variant="button"
              className={classes.cvButton}
            >
              {translate.downloadcv}
            </Button>
          </div>
        </Grid>
      </Grid>
      <Title text={translate.services} />
      <Grid container direction={"row"} className={classes.servicesContainer}>
        <Service
          title={translate.webDesign}
          desc={translate.designDesc}
          icon={<PaletteIcon className={classes.icon} />}
        />
        <Service
          title={translate.webDevelopment}
          desc={translate.developDesc}
          icon={<CodeIcon className={classes.icon} />}
        />
        <Service
          title={translate.mobileApplication}
          desc={translate.mobileAppDesc}
          icon={<PhoneIphoneIcon className={classes.icon} />}
        />
      </Grid>
    </Grid>
  );
}

export default About;
