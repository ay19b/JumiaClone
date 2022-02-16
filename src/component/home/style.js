import { makeStyles} from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
   
    side:{
        [theme.breakpoints.down("sm")]: {
            display:'none'
        },
    },

}));

export default useStyles