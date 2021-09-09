import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import React from "react";

function MenuItem(props) {
    return (
        <ListItem onClick={() => {
            props.pageFunc();
            props.mobileFunc()
        }}
                  style={{
                      position: "relative",
                      paddingLeft: 0,
                      paddingRight: 0,
                      backgroundColor: props.page === props.num ? "#e52764" : "transparent"
                  }} className={"listItem"} button>
            <ListItemText disableTypography={true} children={
                <Typography variant="body2">{props.text}</Typography>
            }/>
            <div className={"overlay"}/>

        </ListItem>
    );
}

export default MenuItem;