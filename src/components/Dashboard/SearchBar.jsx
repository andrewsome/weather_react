import React, { Component } from 'react'



class SearchBar extends Component {
    render() {
        const styleInput = {
            border: 'none',
            borderBottom: '1px solid red'
        }
        return (

            <form style={{ display: 'flex', justifyContent: 'space-around', width: '50rem', margin: '0 auto' }} onSubmit={this.props.getWeather}>
                <input style={styleInput} type="text" placeholder="Enter a city name..." name="city" />
                <input style={styleInput} type="text" placeholder="Enter a country name..." name="country" />
                <button>Submit</button>
            </form>

        )
    }
}
export default SearchBar