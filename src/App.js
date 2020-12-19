 
import React ,{useState} from 'react'
import './App.css';
import { Button } from '@material-ui/core';
import { ThemeProvider , createMuiTheme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import theme from './Theme'
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core'
import Header from './Header'
import Content from './Content';
import CodeButton from './CodeButton'
import Paper from './Paper'
import Switches from './Switch'

import TYPOGRAPHY from './TYPOGRAPHY'
import Switch from '@material-ui/core/Switch';



  
function App() {

  const [darkMode, setdarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });
     



   return (
  //  <div>
  //    <Grid container direction = "column">
  //     <Grid item>
  //     <Header/>
  //     </Grid>

  //     <Grid item container  > 
  //     <Grid xs = {0} sm = {2}/>
  //     <Grid xs = {12} sm = {8}>
  //     <Content />
 
  //     </Grid>
  //     <Grid xs = {0} sm = {2}/>
  //     </Grid>
  //    </Grid>
  //  </div>    

  // <div>
  //  <CodeButton cool = {false}></CodeButton>
  // <TYPOGRAPHY/>
  // <Paper/>
  // </div>
 
  <div>
  <ThemeProvider theme = {theme} >
  <Switch onChange = {() =>  setdarkMode(prevVal => !prevVal) }/>
  <Switches/>
  
  </ThemeProvider>
  </div>

    
 
  );
}

export default App;
