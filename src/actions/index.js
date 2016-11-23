// This file contains all action creators.

import axios from 'axios';          // Import the axios library, the package installed by "npm install --save axios"

const API_KEY = 'c69fc57e899065e42c1a1f00b1495932';      // API key for the openweathermap weather service.
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${API_KEY}`;     // Uses es6 template string syntax.
export const FETCH_WEATHER = 'FETCH_WEATHER';

// Action creators always have to return an action,
//   a plain javascrip object that always, always, always has to have a type attribute.
export default function fetchWeather(city, country) {
   const url = `${ROOT_URL}&q=${city},${country}`;       // Construct the request url to the openweathermap service.
   const request = axios.get(url);                       // Make an ajax request by using the axio library. What is returned from the get() methos is a PROMISE.
   console.log("fetchWeather action creator called! city=", city, " country=", country);
   //console.log('Request;', request);

   return {
         type: FETCH_WEATHER,
         payload: request
      };
}

// Fetch weather data from OpenWeatherMap. Look at openweathermap.org/forecast5
// The api look like: http://api.openweathermap.org/data/2.5/forecast?q=Oslo,no&appid=44db6a862fba0b067b1930da0d769e98&units=metric

// IMPORTANT.
// When we perform the 'axios.get(url)' call, what is returned is a promise.
// The redux-promise middleware will inspect all the actions flowing thru the application.
// IF the action contains a payload that has a promise, redux-middleware will STOP the action.
// redux-middleware will wait until the promise is resolved by an actual response that contains data.
// redux-middleware will then dispatch a NEW action with the SAME type, that contains the actual DATA as its payload, and
// this new action will then be sent to all the reducers in the application.
