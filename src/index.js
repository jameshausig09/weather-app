import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Search from "./pages/Search.js";
import Overview from "./pages/Overview.js";
import Layout from "./Layout.js";
import fetchData from "./utils/fetchData.js";
import { apiPlugin, storyblokInit } from "@storyblok/react";
import GetStoryBlokContent from "./utils/GetStoryBlokContent.js";
import Teaser from "./components/Teaser.js";
import Page from "./components/Page.js";

storyblokInit({
  accessToken: "3brAcEv7vX2YdusLsBQyOAtt",
  use: [apiPlugin],
  components: { teaser: Teaser, page: Page },
});

const App = () => {
  const [cityData, setCityData] = useState({});
  const [cities, setCities] = useState([]);
  const storyblokContent = GetStoryBlokContent();

  useEffect(() => {
    let foundCities =
      storyblokContent &&
      storyblokContent.props?.blok?.body?.map((item) => {
        return { headline: item.headline, description: item.description };
      });

    if (foundCities && foundCities.length > 0) {
      // Only update if there's a change
      if (JSON.stringify(cities) !== JSON.stringify(foundCities)) {
        setCities(foundCities);
      }
    }
  }, [storyblokContent, cities]);

  useEffect(() => {
    const fetchDataForAllCities = async () => {
      const responses = await Promise.all(
        cities.map((city) => {
          return fetchData(city.headline.replace(/\s+/g, "+"));
        })
      );
      const newData = cities.reduce((acc, city, index) => {
        acc[city.headline] = responses[index];
        return acc;
      }, {});

      // Only update if there's a change
      if (JSON.stringify(cityData) !== JSON.stringify(newData)) {
        setCityData(newData);
      }
    };
    if (cities.length > 0) {
      fetchDataForAllCities();
    }
  }, [cities, cityData]);
  if (cities.length === 0) return <>Nothing.</>; // Show "Nothing" if there are no cities
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home cities={cities} cityData={cityData} />} />
          <Route path="/search" element={<Search cities={cities} />} />
          <Route
            path="/overview"
            element={<Overview cities={cities} cityData={cityData} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
