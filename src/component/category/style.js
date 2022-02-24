import { makeStyles} from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
    product:{
        height:'15rem',
        margin: '3% 2% 1% 0%',
        '&:hover':{
            transform: 'scale(1.03,1.03)',
            boxShadow: '0px 0px 9px 0px #ccc',
            outline: 'none',
        },
       
    },
    headProd:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
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
        
    },
    prodName:{
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        marginLeft:'4%',
    },
    price:{
        marginLeft:'4%',
    },

}));

export default useStyles