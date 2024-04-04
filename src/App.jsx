import { useState } from 'react'
import './App.css'
import search from './assets/icons.png'
import { usestatecontext } from './context'
import {Weathercard, backgroundLayout} from './components/'
import minicard from './components/minicard'

function App() {

  const [input, setinput] = useState('')
  const{weather,thislocation, values, place,setplace} = usestatecontext()
  //console.log(weather)

  const submitcity = () => {
     setplace(input)
     setinput('')
  }
  
   return ( 
    <div className='w-full h-screen text-white px-8'>
     <nav className='w-full p-3 flex justify-between items-center'>
     <h1 className='font-bold tracking-wide text-3*1'>weather app</h1>
     <div className='bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'>
      <img src={search} alt="search" className='w-[1.5rem] h[1.5rem]' />
      <input onKeyUp={(e) => {
        if(e.key === 'enter') {
         // sumit the form 
         submitcity()
        }
      }} type="text" placeholder='search city'  className='focus:outline-none w-full text-[#212121] text-lg' value = {input} onchange= {e => setinput(e.target.value)} />


     </div>
     </nav>
     <backgroundLayout></backgroundLayout>
     <main className='w-full flex-wrap gap-8 py-4 px-[10%] items-center justify-center'>
      <Weathercard
      place={thislocation}
      windspeed={weather.wspd}
      humidity={weather.humidity}
      temperature={weather.temp}
      heatIndex={weather.heatIndex}
      iconString={weather.condition}
      condition={weather.condition}

      />

      <div className='flex justify-center gap-8 flex-wrap w-[60%]'>
        {
          values?.slice(1,7).map(curr =>{
            return(
            <minicard
            key={curr.datetime}
            time={curr.datetime}
            temp={curr.temp}
            iconString={curr.conditions}
            />
            )
          })
        }

      </div>
     </main>
    </div>
  )
}

export default App
