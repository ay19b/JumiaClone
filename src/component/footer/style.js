import { makeStyles} from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
    footer :{
        backgroundColor: 'black',
        height:'10rem',
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
    },
    lastGrid:{
        [theme.breakpoints.down("sm")]: {
            display: 'none',
        },
    },
    img:{
        height:'40%',
        width:'40%'
    },
    text:{
        textAlign: 'left',
    },

}));

export default useStyles