import React, { useState } from 'react'
import {Grid ,Paper, Typography , Button } from '@material-ui/core'

function Switches() {

    
    return (
        <div>
            
            <Paper  style = {{height : "100vh"}}>
               <Grid container direction = "column">
                   <Typography variant = "h1">
                     This is My App!           
                   </Typography>
                   <Button variant = "contained" color = "primary">
                       This is a Button
                   </Button>
                   <Button variant = "contained" color = "secondary">
                       This is another Button
                   </Button>
               </Grid>
            </Paper>

        </div>
    )
}

export default Switches
