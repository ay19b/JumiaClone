import { makeStyles} from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
    sideBar:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        backgroundColor:'white',
        padding:'2%',
    },
    active:{
        transform: 'translate(0%)',
    },
    sidebarItem :{
        display:'flex',
        cursor: 'pointer',
        
        '&:hover':{
            color: theme.palette.primary.main,
        }
    },
    name:{
        marginLeft: '5%',
        fontWeight:'bold',
    }

}));

export default useStyles