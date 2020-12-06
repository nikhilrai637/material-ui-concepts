 
import React from 'react'
import './App.css';
import { Button } from '@material-ui/core';
import { ThemeProvider} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import theme from './Theme'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
   helloThereStyle :{
     fontStyle : 'oblique',
     color : "red",
     fontSize : "40px"
   },

   buttonStyles :{
     color : "green",
     variant : "inherit"
   }
});
 


 
   
  
function App() {
  const classes = useStyles();
  return (
    


    <ThemeProvider theme={theme} >
    <div className="App">
      <Typography className = {classes.helloThereStyle}>
        Hi There!
      </Typography>
     <Button   className = {classes.buttonStyles}  variant = "outlined" color ="primary">Click Me!!</Button>
    </div>
    </ThemeProvider>
 
  );
}

export default App;
