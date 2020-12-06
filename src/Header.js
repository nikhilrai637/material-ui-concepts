import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';
import {makeStyles} from '@material-ui/styles'

const useStyle = makeStyles({
    typographyStyles  : {
        flex: 1,
    }
});
const Header =  ( ) => {
    const styles = useStyle();
    return( 
        <AppBar position = 'static'>
            <Toolbar>
                 <Typography  className = {styles.typographyStyles}>
                     This is our header
                 </Typography>
                 <AcUnitRoundedIcon />
            </Toolbar>
        </AppBar>
    )
}

export default Header


