import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonGroup          variant = "contained"  color="primary">
        <Button onClick={()=> alert("got Clicked")}
         
          startIcon = {<SaveIcon/>}


          >
           Click Me!
           </Button>

           <Button onClick={()=> alert("got Clicked")}
         
         startIcon = {<DeleteIcon/>}

       
       
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
