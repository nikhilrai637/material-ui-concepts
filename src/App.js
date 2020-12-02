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


function CheckBoxExample () {
      const  [checked , setChecked ] = React.useState(true)
  return(
    <div>
      <FormControlLabel
      control={
        <CheckBox
        color="primary"
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
    <div className="App">
      <header className="App-header">
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
  );
}

export default App;
