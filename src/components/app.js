import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h2 className="logo">WeatherMan</h2>
        </div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
