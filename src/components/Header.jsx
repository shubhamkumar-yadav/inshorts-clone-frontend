import React from 'react';
import { AppBar, Toolbar,makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
const useStyle = makeStyles({
    header:{
        background:'#fff',
        height:70
    },
    logo:{
        height:55,
        margin:'auto',
        paddingRight:70
    },
    menu:{
        color:'#000'
    }
});
const Header = () => {
    const classes = useStyle();
    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
    return (<>
        <AppBar className={classes.header}>
            <Toolbar>
                <MenuIcon className={classes.menu}/>
                <img src={url} alt="logo" className={classes.logo} />
            </Toolbar>
        </AppBar>
    </>);
};
export { Header };