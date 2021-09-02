import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import profilePhoto from "../assets/images/profile.jpg"
import {getTranslate} from "../localization/index"

const drawerWidth = 260;
const translate = getTranslate()
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        height:"100%"
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#0f0f24",
        height: "100vh",
    },
    // necessary for content to be below app bar
    topDrawer: {
        padding: "0 20px",
        // height: "100%",
        borderBottom: "1px solid #e6e6e6",
        textAlign: "center"
    },
    profileImage: {
        borderRadius: "50%",
        width: "200px",
        height: "200px",
        border: "7px solid #e6e6e6"
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

export default function PermanentDrawerLeft() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Permanent drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.topDrawer}>
                    <img src={profilePhoto} alt="" className={classes.profileImage}/>
                </div>

                <List style={{ height: "100%" , display:"flex" , flexDirection:"column",alignItems:"center" , justifyContent:"center"}}>

                    <ListItem button>
                        <ListItemText disableTypography={true} children={
                            <Typography variant="body2" >{translate.home}</Typography>
                        }/>
                    </ListItem>
                    <ListItem button>
                        <ListItemText disableTypography={true} children={
                            <Typography variant="body2" >{translate.about}</Typography>
                        }/>
                    </ListItem>
                    <ListItem button>
                        <ListItemText disableTypography={true} children={
                            <Typography variant="body2" >{translate.resume}</Typography>
                        }/>
                    </ListItem>
                    <ListItem button>
                        <ListItemText disableTypography={true} children={
                            <Typography variant="body2" >{translate.portfolios}</Typography>
                        }/>
                    </ListItem>
                    <ListItem button>
                        <ListItemText disableTypography={true} children={
                            <Typography variant="body2" >{translate.contact}</Typography>
                        }/>
                    </ListItem>

                </List>
                <Divider/>

            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                    facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                    gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                    donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                    Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                    imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                    arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                    donec massa sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                    facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                    tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                    consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                    vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                    hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                    tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                    nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                    accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
                </Typography>
            </main>
        </div>
    );
}
