import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { getTranslate} from "../localization";
import Title from "../components/Title";
import {Button, Grid, TextField, Typography} from "@material-ui/core";
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import '../assets/CSS/contactMe.css'
import InfoBox from "../components/InfoBox";
import theme from "../themes/theme";



const useStyles = makeStyles({
    root: {
        width: "100%",
        height: "100vh",

    },
    formContainer: {
        width:"100%",
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        paddingLeft: 20,
        paddingRight: 20,
    },
    title: {
        width:"100%",
        textAlign: "left",
        paddingBottom: 10,
        paddingLeft: 10,
    },
    input: {
        width:"100%",
        paddingRight:10,
        paddingLeft:10,
        marginTop:10,
        marginBottom:10
    },
    sendBtn: {
        maxWidth: "50%",
        marginLeft: 10,
        marginRight: 10,
        lineHeight: 2,
        [theme.breakpoints.down("md")]: {
            maxWidth: "100%",
        },
        '&:hover': {
            backgroundColor: "rgba(191, 23, 77, 0.6)",
        }
    },
    infoContainer: {
        width:"100%",
        display: "flex",
        flexDirection: "column",
        marginTop:55,
        paddingLeft: 20,
        paddingRight: 20,

    },
    icon: {
        fontSize: "3rem",
        padding:7,
        border:"1px solid #37374e",
        color:"#8383a7"
    }

});

function Contact() {
    const classes = useStyles()
    const translate = getTranslate()
    return (
        <Grid className={classes.root}>
            <Title text={translate.contact}/>
            <Grid container direction={"row"} >
                <Grid xs={12} lg={6} className={classes.formContainer}>
                    <Typography variant={"h4"} className={classes.title}>{translate.getInTouch}</Typography>
                    <TextField
                        color={"#37374e"}
                        className={classes.input}
                        required
                        label={translate.enterYourName}
                        defaultValue=" "
                        variant="outlined"
                        placeholder={" "}
                    />

                    <TextField
                        className={classes.input}
                        required
                        label={translate.enterYourEmail}
                        defaultValue=" "
                        variant="outlined"
                        placeholder={" "}

                    />

                    <TextField
                        className={classes.input}
                        required
                        label={translate.enterYourSubject}
                        defaultValue=" "
                        variant="outlined"
                        placeholder={" "}

                    />
                    <TextField
                        className={classes.input}
                        label={translate.enterYourMessage}
                        multiline
                        rows={5}
                        defaultValue=" "
                        variant="outlined"
                        placeholder={" "}
                    />
                    <Button variant="button" className={classes.sendBtn}>{translate.send}</Button>
                </Grid>
                <Grid xs={12} lg={6} className={classes.infoContainer}>
                    <InfoBox type={["tel:+989034066980","tel:+989182576354"]} title={translate.phone} desc={["(+98)9034066980","(+98)9182576354"]}
                             icon={<PhoneIcon className={classes.icon}/>}/>
                    <InfoBox type={["mailto:"+translate.emailAddress]} title={translate.email} desc={[translate.emailAddress]}
                             icon={<EmailIcon className={classes.icon}/>}/>
                    <InfoBox type={["https://www.google.de/maps/place/Tehran,+Tehran+Province,+Iran/@35.6967329,51.2097325,11z/data=!3m1!4b1!4m5!3m4!1s0x3f8e00491ff3dcd9:0xf0b3697c567024bc!8m2!3d35.6891975!4d51.3889736"]} title={translate.address} desc={[translate.addressDesc]}
                             icon={<LocationOnIcon className={classes.icon}/>}/>
                </Grid>
            </Grid>

        </Grid>


    );
}


export default Contact;