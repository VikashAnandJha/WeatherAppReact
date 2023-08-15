import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [data, setdata] = useState({})
  const [city, setcity] = useState('mumbai')

  const callWeatherAPI = async () => {
    const url = "http://api.weatherapi.com/v1/current.json?key=bb4d98eca3e74d42aba162918231508&q=" + city + "&aqi=no"
    console.log(url)
    let response = await fetch(url)
    let data = await response.json();
    console.log(data)
    setdata(data)
  }

  return (
    <>
      <h1>WeatherApp in react</h1>
      {data.location != undefined && <div className='box'>
        Result for {data.location.name},{data.location.region}: <br></br>
        <img src={data.current.condition.icon} /><br></br>
        Temprature: {data.current.feelslike_c}<br></br>
        <b>{data.current.condition.text}</b>
      </div>
      }

      <input className='input' type='text' onChange={(e) => setcity(e.target.value)} placeholder='Enter City' />
      <button onClick={callWeatherAPI}>Show Weather</button>
    </>
  )
}

export default App
