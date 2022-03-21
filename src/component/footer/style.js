import { makeStyles} from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
    footer :{
        backgroundColor: 'black',
        marginTop: '10%',
        padding: '2% 0%',
    },
    imgLogo:{
        width: '100%',
        height: '100%',
    },
    ftCenter:{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flexDirection: 'column',
    },
    input:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    btn:{
        marginLeft: '1%',
        color:'white ',
        borderColor:"white",
        [theme.breakpoints.down("xs")]: {
            display: 'none',
        },
    },
    lastGrid:{
        [theme.breakpoints.down("sm")]: {
            display: 'none',
        },
    },
    img:{
        height:'100%',
        width:'100%'
    },
    textNI:{
        textAlign: 'left',
        marginLeft: '3%',
    },
    text:{
        textAlign: 'left',
        color:"#aaa"
    },

}));

export default useStyles