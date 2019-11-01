import React from 'react';
import WeatherDetail from './WeatherDetail'
import WeatherList from './WeatherList';
import styled from 'styled-components';
import Form from './Form';


class DashBoard extends React.Component {
    state = {
        currentId: null,
        isLoading: false,
        weatherContainer: [],
    }

    componentDidMount() {
        // var arrayOfKeys = Object.keys(localStorage);
        var arrayOfValues = [];
        for (var i in localStorage) {
            if (localStorage.hasOwnProperty(i)) {
                arrayOfValues.push(JSON.parse(localStorage[i]));
            }
        }
        this.setState({
            weatherContainer: arrayOfValues
        })
    }
    handleDel(id, e) {

        this.setState({
            weatherContainer: [...this.state.weatherContainer.filter(weather =>
                weather.id !== id
            )],
            currentId: null
        })
        localStorage.removeItem(id)
    }
    handleBackClick() {
        this.setState({
            currentId: null,
        })
    }
    handleDetail(id, e) {

        console.log(id)
        this.setState({
            currentId: id
        })
    }
    render() {
        const { currentId, isLoading, idContainer } = this.state;
        return (
            <div>
                {currentId !== null ? this.renderCard(currentId)
                    : this.renderList()}
            </div>
        )
    }
    renderCard(id) {
        return (
            <div>
                <button className="onBack" onClick={this.handleBackClick.bind(this)}>
                    {'👈'}
                </button>
                display one weather cards
                <WeatherDetail id={this.state.currentId} handleDel={(id) => this.handleDel(id)} />

            </div>
        );
    }

    renderList() {
        return (
            <>
                <h1 style={{ textAlign: 'center' }}>Weather DashBoard {'🍅'}</h1>
                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>

                    {this.state.weatherContainer.map(weather => (
                        <WeatherList key={weather.id} weather={weather} handleDetail={(id) => this.handleDetail(id)} />
                    ))}
                </div>
            </>
        );
    }
}


export default DashBoard;