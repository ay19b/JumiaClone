import { makeStyles} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    header:{
        marginBottom: '2%',
    },
    headerFirst:{
        width: '100%',
    },
     img:{
        width: '100%',
    },
    headerSecond:{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '4px',
        margin: 'auto',
    },
    container:{
        display: 'flex',
        justifyContent: 'space-between',
    },
    headerLeft:{
        display: 'flex',
        alignItems: 'center',
        color: theme.palette.primary.main,
        justifyContent:"flex-start",
    },
    headerRight:{
        display: 'flex',
        justifyContent:"flex-end",
        "&>:nth-child(1)": {
            marginRight:'3%',
        },
    },
    lang:{
        fontSize: '0.7rem',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
    },
    headerLast:{
        display: 'flex',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1%', 
    },
    
    navActive:{
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        position:'fixed',
        backgroundColor:'white',
        width: '98%',
        zIndex:'100',
        top:'0%',
        padding:'1%',
        boxShadow: '0px 8px 6px -5px rgba(0,0,0,0.65)',
        animationName: '$scrollNav',
        animationDuration: '.4s',
        [theme.breakpoints.down("sm")]: {
          padding:'2%',
        },
      },
      '@keyframes scrollNav':{
          '0%' :{
            opacity: 0,
            transform: 'translateY(-60px)',
          },
          '100%' :{
            opacity: 1,
            transform: 'translateY(0)',
          },
      },
    logoPart:{
        display: 'flex',
        alignItems: 'center',
        justifyContent:"flex-start",
    },
    menu:{
        display:'block', 
        cursor:'pointer',
    },
    menuDis:{
        display:'none',
        cursor:'pointer',
        [theme.breakpoints.down("sm")]: {
            display:'block', 
        },
    },
    logo:{
        flex: '0.2',
        justifyContent: 'flex-start',
    },
    searchPart:{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    searchBar:{
        border: '1px solid #959292',
        borderRadius: '5px',
        padding: '1px',
    },
    searchIcon:{
        fontSize: '130%',
        color: '#898686',
    },
    btnSearch:{
        backgroundColor:theme.palette.primary.main,
        color:"white",
        marginLeft: '2%',
        '&:hover':{
            backgroundColor:'orange'
        },
        [theme.breakpoints.down("sm")]: {
            display:'none',
        },
    },
    imgLogo:{
        width:'9rem',
        [theme.breakpoints.down("sm")]: {
            width:'7.567rem', 
        },
        [theme.breakpoints.down("xs")]: {
            width:'100%', 
        },
    },
    searchInf:{
        padding: '1%',
        display: 'flex',
        flex: '0.3',
    },
    info:{
        display: 'flex',
        justifyContent:"flex-end",
        "&>:nth-child(1)": {
            [theme.breakpoints.down("sm")]: {
                display:'none',
            },
        },
        "&>:nth-child(2)": {
            [theme.breakpoints.down("sm")]: {
                display:'none',
            },
        },
    },
    infoItem:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: '5%',
        fontWeight: 'bold',
        color: 'black',
        cursor: 'pointer',
        '&:hover':{
            color: theme.palette.primary.main,
        }
    },
    link:{
        display: 'flex',
        alignItems: 'center',
        '&:hover':{
            color: theme.palette.primary.main,
        }
    },
    basketItem:{
        [theme.breakpoints.down("sm")]: {
            display:'none',
        },
    },
    iconNav:{
        marginRight: '6%',
        fontSize: '150%',
        
    },
    sideBar:{
        width: '12rem',
        backgroundColor: 'white',
        padding: '1%',
        position: 'absolute',
        left: '3.6%',
        zIndex: '100',
        borderRadius: '8px',
        transform: 'translate(-200%)',
        transition:'transform 0.4s',
    },
    active:{
        transform: 'translate(0%)',
    },
    sidebarItem :{
        display:'flex',
        cursor: 'pointer',
        marginBottom:'4%',
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