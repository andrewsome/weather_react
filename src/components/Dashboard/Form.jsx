import React from 'react';
import styled from 'styled-components';



const Form = (props) => {

    return (

        <form onSubmit={props.APIcall}>
            <input type="text" name="city" placeholder="City..." />
            <input type="text" name="country" placeholder="Country..." />
            <button>Get Weather</button>
        </form>

    )

}

export default Form;