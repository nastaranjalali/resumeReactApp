import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from '@material-ui/core/styles';
import profilePhoto from "../assets/images/profile.jpg"
import {getTranslate, changeLang, lang} from "../localization";
import {Button, Fade} from "@material-ui/core";
import LanguageIcon from '@material-ui/icons/Language';
import Home from './homeScreen';
import About from './AboutScreen';
import Resume from './resumeScreen';
import Contact from './contactScreen';
import '../assets/CSS/index.css'
import Portfolios from "./portfoliosScreen";
import MenuItem from "../components/MenuItem";

const drawerWidth = 260;
const translate = getTranslate()

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        zIndex: 100,
        borderRadius: 2,
        backgroundColor: "rgba(15,15,36,0.5)",
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#0f0f24",
        height: "100vh"
    },
    topDrawer: {
        padding: "0 20px",
        borderBottom: "1px solid #37374e",
        textAlign: "center"
    },
    profileImage: {
        marginTop: "20px",
        marginBottom: "20px",
        borderRadius: "50%",
        width: "200px",
        height: "200px",
        border: "5px solid #37374e"
    },
    mainDrawer: {
        flexGrow: "1",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    bottomDrawer: {
        flexGrow: "1",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        lineHeight: 1,
        borderRadius: 0,
        height: "35%"
    },
    inActiveButton: {
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        '&:hover': {
            backgroundColor: "#0a0a1f",
        }
    },
    activeButton: {
        backgroundColor: "#e6e6e6",
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        color: "#0a0a1f",
        width: "50%",
        '&:hover': {
            background: "#0a0a1f",
            color: "#e6e6e6"
        }
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function ResponsiveDrawer(props) {
    const {window} = props;
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [page, setPage] = useState(0);
    const [changed, setChanged] = useState(true);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const setMobileOpenFalse = () => {
        setMobileOpen(false)
    }
    const setNewPage = (num) => {
        setPage(num)
    }
    useEffect(() => {
        setChanged((prev) => !prev)
        setTimeout(function () {
            setChanged((prev) => !prev)
        }, 300)

    }, [page])

    const drawer = (
        <>
            <div className={classes.topDrawer}>
                <img src={profilePhoto} alt="" className={classes.profileImage}/>
            </div>
            <Divider/>
            <div className={classes.mainDrawer}>
                <List style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%"
                }}>
                    <MenuItem mobileFunc={setMobileOpenFalse} pageFunc={() => setNewPage(0)} page={page}
                              text={translate.home} num={0}/>
                    <MenuItem mobileFunc={setMobileOpenFalse} pageFunc={() => setNewPage(1)} page={page}
                              text={translate.about} num={1}/>
                    <MenuItem mobileFunc={setMobileOpenFalse} pageFunc={() => setNewPage(2)} page={page}
                              text={translate.resume} num={2}/>
                    <MenuItem mobileFunc={setMobileOpenFalse} pageFunc={() => setNewPage(3)} page={page}
                              text={translate.portfolios} num={3}/>
                    <MenuItem mobileFunc={setMobileOpenFalse} pageFunc={() => setNewPage(4)} page={page}
                              text={translate.contact} num={4}/>
                </List>
            </div>
            <div className={classes.bottomDrawer}>
                <Button
                    className={[classes.button, lang === 'en' ? classes.inActiveButton : classes.activeButton].join(' ')}
                    onClick={() => changeLang("en")}
                    endIcon={lang === "fa" ? <LanguageIcon/> : undefined}
                >
                    English
                </Button>
                <Button

                    className={[classes.button, lang === 'fa' ? classes.inActiveButton : classes.activeButton].join(' ')}
                    onClick={() => changeLang("fa")}
                    endIcon={lang === "en" ? <LanguageIcon/> : undefined}
                    style={{
                        fontFamily: "IRANSans",
                        letterSpacing: 0,
                    }}
                >
                    فارسی
                </Button>
            </div>
        </>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    const changePage = () => {
        switch (page) {
            case 0:
                return <Home/>
            case 1:
                return <About/>
            case 2:
                return <Resume/>
            case 3:
                return <Portfolios/>
            case 4:
                return <Contact/>
            default:
                return <Home/>
        }
    }

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
                style={{
                    margin: "10px",
                    fontSize: "2.5 rem",
                    position: "fixed"

                }}
            >
                <MenuIcon/>
            </IconButton>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <Fade in={changed} timeout={{
                appear: 500,
                enter: 300,
                exit: 0,
            }}>
                <main className={classes.content} style={{padding: 0}}>
                    {changePage()}
                </main>
            </Fade>
        </div>
    );
}

ResponsiveDrawer.propTypes = {
    window: PropTypes.func,
};

export default ResponsiveDrawer;
