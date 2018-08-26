// https://market.mashape.com/andruxnet/random-famous-quotes
import React                from 'react';
import * as R               from 'ramda';
import { Button, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar  } from 'react-native';
import { Dimensions }       from 'react-native'
import styled               from "styled-components";
import AnimateTwoImages     from 'app/components/AnimateTwoImages';
import GradientBackground   from 'app/components/GradientBackground';
import ImageButton          from 'app/components/ImageButton';

let panel          = require('app/multimedia/common/panel.png');
let bottomPanel    = require('app/multimedia/common/panelBottom.png');
let smileSad       = require('app/multimedia/common/smiles/sad.png');
let smileNeutral   = require('app/multimedia/common/smiles/neutral.png');
let smileHappy     = require('app/multimedia/common/smiles/happy.png');

export default class ConvoScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        };

        this.goToHappy      = this.goToHappy.bind(this);
        this.goToNeutral    = this.goToNeutral.bind(this);
        this.goToSad        = this.goToSad.bind(this);
    }

    render() {
        let {CharImg1, CharImg2, blinkTime, textMsg, panelStyle, imageStyle} = this.props;

        return (
            <GradientBackground>
                <StyledPanelView
                    source = {panel}
                    imageStyle = {{ resizeMode: 'stretch'}}
                    style={panelStyle || {}}
                >
                    <ScrollView
                        contentContainerStyle={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex', flex: 1}}
                    >
                        <View>
                            <StyledText>{textMsg}</StyledText>
                        </View>
                    </ScrollView>

                </StyledPanelView>
                <StyledBottomPanelImage
                    source = {bottomPanel}
                />

                <AnimatedChar
                    timming = {blinkTime}
                    image1  = {CharImg1}
                    image2  = {CharImg2}
                    style   = {imageStyle || {}}
                />

                <GreyPanel>
                    <StyledImageButton
                        source = {smileHappy}
                        onPress = {this.goToHappy}
                    />
                    <StyledImageButton
                        source = {smileNeutral}
                        onPress = {this.goToNeutral}
                    />
                    <StyledImageButton
                        source = {smileSad}
                        onPress = {this.goToSad}
                    />
                </GreyPanel>
            </GradientBackground>
        );
    }


    goToHappy(){
        let {navigation, goToHappy} = this.props;
        R.isNil(goToHappy) ? navigation.navigate('Happy')
                           : goToHappy()
    }

    goToNeutral(){
        let {navigation, goToNeutral} = this.props;
        R.isNil(goToNeutral) ? navigation.navigate('Neutral')
            : goToNeutral()
    }

    goToSad(){
        let {navigation, goToSad} = this.props;
        R.isNil(goToSad) ? navigation.navigate('Sad')
            : goToSad()
    }
}

const GREY_PANEL_MARGINS = 25;

const StyledPanelView = styled.View`
  position: relative;
  width: 90%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 50px;
  border-color: #6f1a2f;
  border-width: 7px;
  margin-top: ${GREY_PANEL_MARGINS}px;
  padding: 15px;
`;


const StyledText = styled.Text`
  text-align: center;
  color: #6f1a2f;
  font-size: 20px;
  font-weight: bold;
`;


const StyledBottomPanelImage = styled.Image`
  height: 60px;
  width: 100%;
  margin-top: -7px;
  resize-mode: contain;
`;

const AnimatedChar = styled(AnimateTwoImages)`
  width: 90%;
  flex: 1;
  ${props => !R.isNil(props.style) ? props.style : null}
`;

const GreyPanel = styled.View`
  width: ${Dimensions.get('window').width - GREY_PANEL_MARGINS*2};
  margin-left: ${GREY_PANEL_MARGINS}px;
  margin-right: ${GREY_PANEL_MARGINS}px;
  margin-bottom: ${GREY_PANEL_MARGINS}px;
  background-color: #bd8cbf;
  border-radius: 50px;
  display: flex;
  padding: 7px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const StyledImageButton = styled(ImageButton)`
  width: 50px;
  height: 50px;
`;


