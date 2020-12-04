import logo from './logo.svg';
import React from 'react'
import './App.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import CheckBox from '@material-ui/core/CheckBox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import {makeStyles , ThemeProvider , createMuiTheme } from '@material-ui/core/styles';
import {orange ,green , brown,purple} from '@material-ui/core/colors'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/core/Menu'
import IconButton from '@material-ui/core/IconButton'

import 'fontsource-roboto'

const useStyles = makeStyles({

  root : {
    background : 'linear-gradient(45deg , #FE6B8B , #FF8E53)',
    border : 0,
    marginBottom : 15,
    borderRadius : 15,
    color : 'white',
    padding : '5px 20px'
  }

})

const theme = createMuiTheme({

  typography : {
    h2 : {
      fontSize : 36,
      marginBottom:0,
      
    }
  },

  
})


function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Styled Button</Button>
}



function CheckBoxExample () {
      const  [checked , setChecked ] = React.useState(true)
  return(
    <div>
      <FormControlLabel
      control={
        <CheckBox
        color="secondary"
        icon = {<SaveIcon/>}
        checkedIcon = {<DeleteIcon/>}
        checked = {checked}
        onChange={(event) =>setChecked(event.target.checked)}
        inputProps = {{'arie-label' : 'secondary checkbox'}}
  
        /> 
      }

      label = {"Checkbox label "}
      /> 

    </div>
  )

}



function App() {
  return (
    <ThemeProvider theme = {theme}>
      <Container maxWidth = "sm">
    <div className="App">
      <header className="App-header">
        <AppBar>
          <Toolbar>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <Typography variant = "h6">
              MUI THEMING
            </Typography>
            <Button>
              Login
            </Button>
          </Toolbar>
        </AppBar>
        <Typography variant = 'h2'>
          Welcome to MUI
          </Typography>
          <Typography variant = 'body1' component = 'div'>
            Learn how to use Material UI
          </Typography>
        <ButtonStyled/>
        <Grid container spacing={4}  justify = 'center' >
          <Grid item xs = {3} sm = {6}>
            <Paper style = {{height:75 , width:'100%'}}   />
          </Grid>
          <Grid item xs = {3} sm = {6}  >
            <Paper style = {{height:75 , width:'100%'}}   />
          </Grid>
          <Grid item xs = {3} sm = {6} lg = {12}>
            <Paper style = {{height:75 , width:'100%'}}    />
          </Grid>
        </Grid>

        <TextField
        variant = "outlined"
        color ="secondary"
        type = "email"
        label = "The time"
        size = "large"
        placeholder = "type@type.com"
        />
        <CheckBoxExample/>

        <ButtonGroup variant="contained" color="primary">
          <Button onClick={() => alert("got Clicked")}

            startIcon={<SaveIcon />}


          >
            Click Me!
           </Button>

          <Button onClick={() => alert("got Clicked")}

            startIcon={<DeleteIcon />}



          >
            Ignore Me!
          </Button>
        </ButtonGroup>

        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
       
      </header>
    </div>
    </Container>
    </ThemeProvider>
  );
}

export default App;
