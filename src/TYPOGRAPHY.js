import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    typographyStyles :{
        color: 'red'
    }
})

function TYPOGRAPHY() {
    const classes = useStyles();
    
    return (
        
        <div>
            <Typography
             color = 'primary'
             gutterBottom = { true }
             >
                What can I do for you?
            </Typography>
        </div>
    )
}

export default TYPOGRAPHY
