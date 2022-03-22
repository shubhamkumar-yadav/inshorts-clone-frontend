import React from 'react';
import {Card,CardContent,Grid,makeStyles,Typography} from '@material-ui/core';
const useStyle = makeStyles(theme=>({
    image:{
        height:268,
        width:'88%',
        borderRadius:5,
        objectFit:'cover'
    },
    component:{
        marginBottom:20,
        boxShadow:'0px 2px 5px 0px rgb(0 0 0 /16%) , 0px 2px 10px 0px rgb(0 0 0 /12%)'
    },
    container:{
        padding:8,
        paddingBottom:'4px!important'
    },
    rightContainer:{
        margin:'5px 0px 0px -25px',
        display:'flex',
        flexDirection:'column',
        [theme.breakpoints.down('sm')]:{
            margin:'5px 0'
        }
    },
    title:{
        color:'#44444d',
        fontWeight:400,
        fontSize:22,
        lineHeight:'24px'
    },
    author:{
        fontSize:12,
        color:'#808290',
        lineHeight:'22px'
    },
    description:{
        lineHeight:'20px',
        color:'#44444d',
        marginTop:'10px'
    },
    publisher:{
        fontSize:12,
        marginTop:'auto',
        marginBottom:10,
        '& > *':{
            textDecoration:'none',
            color:'#000',
            cursor:'pointer',
            fontWeight:900
        }
    }
}));
const Article = ({ item }) => {
    const classes = useStyle();
    return (<>
        <Card className={classes.component}>
            <CardContent className={classes.container}>
                <Grid container>
                    <Grid item lg={5} md={5} sm={5} x={12}>
                        <img src={item.url} alt="image1" className={classes.image} />
                    </Grid>
                    <Grid item lg={7} md={7} sm={7} x={12} className={classes.rightContainer}>
                        <Typography className={classes.title}>{item.title}</Typography>
                        <Typography className={classes.author}><b>short</b> by {item.author}/{new Date(item.timestamp).toDateString()}</Typography>
                        <Typography className={classes.description}>{item.description}</Typography>
                        <Typography className={classes.publisher}>read more at <a href={item.link} target='_blank' rel='noopener noreferrer'>{item.publisher}</a></Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    </>);
};
export { Article };