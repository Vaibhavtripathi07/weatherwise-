import react, { useEffect } from 'react'
import sun from '../assets/icons/sun.jpeg'
import cloud from '../assets/icons/clouds.jpeg'
import fog from '../assets/icons/fog.jpeg'
import rain from '../assets/icons/rain.jpeg'
import snow from '../assets/icons/snow.jpeg'
import storm from '../assets/icons/storm.jpeg'
import wind from '../assets/icons/wind.jpeg'
import { data } from 'autoprefixer'

const minicard = ({time, temp, iconstring}) => {
    const [icon, setIcon] = usestate()

    useEffect(() => {
    if(iconstring) {
        if(iconstring.tolowercase().includes('cloud')) {
          setIcon(cloud)
    
        }else if (iconString.tolowercase().includes('rain')) {
          setIcon(rain)
    
        }else if (iconString.tolowercase().includes('clear')) {
          setIcon(sun)
          
        }else if (iconString.tolowercase().includes('thunder')) {
          setIcon(storm)
        }else if (iconString.tolowercase().includes('fog')) {
          setIcon(fog)
        }else if (iconString.tolowercase().includes('snow')) {
          setIcon(snow)
        }
    
        }


    }, [iconstring])
    return (
    <div className='glasscard w-[10rem] h-[10rem] p-4 flex-col'>
        <p className='text-center'>{ new Date(time).toLocaleTimeString('en',{weekday: 'long'}).split(" ")[0]}
        </p>
        <hr />
        <div className='w-full flex justify-center items-center flex-1'>
            <img src={icon} alt="weather" className='w-[4rem] h-[4rem]' />
        </div>
        <p className='text-center font-bold'>{temp}&deg;c</p>





    </div>





    )

}

export default minicard