import React                from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import styled               from "styled-components";
import AnimateTwoImages     from 'app/components/AnimateTwoImages';
import GradientBackground           from 'app/components/GradientBackground';

let faceOpenImg    = require('app/multimedia/startScreen/face1.png');
let faceClosedImg  = require('app/multimedia/startScreen/face2.png');
let logoImg        = require('app/multimedia/startScreen/logo.png');

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        };

        this.goToChatScreen = this.goToChatScreen.bind(this);
    }

    render() {
        return (
            <GradientBackground>
                <StyledTouchableOpacity
                    onPress={this.goToChatScreen}
                >
                    <StyledAnimateTwoImages
                        timming = {1000}
                        image1  = {faceOpenImg}
                        image2  = {faceClosedImg}
                    />

                    {/*<StyledImg*/}
                        {/*source = {logoImg}*/}
                    {/*/>*/}
                </StyledTouchableOpacity>
            </GradientBackground>
        );
    }

    goToChatScreen(){
        let {navigation} = this.props;
        navigation.navigate('Home');
    }
}

const StyledTouchableOpacity = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledView = styled.View`
  background-color: #ffbeb8;
  align-items: center;
  justify-content: center;        
  flex: 1;
`;

const StyledImg = styled.Image`
  width: 60%;
  height: 101px;
  resize-mode: contain;
  margin-top: 20%;
`;

const StyledAnimateTwoImages = styled(AnimateTwoImages)`
  width: 90%;
`;


