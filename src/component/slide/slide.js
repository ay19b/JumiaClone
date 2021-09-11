import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import Banner from "../bannerData";
import './slide.css'



function Slide(){
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    
    return(
        <AutoplaySlider play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={2000} >
           {Banner.map((item)=>{
               const {id,img}=item;
               return(
                   <div key={id} className="list-img">
                       <img src={img} className="img-slid" />
                   </div>
                   
               )
           })}
        </AutoplaySlider>
    )
}
export default Slide;