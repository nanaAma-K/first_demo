import React,{useState} from 'react'
import axios from 'axios'
import'./Home.css'
// import pic from './th.jpg'

function Home() {
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [weather, setWeather] = useState(null)

    const handleCity =(event)=>{
            setCity(event.target.value)

    }

    const handleCountry =(event)=>{
        setCountry(event.target.value)

}

const getWeather=()=>{
    if(city && country){
        axios.get(`http://api.weatherstack.com/current?access_key=2bd5662dac19e2f5f35e25570caf5c8f&query=${city},${country}`)
        .then((res)=>{
            console.log(res)
            setWeather(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

}
    return (
        <div className='Home' >
       
               <input type='text'  value={city} placeholder='City' onChange={handleCity}/> <br/>
                <input type='text' placeholder='Country' onChange={handleCountry}/>  <br/>
             
                <button onClick={getWeather}>Search</button>


                {
                    weather &&(
                        <div>
                            <p>Date and Time:{weather.location.localtime}</p>
                            <p>Region:{weather.location.region}</p>
                            <p>TimeZone:{weather.location.timezone_id}</p>
                           <img src= {weather.current.weather_icons} alt='weather icon'/>
                    <p>{ weather.current.weather_descriptions}</p>
                    <p>Temperature: {weather.current.temperature}  &#176;</p>
                    <p>Cloud Cover:{weather.current.cloudcover}</p>
                    <p>Humidity:{weather.current.humidity}</p>
                    <p></p>
                        </div>
                    )

                }
        </div>
    )
}

export default Home
