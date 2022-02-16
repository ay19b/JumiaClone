import { makeStyles} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    pillars:{
        margin:'3% auto',
    },
    pillItem :{
        display: 'flex',
        height: '3rem',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    img:{
        height:'100%'
    },
}));

export default useStyles