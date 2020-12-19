import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import {useState} from 'react'

const [darkMode , setDarkMode] = useState(false)
  const theme = createMuiTheme({
  palette: {
    type:'dark',
  },
});

export default theme;