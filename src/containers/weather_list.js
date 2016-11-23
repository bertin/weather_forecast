import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

   renderWeather(cityData) {

      const temps = cityData.list.map( weather => weather.main.temp );
      const pressures = cityData.list.map( weather => weather.main.pressure );
      const humidities = cityData.list.map( weather => weather.main.humidity );
      const wind = cityData.list.map ( weather => weather.wind.speed );
      const { lat, lon } = cityData.city.coord;       // destructuring syntax from es6.

      return (
         <tr key={cityData.city.id}>
            <td><GoogleMap lon={lon} lat={lat} /></td>
            <td><Chart data={temps} color="green" units="ºC" /></td>
            <td><Chart data={pressures} color="blue" units="mbar" /></td>
            <td><Chart data={humidities} color="orange" units="%" /></td>
            <td><Chart data={wind} color="black" units="m/s" /></td>
         </tr>
      );
   }

   render() {
      return (
         <table className="table table-hover">
            <thead>
               <tr>
                  <th>By</th>
                  <th>Temperatur (ºC)</th>
                  <th>Trykk (mbar)</th>
                  <th>Fuktighet (%)</th>
                  <th>Vind (m/s)</th>
               </tr>
            </thead>
            <tbody>
               { this.props.weather.map(this.renderWeather) }
            </tbody>
         </table>
      );
   }

}

function mapStateToProps( {weather} ) {
   return { weather };     // { weather } === { weather:weather }
}

export default connect(mapStateToProps)(WeatherList);
