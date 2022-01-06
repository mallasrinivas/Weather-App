import React from "react";
import styled from "styled-components";
import SearchIcon from '@material-ui/icons/Search';

const WeatherLogo = styled.img`
  width: 14.5rem;
  height: 14.5rem;
  margin: 4rem auto;
`;
const ChooseCityLabel = styled.span`
  color: black;
  font-size: 1.8rem;
  font-weight: bold;
  margin: 1rem auto;
`;
const SearchBox = styled.form`
  display: flex;
  border: black solid 0.1rem;
  border-radius: .2rem;
  color: black;
  font-size: 1.8rem;
  font-weight: bold;
  margin: 2rem auto;
  & input {
    padding: 1rem;
    font-size: 1.4rem;
    border: none;
    outline: none;
    font-weight: bold;
  }
  & button {
    color: white;
    background: black;
    padding: 1rem;
    font-size: 1.4rem;
    border: none;
    outline: none;
    font-weight: bold;
    cursor: pointer;
    width:5.5rem;
  }
  & img {
    width: 2rem;
    height:2rem;
    cursor: pointer;
    margin-top:0.8rem;
    margin-right:0.5rem;
  }
`;
const AppLabel = styled.span`
  color: black;
  font-size: 1.8rem;
  font-weight: bold;
  margin-top:0.5rem;
`;
const ErrorMessage = styled.h1`
 font-size:1.8rem;
 font-weight:bold;
 color:red;
 margin-bottom:1rem;
 text-align:center;
`
function CityComponent(props) {
  const { setCity, fetchWeatherDetails, error} = props;

  function handleChange(event) {
    const newValue = event.target.value;
    setCity(newValue);
  }
  function handleClick(){
     const input = document.querySelector("#input");
     input.value = "";
  }
  
  return (
    <>
      <AppLabel>Weather App</AppLabel>
      <WeatherLogo src="/icons/perfect-day.svg" />
      <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
      <SearchBox  onSubmit={fetchWeatherDetails}>
        <input  id ="input" type ="text" placeholder="City" 
        onChange={handleChange} />
         <img src="/icons/clear.png" alt="clearIcon" onClick ={handleClick}/>
        <button type={"submit"} >
          <SearchIcon />
        </button>
      </SearchBox>
      <div>{<ErrorMessage>{error}</ErrorMessage>}</div>
    </>
  );
}

export default CityComponent;
