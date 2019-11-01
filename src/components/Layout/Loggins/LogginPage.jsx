import React from 'react';
import styled from 'styled-components';
import Input from './Inputs';
import { Button, Container, Row, Col } from "reactstrap";

const StyledDiv = styled.div`
margin:auto;
padding-top:2rem;
    border:.1rem solid black;
`;
const StyledImg = styled.img`
width:47rem;
height:47rem;
`;
const StyledContainer = styled.div`
width:60%;
top:20rem;
margin:0 auto;
padding-top:5rem;
border:.1rem solid black;

`;

const Navbar = () => {
    return (

        <StyledContainer>
            <Row>

                <Col sm='8' md='4' lg='4'>
                    <Row>
                        <StyledDiv>
                            <h1>Login</h1>
                        </StyledDiv>
                    </Row>
                    <Row>
                        <StyledDiv>
                            <Input placeholder="Email" type="text" />
                        </StyledDiv>
                    </Row>
                    <Row>
                        <StyledDiv>
                            <Input placeholder="Password" type="text" />
                        </StyledDiv>
                    </Row>
                    <Row>
                        <StyledDiv>
                            <button>Login</button>
                        </StyledDiv>

                    </Row>
                    <Row>
                        <StyledDiv>
                            Do not have account? <a href="/">SIGN UP</a>
                        </StyledDiv>
                    </Row>
                </Col>
                <Col sm='1' md='6' lg='6'>
                    <StyledImg src="https://images.pexels.com/photos/1703316/pexels-photo-1703316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                </Col>
            </Row>
        </StyledContainer>

    )

}
export default Navbar;