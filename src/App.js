import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import CityComponent from "./Components/CityComponent";
import WeatherInfo from "./Components/WeatherInfo";

const API_KEY = "69a53a00f3812a83ab1b6fc65de70323";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 .3rem .6rem 0 #555;
  padding: 0.2rem 0.1rem;
  border-radius: 0.4rem;
  width: 38rem;
  background: #ffffff;
  font-family: "Montserrat", sans-serif;
`;

function App() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();
  const [error,setError] = useState();
  

  const fetchWeatherDetails = async (event) => {
    event.preventDefault();
    await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}` 
    ).then((response)=> {
      setWeather(response.data);
    }).catch((error)=>{
      setError(error.response.data.message)
    })
  };
  
  return (
    <Container>
      {weather ? (
        <WeatherInfo weather={weather} 
        />
        
      ) : (
        <CityComponent
          setCity={setCity}
          fetchWeatherDetails={fetchWeatherDetails}
          error = {error}
        />
      )}
    </Container>
  );
}

export default App;
