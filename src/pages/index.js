import Head from "next/head";
import ActivityForm from "../components/Form";
import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import List from "../components/List";
import styled from "styled-components";

export default function Home() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState();

  function handleAddActivity(activity) {
    setActivities([...activities, activity]);
  }

  const URL = "https://example-apis.vercel.app/api/weather";

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchWeather();
    return weather;
  }, []);

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather?.isGoodWeather
  );
  function handleDeleteActivity(idToRemove) {
    setActivities(activities.filter((activity) => activity.id !== idToRemove));
  }

  return (
    <>
      <Head>
        <title>Weather App</title>
      </Head>
      <StyledMain>
        <StyledHeading>
          <h2>
            {weather?.condition} {weather?.temperature}°C
          </h2>
        </StyledHeading>
        <ActivityForm onAddActivity={handleAddActivity} />
        <List
          activities={filteredActivities}
          isGoodWeather={weather?.isGoodWeather}
          onDeleteActivity={handleDeleteActivity}
        />
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-top: 50px;
  padding: 0;
`;

const StyledHeading = styled.header`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: #000;
  margin: 0;
  padding: 0;
  height: 50px;
  width: 100%;
  background-color: grey;
  position: fixed;
  top: 0;
  bottom: 100px;
  left: 0;
  right: 0;
  z-index: 1;
  border: 1px solid black;
  opacity: 0.8;

  h2 {
    color: white;
    text-align: center;
    padding: 0;
    margin: 0;
  }
`;
