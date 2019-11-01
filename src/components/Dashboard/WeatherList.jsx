import React from 'react';

class WeatherList extends React.Component {

    render() {
        const card = { minWidth: '25rem', maxWidth: '25rem', borderRadius: '2rem', boxShadow: '1px 1px 1px 1.5px gray' }
        const { city, id, country, temp, min, max } = this.props.weather
        return (
            <div style={card} onClick={() => this.props.handleDetail(id)}>
                <div style={{ textAlign: 'center' }} >
                    <h1>{city} {country}</h1>
                    <h2>{temp}</h2>
                    <h2><span>{min}</span>|<span>{max}</span></h2>
                    {/* <button onClick={() => this.props.handleDel(id)}>x</button> */}

                </div>
            </div >
        );
    };
}
export default WeatherList
