import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {getTranslate} from "../localization";
import Title from "../components/Title";
import { Grid} from "@material-ui/core";
import Portfolio from "../components/portfolio";
import photo from "../assets/images/portfolio.png"

const useStyles = makeStyles({
    root: {
        width: "100%",
        height: "100vh",
    },
    portfolioContainer:{
        display:"flex",
        flexWrap:"wrap"
    }
});

function Portfolios() {
    const classes = useStyles()
    const translate = getTranslate()
    return (
        <Grid className={classes.root}>
            <Title text={translate.portfolios}/>
            <Grid container direction={"row"} >
                <Grid className={classes.portfolioContainer}>
                    <Grid xs={12} md={6} lg={4}>
                        <Portfolio imgSrc={photo} title={"portfolio sample"} language={"react JS"}/>
                    </Grid>
                    <Grid xs={12} md={6} lg={4}>
                        <Portfolio imgSrc={photo} title={"portfolio sample"} language={"react JS"}/>
                    </Grid>
                    <Grid xs={12} md={6} lg={4}>
                        <Portfolio imgSrc={photo} title={"portfolio sample"} language={"react JS"}/>
                    </Grid>
                    <Grid xs={12} md={6} lg={4}>
                        <Portfolio imgSrc={photo} title={"portfolio sample"} language={"react JS"}/>
                    </Grid>
                    <Grid xs={12} md={6} lg={4}>
                        <Portfolio imgSrc={photo} title={"portfolio sample"} language={"react JS"}/>
                    </Grid>
                    <Grid xs={12} md={6} lg={4}>
                        <Portfolio imgSrc={photo} title={"portfolio sample"} language={"react JS"}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}


export default Portfolios;