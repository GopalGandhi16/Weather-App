import WeatherInfo from "./weatherOutput";
import Landing from "./mainPage";
import { useState } from "react";
import "./weather.css";

export default function Weather(){
    let [weatherinfo,setWeatherinfo]=useState(  {
                city:"Delhi",
                temp:32,
                min_temp:27.6,
                max_temp:39.7,
                humidity:30,
                feels_like:31,
                description:"broken clouds"
    })
    let updateInfo=(result)=>{
        setWeatherinfo(result);
    }
    return(
        <div className="entire">
        <div className="main">
            <div className="input"> <Landing updateInfo={updateInfo}/>
            <WeatherInfo info={weatherinfo}/></div> 
        </div>
       <div class="marquee-container">
  <p class="marquee-text">Made with  <span style={{fontSize:25,color:"red"}}>♥</span> by Gopal Gandhi</p>
</div>
        </div>  
    )
}