import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import Navbar from './components/Layout/Navbar';
import DashBoard from './components/Dashboard/DashBoard';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchBar from './components/Dashboard/SearchBar';
import AddWeather from './components/Dashboard/AddWeather'


class App extends React.Component {

  state = {
    weather: {
      id: undefined,
      city: undefined,
      country: undefined,
      temp: undefined,
      max: undefined,
      min: undefined,
    },
    err: {
      badReq: false,
    }
  }

  async datafetch(city, country) {
    const API_KEY = "edd8d189f2360a8a474be91b36cd0548";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

    const data = await response.json();
    if (response.ok) {
      return this.setState({
        weather:
        {
          id: data.id,
          city: data.name,
          country: data.sys.country,
          temp: data.main.temp,
          max: data.main.temp_max,
          min: data.main.temp_min,
        },
        err: {
          badReq: false
        }
      })
    }
    else {
      // throw new Error('Network response was not ok.')
      this.setState({
        err: {
          badReq: true,
        }
      })
    }


  }

  getWeather = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    this.datafetch(city, country);

  }

  handleWeatherInfo = () => {
    localStorage.setItem(JSON.stringify(this.state.weather.id), JSON.stringify(this.state.weather))
  }


  render() {
    return (
      <Router>
        <div style={{ display: 'flex' }}>
          <h4 style={{ borderRadius: '2rem', boxShadow: '1px 1px 1px 1px grey' }}><Link to="/">add</Link></h4>
          <h4 style={{ borderRadius: '2rem', boxShadow: '1px 1px 1px 1px grey' }}><Link to="/dashboard" >dash</Link></h4>
        </div>
        <div>

          <Route path='/' exact render={props => (
            <React.Fragment>
              <SearchBar getWeather={this.getWeather} />
              <div style={{ marginTop: '10rem' }}>
                {/* {this.state.err.badReq !== true ? this.renderError() : this.renderPage()} */}
                <AddWeather weather={this.state.weather} handleWeatherInfo={this.handleWeatherInfo} />
              </div>
            </React.Fragment>
          )} />
          <Route path='/dashboard' render={props => (
            <DashBoard />
          )} />
        </div>
      </Router>
    )
  }
  renderError() {
    return (
      <div>
        Please Enter Valid City and Country
</div>
    )
  }
  renderPage() {
    return (
      <div>

      </div>
    )
  }
}

export default App;
