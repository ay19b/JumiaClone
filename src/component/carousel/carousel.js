import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import Banner from "../bannerData";
import useStyles from './style';


function Carousel(){
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    const classes = useStyles();
    
    return(
        <AutoplaySlider play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={2000} >
           {Banner.map((item)=>{
               const {id,img}=item;
               return(
                   <div key={id} className={classes.listImg}>
                       <img src={img} className={classes.listImg} />
                   </div>
                   
               )
           })}
        </AutoplaySlider>
    )
}
export default Carousel;