import { useContext, useEffect, useState } from "react";
import { mainContext } from "../context/MainProvider";

const Home = () => {

    const {weather, setWeather} = useContext(mainContext)

    const [data, setData] = useState(null)

    const {city, setCity} = useContext(mainContext)

    useEffect(() => {
        if (weather) {
            setData(weather)
        }
    }, [weather])

    return (
        <>
        {data 
        ? (
            <section>
                <div>
                    <button onClick={() => setCity("Hamburg")}>Hamburg</button>
                    <button onClick={() => setCity("Berlin")}>Berlin</button>
                    <button onClick={() => setCity("Köln")}>Köln</button>
                    <button onClick={() => setCity("Australien")}>Australien</button>
                </div>
                <div>
                    <h2>{data.name}</h2>
                    <h3>{data?.weather?.[0].description}</h3>
                    <img src={`http://openweathermap.org/img/wn/${data?.weather?.[0].icon}@2x.png`}/>
                    <h3>Aktuell: {data?.main?.temp} °C</h3>
                    <h3>Windgeschwindigkeit: {data?.wind?.speed} km/h</h3>
                </div>
            </section>
        )
        : (<p>Loading...</p>)
        }
        </>
    )
}

export default Home;