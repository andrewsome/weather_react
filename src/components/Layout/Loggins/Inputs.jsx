import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`

  margin: 1rem 0;
  padding: 1.5rem;
  border-radius: 2rem;
  outline: 0;
  width: 100%;
  box-sizing: border-box;
  border: none;
  box-shadow: 0 0 2rem rgba(0,0,255,.3);
  font-size: 1rem;

`;

const Inputs = ({ placeholder, type }) => {
    return (
        <StyledInput placeholder={placeholder} type={type} />
    )
}
export default Inputs;