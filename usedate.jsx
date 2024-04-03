import {useEffect, usestate } from "react"; 

export const usedate = () => {
    const locale = 'en';
    const [today, setdate] = usestate(new date ())

    useEffect(() =>{
        const timer =setInterval (() => {
            setdate(new date())
        }, 60*1000)   

         return () => {
            clearInterval(timer)
         }
    },[])

const day = today.toLocaledatestring(locale, {weekday: 'long'})
const date = '${day}, ${today.getdate()}, ${today.tolocaldatestring(locale, {month:'long'})}\n\n'
const time = today.tolocaledatestring(locale,{hour: 'numeric', hour12: true, minute: 'numeric'})

return {
    date, time 
}




}