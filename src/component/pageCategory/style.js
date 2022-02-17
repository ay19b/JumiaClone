import { makeStyles} from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
    linkPages:{
		display:'flex',
		padding: '1% 0 1% 0',
	},
    link:{
        textDecoration: 'none',
        color: '#352f2f',
        marginRight: '1%',
        fontWeight: 'bold',
    },
    product:{
        height: '16rem',
        margin: '3% auto',
        textAlign: 'center',
        '&:hover':{
            transform: 'scale(1.1,1.1)',
            boxShadow: '0px 0px 9px 0px #ccc',
            outline: 'none',
        }
    },
    headProd:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2%',
        backgroundColor:theme.palette.primary.main,
    },
    headProdRight:{
        display: 'flex',
        alignItems: 'center',
    },
    icon:{
        display: 'flex',
    },
    img:{
        width: '100%',
        height: '70%',
        [theme.breakpoints.down("xs")]: {
			width: '75%',
		},
    },

}));

export default useStyles