import React, { Component } from 'react'
import styled from 'styled-components'



class WeatherDetail extends Component {
    state = {
        currentDate: null,
        currentId: this.props.id,
        isUpdated: false,
        city: null,
        currentWeather: [],
        description: [],
        isLoading: true,
        DayOne: [],
    }

    async componentDidMount() {
        const API_KEY = "edd8d189f2360a8a474be91b36cd0548";
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${this.state.currentId}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        console.log(data)

        this.setState({
            currentWeather: data.list,
            currentDate: new Date()
        })
        const firstDay = [];
        this.state.currentWeather.map((item, index) => {
            if (index < 6) {
                // firstDay.push((item.dt_txt).slice(11, 13))
                console.log(item.main)
            }


        }

        )

        this.setState({
            isLoading: false,
            city: data.city.name,
        })
    }


    render() {

        return (
            <div>
                {this.state.isLoading !== true ? this.renderInfo() : "loading..."}

            </div>
        )
    }
    renderInfo() {
        const { city, country, description, temp, max, min, wind, humidity, unit, icon } = this.state.currentWeather
        const iconUrl = `http://openweathermap.org/img/w/${icon}.png`
        return (
            <div>
                {/* {console.log(this.state.currentId.toISOString())} */}
                {this.state.DayOne.map(day => (
                    console.log(day)
                ))}
                {/* {console.log((this.state.currentDate.toISOString()).slice(11, 13))}
                {this.state.currentWeather.map((item, index) => (
                    <div>{console.log(item.dt_txt.slice(11, 13)),
                        console.log(index)}
                        <div>{(item.weather.map(description => (
                            <div>{console.log(description.main)}</div>
                        )))}</div>
                    </div>
                )
                )} */}


                {/* <img src={iconUrl} alt="icon" />
                <p>Right now in {city} is {description}, the temperature is {temp} &deg;, wind speed is {wind} m/s. Humidity is {humidity} %</p>
                <button onClick={() => this.props.handleDel(this.state.currentId)}>x</button> */}
            </div>
        )
    }

}
export default WeatherDetail;
