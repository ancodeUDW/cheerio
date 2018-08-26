import React from 'react';
import { Button, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import styled from "styled-components";
import AnimateTwoImages from 'app/components/AnimateTwoImages';

let logoImg        = require('app/multimedia/common/background.png');

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        };

        // this.goToAbout = this.goToAbout.bind(this);
    }

    render() {
        return (
            <StyledImageBackground
                source = {logoImg}
            >
                {this.props.children}
            </StyledImageBackground>
        );
    }
}

const StyledImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


