import { makeStyles} from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
    product:{
        height: '16rem',
        margin: '3% auto',
        textAlign: 'center',
        '&:hover':{
            transform: 'scale(1.03,1.03)',
            boxShadow: '0px 0px 9px 0px #ccc',
            outline: 'none',
        }
    },
    headProd:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1%',
        borderRadius: '5px',
        backgroundColor:theme.palette.primary.blue,
        [theme.breakpoints.down("xs")]: {
			marginBottom:'4%',
		},
    },
    headProdRight:{
        display: 'flex',
        alignItems: 'center',
        color: 'white',
    },
    icon:{
        display: 'flex',
    },
    img:{
        width: '100%',
        height: '70%',
        [theme.breakpoints.down("xs")]: {
			width: '60%',
		},
    },
    prodName:{
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
    },

}));

export default useStyles