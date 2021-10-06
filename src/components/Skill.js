import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {LinearProgress} from "@material-ui/core";


const useStyles = makeStyles({
    root: {
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection:"column",
        position:"relative",
        padding:"20px 40px"
    },
    progressiveContainer:{
        display: "flex",
        width:"100%",
        alignItems:"center",
        justifyContent:"space-between"
    },
    progressive:{
        width:"80%",
        backgroundColor:"#37374e",
        alignItems:"center",
        justifyContent:"center",
        height:8,
        marginLeft:10,
        borderRadius:5
    }

});


function Skill(props) {
    const classes = useStyles()
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                let diff = 1
                diff = diff +2
                return Math.min(oldProgress + diff, props.val);
            });
        }, 20);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className={classes.root}>
            <Typography variant={"h6"} >{props.title}</Typography>
            <div className={classes.progressiveContainer} >
                <Typography variant={"body1"} >{progress+"%"}</Typography>
                <LinearProgress className={classes.progressive} variant="determinate" value={progress} />
            </div>
        </div>

    );
}

export default Skill;