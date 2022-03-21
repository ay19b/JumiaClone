import { makeStyles} from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
    detail:{
        margin: '3% auto',
    },
    linkPages:{
		display:'flex',
		padding: '1% 0 1% 0',
	},
    linkHome:{
		marginRight: '1%',
		cursor:'pointer',
		fontWeight: 'inherit',
		color:'#a0a0a0',
	},
    link:{
        textDecoration: 'none',
        color: '#352f2f',
        textDecoration: 'none',
        color: '#352f2f',
        marginRight: '1%',
        fontWeight: 'bold',
    },
    detailCont:{
        backgroundColor:"white",
        alignItems: 'center',
        marginTop: '2%',
        marginBottom: '6%',
        [theme.breakpoints.down("sm")]:{
            marginTop: '3rem',
            marginBottom: '5rem',
        },
        [theme.breakpoints.down("xs")]: {
			display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
           
		},
    },
    infDtl:{
        [theme.breakpoints.down("xs")]: {
			maxWidth: '100%',
		},
        
    },
    mark:{
        display:"flex",
        [theme.breakpoints.down("xs")]: {
			justifyContent: 'center',
		},
    },
    img:{
        width: '90%',
        [theme.breakpoints.down("sm")]:{
            width: '75%',
        },
        [theme.breakpoints.down("xs")]:{
            width: '100%',
        },
    },
    btnAdd:{
        backgroundColor:theme.palette.primary.main,
        color:"white",
        width:"100%",
        marginTop:'10%',
        fontSize:'1rem',
        '&:hover':{
            backgroundColor:'orange'
        }
    },

}));

export default useStyles