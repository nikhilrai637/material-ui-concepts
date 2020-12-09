import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    buttonStyle: {
        color: props => (props.cool ? "blue" : "red")
    }
});
 
export default function Hook (props) {
    const classes = useStyles(props);
    return <Button className = {classes.buttonStyle}>Click Me</Button>
}
