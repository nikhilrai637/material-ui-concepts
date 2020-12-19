import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import classNames from 'classnames'

const useStyles = makeStyles(theme => ({

buttonColor: props => {
    return{
        color : props.cool ? 'blue' : 'red',
 
        [theme.breakpoints.up('md')]:{
          
            color : 'blue'
          },
         }
},
buttonBackground : {
    backgroundColor : 'pink'
}
   
}));
 
export default function Hook (props) {
    const classes = useStyles(props);
    return <Button className = {classNames( classes.buttonColor , classes.buttonBackground) }>Click Me</Button>
}
