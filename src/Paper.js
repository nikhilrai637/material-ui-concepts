import React from 'react'

import {Paper , Typography} from '@material-ui/core'

function PaperComp() {
    return (
        <div>
            <Paper elevation = "0" square>
                <Typography>
                    Hi There this wrapped in Paper
                </Typography>
            </Paper>
        </div>
    )
}

export default PaperComp
