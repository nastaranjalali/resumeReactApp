import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import profilePhoto from "../assets/images/profile.jpg"
import {getTranslate, changeLang, lang} from "../localization";
import {Button} from "@material-ui/core";
import LanguageIcon from '@material-ui/icons/Language';


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
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#0f0f24",
        height: "100vh"
    },
    topDrawer: {
        padding: "0 20px",
        // height: "100%",
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
        borderTop: "1px solid #37374e",
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
        borderTop: "2px solid #37374e",
        borderBottom: "2px solid #37374e",
        '&:hover': {
            backgroundColor: "#0a0a1f",
        }
    },
    activeButton: {
        backgroundColor: "#e6e6e6",
        color: "#0a0a1f",
        width: "50%",
        '&:hover': {
            background: "#e52764",
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
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

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

                        <ListItem button>
                            <ListItemText disableTypography={true} children={
                                <Typography variant="body2">{translate.home}</Typography>
                            }/>
                        </ListItem>
                        <ListItem button>
                            <ListItemText disableTypography={true} children={
                                <Typography variant="body2">{translate.about}</Typography>
                            }/>
                        </ListItem>
                        <ListItem button>
                            <ListItemText disableTypography={true} children={
                                <Typography variant="body2">{translate.resume}</Typography>
                            }/>
                        </ListItem>
                        <ListItem button>
                            <ListItemText disableTypography={true} children={
                                <Typography variant="body2">{translate.portfolios}</Typography>
                            }/>
                        </ListItem>
                        <ListItem button>
                            <ListItemText disableTypography={true} children={
                                <Typography variant="body2">{translate.contact}</Typography>
                            }/>
                        </ListItem>
                    </List>
                </div>
                <div className={classes.bottomDrawer}>
                    <Button

                        className={[classes.button, lang === 'en' ? classes.inActiveButton :classes.activeButton ].join(' ')}
                        onClick={() => changeLang("en")}
                        endIcon={lang === "fa" ? <LanguageIcon/> : undefined}
                    >
                        English
                    </Button>
                    <Button

                        className={[classes.button, lang === 'fa' ? classes.inActiveButton :classes.activeButton].join(' ')}
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
        )
    ;

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                    style={{
                        margin: "10px",
                        fontSize:"2.5 rem"

                    }}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" noWrap>

                </Typography>
            </Toolbar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
                            keepMounted: true, // Better open performance on mobile.
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
            <main className={classes.content}>
                <div className={classes.toolbar}/>

            </main>
        </div>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;
