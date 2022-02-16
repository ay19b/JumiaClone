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
        marginTop: '1%',
    },
    mark:{
        display:"flex",
    },
    img:{
        width: '100%',
    },
    btnAdd:{
        backgroundColor:theme.palette.primary.main,
        color:"white",
        width:"100%",
        marginTop:'10%',
        '&:hover':{
            backgroundColor:'orange'
        }
    }

}));

export default useStyles