import { makeStyles} from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
    headProd:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        color:'white',
        borderRadius: '5px',
        backgroundColor:"#FF550C",
        marginBottom:'2%',
        [theme.breakpoints.down("xs")]: {
			marginBottom:'4%',
		},
    },
    banner:{
        marginBottom:'2%',
        backgroundColor:'white',
    },
    img:{
        width: '100%',
        '&:hover':{
            transform: 'scale(1.008,1.008)',
        },
    },

}));

export default useStyles