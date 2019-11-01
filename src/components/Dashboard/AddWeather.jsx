import React, { Component } from 'react'



class AddWeather extends Component {



    render() {
        const styleDiv = {
            borderRadius: '2rem',
            margin: '0 auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            width: '20rem',
            height: '25rem',
            background: 'blue',
            color: 'red'
        }
        const { id, city, country, temp, max, min } = this.props.weather
        return (
            <div style={styleDiv}>

                <div>{city} {country}</div>
                <div>{temp}</div>
                <div>{min}</div>
                <div>{max}</div>
                <button onClick={this.props.handleWeatherInfo}>ADD</button>
            </div>
        )
    }
}
export default AddWeather;