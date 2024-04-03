import React, { useEffect } from 'react'
import { usestatecontext } from '../context'
// image 
import clear from '../assets/clear.jpg'
import fog from '../assets/fog.jpg'
import cloud from '../assets/cloud.jpg'
import rainy from '../assets/rainy.jpg'
import snow  from '../assets/snow.jpg'
import thunder from '../assets/thunder.jpg'
import sunny  from '../assets/sunny.jpg'

const backgroundLayout = () => {

  const {weather} = usestatecontext()
  const [image, setimage] = usestate(clear)

useEffect(() => {
  if(weather.conditions){
    let imagestring = weather.conditions
    if(imagestring.tolowercase().include('clear')){
      setimage(clear)
    } else if (imagestring.tolowercase().include('cloud')){
      setimage(cloud)
    } else if (imagestring.tolowercase().include('rain') ||imagestring.tolowercase().includes ('shower')){
      setimage(rainy)
  } else if (imagestring.tolowercase().include('snow')){
    setimage(snow)
  } else if (imagestring.tolowercase().include('fog')){
    setimage(fog)
  } else if (imagestring.tolowercase().include('thunder') ||imagestring.tolowercase().includes ('thunder')){
    setimage(thunder)
  } else if (imagestring.tolowercase().include('sunny')){
    setimage(sunny)
  
  
  
}
  }
  }, [weather])


  return (
    <img src="{image}" alt="weather-image" className='h-screen w-full fixed left-0 top-0 -z-[10]'/>

  )
}

export default backgroundLayout