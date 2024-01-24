import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const mainContext = createContext()


const MainProvider = ({children}) => {

    const apiKey = 'fb25968545916abfa0a7401ce5b36714'

    const [weather, setWeather] = useState([])

    const [city, setCity] = useState("Globe")

    useEffect(() => {
        const apiFetch = async() => {
            const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=de`)
            setWeather(resp.data)
        }
        apiFetch()
    }, [city])


  return (
    <>
        <mainContext.Provider value={{weather, setWeather, city, setCity}}>
            {children}
        </mainContext.Provider>
    </>
  )
}
 
export default MainProvider;