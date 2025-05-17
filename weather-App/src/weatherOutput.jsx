import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import "./weatherOut.css";
export default function WeatherInfo({info}){
    const init_img="https://media.istockphoto.com/id/645173476/photo/cirrocumulus-clouds-cloudscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=o1aP67eZY6Tf-PetH0j9jCg7-SSRPUU4IHgvESIS5Yw=";
    const cold_img ="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const hot_img ="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const rain_img="https://images.unsplash.com/photo-1613739118925-cde1e8f5d65b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    return(
        <div className="mainPage">
            <Card sx={{ maxWidth: 345 ,}} className="mainCards">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={info.humidity>80 ? rain_img :(info.temp > 15 ? hot_img:cold_img)}
          alt="broken clouds"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city} <hr />
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        <p>Temperature:{info.temp}&deg;C</p>
        <p>Max Temp:{info.max_temp}&deg;C</p>
        <p>Min Temp:{info.min_temp}&deg;C</p>
        <p>Humidity:{info.humidity}&deg;C</p>
        <p>The weather is like <b>{info.description}</b> and feels like <b>{info.feels_like}</b></p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
      </CardActions>
    </Card>

        </div>
    )
}