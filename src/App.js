import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={()=> alert("got Clicked")}
         
          startIcon = {<SaveIcon/>}

         variant = "contained" 
         color="secondary"
          >
           Click Me!
           </Button>
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
