import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import styled from "styled-components";
import AnimateTwoImages from 'app/components/AnimateTwoImages';

let faceOpen  = require('app/multimedia/face1.png');
let faceClosed  = require('app/multimedia/face2.png');

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            faceCloseEyes: false,
        };

        this.goToAbout = this.goToAbout.bind(this);

        setInterval(() => {
            this.setState(previousState => {
                return { faceCloseEyes: !previousState.faceCloseEyes };
            });
        }, 1000);
    }

    render() {
        let {faceCloseEyes} = this.state;
        return (
            <StyledView>
                <StyledAnimateTwoImages
                    timming = {1000}
                    image1  = {faceOpen}
                    image2  = {faceClosed}
                />
                {/*<StyledImage source={faceCloseEyes ? faceClosed : faceOpen}/>*/}
                <Button
                    title="About this app"
                    onPress={this.goToAbout}
                />
            </StyledView>
        );
    }

    goToAbout(){
        let {navigation} = this.props;
        navigation.navigate('About');
    }
}

const StyledView = styled.View`
  background-color: #ffbeb8;
  align-items: center;
  justify-content: center;        
  flex: 1;
`;

const StyledAnimateTwoImages = styled(AnimateTwoImages)`
  width: 90%;
`;


