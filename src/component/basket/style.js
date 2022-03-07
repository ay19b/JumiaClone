import { makeStyles} from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
	basket:{
		margin: '5% 0',
		[theme.breakpoints.down("xs")]: {
			margin: '12% 0',
		},
	},
	
    headerCart:{
		textAlign:'center',
		padding:'3%',
		backgroundRepeat: "no-repeat",
        backgroundPosition: 'center',
        backgroundSize:'cover',
		backgroundImage:"url(../images/headerCart.jpg)"
	},
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
	PgEmpty:{
		height:'100vh',
	},
	emptyBasket:{
		display:'flex',
		alignItems:'center',
		justifyContent: 'center',
		flexDirection:'column',
		backgroundColor:'white',
		padding:"8% 0%",
		margin: '6% 0',
		textAlign: 'center',
	},
	iconEmpty:{
		color:theme.palette.primary.main,
	},
	infCart:{
		backgroundColor:"white",
		padding: '1% 0 4% 0',
	},
	headerTable:{
		marginBottom: '0%',
		marginTop: '8%',
		[theme.breakpoints.down("xs")]: {
         display:'none',
        },
	},
	listBasket:{
		backgroundColor:"white",
		borderRadius:'8px',
		padding:'1%',
		height:'100%',
		animationName: '$scrollList',
        animationDuration: '.4s',
		marginBottom: '3%',
		
	},
	listSummery:{
		backgroundColor:"white",
		borderRadius:'8px',
		padding:'1%',
		height:'100%',
		position:'sticky',
		top:'12%',
	},
	products:{
		marginBottom: '0%',
		marginTop: '0%',
	},
	prod:{
		position: 'relative',
		[theme.breakpoints.down("xs")]: {
         flexDirection: 'column',
        },
	},
    img:{
        width:"100%",
        hight:"100%",
		[theme.breakpoints.down("xs")]: {
			width:"50%",
            hight:"12rem",
		},  
    },
	item:{
		display:'flex',
		color: 'black',
		[theme.breakpoints.down("xs")]: {
         flexDirection: 'column',
         textAlign:'center',
		 marginBottom: '1%',
		 display:'block',
        },
	}, 
	itemEnd:{
		display:'flex',
		alignItems:'center',
		color: 'black',
		justifyContent: 'space-between',
		[theme.breakpoints.down("xs")]: {
         flexDirection: 'column',
         textAlign:'center',
		 marginBottom: '1%',
        },
	}, 
	header:{
		marginLeft: '7%',
	},
	gridQnt:{
		display: 'flex',
        justifyContent: 'end',
		[theme.breakpoints.down("xs")]: {
			justifyContent: 'center',
		},
	},
	quantity:{
		display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
        width: '80%',
		[theme.breakpoints.down("xs")]: {
          width: '30%',
		  justifyContent: 'center',
        },
	},
	itemQuant:{
		padding: '0% 12%',
	},
	calculTotal:{
		marginTop: '-7%',
		[theme.breakpoints.down("sm")]: {
         marginTop: '0%',
		 justifyContent: 'center',
         display: 'flex',
        },
	},
	card:{
		backgroundColor: '#f9f9f9 !important',
        padding: '3% 5% 3% 5%',
        display: 'block',
		[theme.breakpoints.down("sm")]: {
          width: '23rem',
        },
		[theme.breakpoints.down("xs")]: {
          width: '100%',
        },
	},
	subtotal:{
		marginBottom: '5%',
		marginTop: '5%',
		display: 'flex',
        justifyContent: 'space-between',
		color:'#4d4d4d',
		alignItems: 'center',
	},
    btn:{
		color: 'white',
        width: '100%',
		marginTop: '4%',
		marginBottom: '3%',
	},
	closeIcon:{
		marginLeft:'6%',
		cursor:'pointer',
		color: '#ababab',
		[theme.breakpoints.down("xs")]: {
         position: 'absolute',
         top: '1%',
         right: '1%',
        },
	},
    emptyCart:{
		backgroundColor:'white',
	},
	shopingCart:{
		fontSize:'10rem',
	},
	divdr:{
		width:'100%',
		margin: '1% auto',
	},
}));
export default useStyles