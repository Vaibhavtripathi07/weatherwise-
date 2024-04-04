import { usecontext, createcontext, useState, useEffect} from "react"; 
import axios from "axios"

const statecontext = createcontext()

export const statecontextprovider = ({children}) => {
  const [weather, setweather] = usestate({})
  const [values, setvalues] = usestate ([])
  const [place, setplace] = usestate('jaipur')
  const [thislocation, setlocation] = usestate('')


  // fetch api
 const fetchweather = async() => {
 const option = {
        method: 'get', 
        URL: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
        params: {
            aggregatehours:'24',
            location: place,
            contentType:'json',
            unitGroup: 'metric',
            shortcolumnnames:0,
            
        },

        Headers:{
            'x-repidAPI-key': import.meta.envVITE_API_KEY,
            'x-rapidAPI-host': 'visual-crossing-weather.p.rapidapi.com'
        }
    }

    try{
        const response = await axios. request(options)
        console.log(response.data)
        const thisdata = object.value(response.data.locations)[0]
        setlocation(thisdata.address)
        setvalues(thisdata.values)
        setweather(thisdata.values[0])

    }catch(e) {
        console.error(e);
        // if the api throws error.
        alert('this place does not exist')

    }
 }

 useEffect(() =>{
    fetchweather()
 },[place])

 useEffect(() =>{
    console.log(v)
 },[values])

return(
    <statecontext.provider value={{
        weather,
        setplace,
        values,
        thislocation,
        place
        
    }}>
        {children}
    </statecontext.provider>
)

}

export const usestatecontext = () => usecontext(statecontext)