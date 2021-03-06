import { makeStyles} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    pillars:{
        margin:'3% auto',

    },
    pillItem :{
        display: 'flex',
        height: '4rem',
        alignItems: 'center',
        backgroundColor: 'white',
        border: '4px solid whitesmoke',
        padding: '1%',
        [theme.breakpoints.down("xs")]: {
			display:'none',
		},
    },
    item:{
        marginLeft:'3%',
    },
    img:{
        height:'100%'
    },
}));

export default useStyles