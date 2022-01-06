import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const AppLabel = styled.span`
  color: black;
  font-size: 1.8rem;
  font-weight: bold;
  margin-top:0.5rem;
`;
const TodayDate = styled.p`
  margin: 1.5rem;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 1.5rem;
`;
const WeatherCondition = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 3rem auto;
`;
const Condition = styled.span`
  color: black;
  font-size: 1.4rem;
  margin: 2rem auto;
  font-family: "Montserrat", sans-serif;
  & span {
    font-size: 2.5rem;
  }
`;
const WeatherLogo = styled.img`
  width: 10rem;
  height: 10rem;
  margin: .5rem auto;
`;

const Location = styled.span`
  font-size: 2.8rem;
  font-weight: bold;
`;
const WeatherInfoLabel = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
  margin: 2rem 2.5rem 1rem;
  text-align: start;
  width: 90%;
`;
const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
const InfoContainer = styled.div`
  display: flex;
  margin: .5rem 1.0rem;
  justify-content: space-evenly;
  align-items: center;
`;

const InfoIcon = styled.img`
  width: 3.5rem;
  height: 3.5rem;
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  margin: 1.5rem;
`;
const WeatherInfoComponent = (props) => {
  const { name, value, img } = props;
  return (
    <InfoContainer>
      <InfoIcon src={img} />
      <InfoLabel>
        {value}
        <span>{name}</span>
      </InfoLabel>
    </InfoContainer>
  );
};
function WeatherInfo(props) {
  const { weather } = props;
  const isDay = weather?.weather[0].icon?.includes("d");
  const icons = weather?.weather[0].icon;
  const url = `http://openweathermap.org/img/wn/${icons}@2x.png`;
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();
  let currentDate = mm + "/" + dd + "/" + yyyy;

  return (
    <>
      <AppLabel>Weather Information for Today </AppLabel>
      <TodayDate>{currentDate}</TodayDate>
      <WeatherCondition>
        <Condition>
          <span>{`${Math.floor(weather?.main?.temp - 273)}`} &#8451;</span>{" "}
          {` | ${weather?.weather[0].description}`}
        </Condition>
        <WeatherLogo src={url} />
      </WeatherCondition>
      <Location>{`${weather?.name},${weather?.sys?.country}`}</Location>
      <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
      <WeatherInfoContainer>
        <WeatherInfoComponent
          name={isDay ? "Sunset" : "Sunrise"}
          value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}
          img="/icons/temp.svg"
        />
        <WeatherInfoComponent
          name="Humidity"
          value={weather?.main?.humidity}
          img="/icons/humidity.svg"
        />
        <WeatherInfoComponent
          name="Wind"
          value={weather?.wind?.speed}
          img="/icons/wind.svg"
        />
        <WeatherInfoComponent
          name="Pressure"
          value={weather?.main?.pressure}
          img="/icons/pressure.svg"
        />
      </WeatherInfoContainer>
      <Button variant="contained" color="primary" 
      href="/"
      >
        Back
      </Button>
      {weather.cod===404?(<p>City not found</p>):null}
    </>
  );
}

export default WeatherInfo;
