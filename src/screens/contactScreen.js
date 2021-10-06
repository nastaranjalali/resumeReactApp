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
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        paddingLeft: 40,
        paddingRight: 40,
    },
    title: {
        textAlign: "left",
        marginBottom: 10,
        marginLeft: 10,
    },
    input: {
        margin: 10,

    },
    sendBtn: {
        maxWidth: "50%",
        padding: "10px 30px",
        marginLeft: 10,
        lineHeight: 2,
        [theme.breakpoints.down("md")]: {
            maxWidth: "100%",
        },
        '&:hover': {
            backgroundColor: "rgba(191, 23, 77, 0.6)",
        }
    },
    infoContainer: {
        display: "flex",
        flexDirection: "column",
        marginTop:55

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
                    <InfoBox title={translate.phone} desc={["(+98)9034066980","(+98)9182576354"]}
                             icon={<PhoneIcon className={classes.icon}/>}/>
                    <InfoBox title={translate.email} desc={[translate.emailAddress]}
                             icon={<EmailIcon className={classes.icon}/>}/>
                    <InfoBox title={translate.address} desc={[translate.addressDesc]}
                             icon={<LocationOnIcon className={classes.icon}/>}/>
                </Grid>
            </Grid>

        </Grid>


    );
}


export default Contact;