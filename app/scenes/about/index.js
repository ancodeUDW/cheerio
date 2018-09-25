import React                        from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import styled                       from "styled-components";
import { Font }                     from 'expo';

import GradientBackground           from "app/components/GradientBackground";
import ComicPanel                   from "app/components/ComicPanel";
import AnimateTwoImages             from "app/components/AnimateTwoImages";
import ImageButton from "../../components/ImageButton";
import * as R from "ramda";

let Logo                            = require('app/multimedia/images/logos/logo.png');
let piruleta                        = require('app/multimedia/images/candies/piruleta.png');
let back                            = require('app/multimedia/images/common/smiles/back.png');

const AnimatedChar = styled(AnimateTwoImages)`
  width: 90%;
`;
const TheBlueHeroesLogo = styled.Image`
  width: 100%;
  height: 65;
  resize-mode: contain;
`;

const StyledText = styled.Text`
  text-align: center;
  color: #6f1a2f;
  font-size: ${props => props.fontSize}; //25px;
`;

export default class About extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            fontLoaded: false
        }

        this.goBack = this.goBack.bind(this);
    }

    render() {
        console.log("logo");
        return (
            <GradientBackground >
                <ComicPanel
                    textMsg = {'Cheerio was created By Ancode from The Blue Heroes'}
                    style   = {{width: '90%'}}
                    show    = {true}
                    fontSize = {30}
                    draggable = {false}
                    email     = {'ancode@gmail.com'}
                />

                <AnimatedChar
                    timming = {3000}
                    image1  = {piruleta}
                    image2  = {piruleta}
                />

                <GreyPanel>
                    <StyledImageButton
                        source  = {back}
                        onPress = {this.goBack}
                    />
                </GreyPanel>
            </GradientBackground>
        );
    }

    goBack(){
        // this.props.goToHappy();
        let {navigation} = this.props;
        navigation.navigate('Home')
    }
}

const GREY_PANEL_MARGINS = 25;

const GreyPanel = styled.View`
  width: ${Dimensions.get('window').width - GREY_PANEL_MARGINS*2};
  margin-left: ${GREY_PANEL_MARGINS}px;
  margin-right: ${GREY_PANEL_MARGINS}px;
  margin-bottom: ${GREY_PANEL_MARGINS}px;
  background-color: #bd8cbf;
  border-radius: 50px;
  display: flex;
  padding: 7px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const StyledImageButton = styled(ImageButton)`
  width: 50px;
  height: 50px;
`;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
