// https://market.mashape.com/andruxnet/random-famous-quotes
import React                from 'react';
import * as R               from 'ramda';
import { Button, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar  } from 'react-native';
import { Dimensions }       from 'react-native'
import styled               from "styled-components";
import AnimateTwoImages     from 'app/components/AnimateTwoImages';
import GradientBackground   from 'app/components/GradientBackground';
import ImageButton          from 'app/components/ImageButton';
import ComicPanel           from 'app/components/ComicPanel';
import AdBanner             from 'app/components/adBanner';

let panel          = require('app/multimedia/images/common/panel.png');
let bottomPanel    = require('app/multimedia/images/common/panelBottom.png');
let smileSad       = require('app/multimedia/images/common/smiles/sad.png');
let smileNeutral   = require('app/multimedia/images/common/smiles/neutral.png');
let smileHappy     = require('app/multimedia/images/common/smiles/happy.png');

const MAX_NORMAL_CHARS = 114;
const MAX_DRAGGABLE_CHARS = 141; // todo: aprox


class ConvoScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showAd: false
        };

        this.isMonted = false;

        this.addDelayBanner = this.addDelayBanner.bind(this);
        this.goToHappy      = this.goToHappy.bind(this);
        this.goToNeutral    = this.goToNeutral.bind(this);
        this.goToSad        = this.goToSad.bind(this);
    }

    componentDidMount(){
        this.isMonted = true;
        setTimeout(() => this.isMonted ? this.setState({showAd: true}) : null, 5000)
    }

    componentWillUnmount(){
        this.isMonted = false;
    }

    render() {
        let {CharImg1, CharImg2,
            blinkTime, textMsg,
            panelStyle, imageStyle,
            onPanelPress, showBottom,
            showTop, textSource,
            sourceStyle} = this.props;

        let {DRAGGABLE, TEXT_SIZE} = R.cond([
           [R.gte(MAX_NORMAL_CHARS),        () => ({DRAGGABLE: false,  TEXT_SIZE: '23px'})],
           [R.gte(MAX_DRAGGABLE_CHARS),     () => ({DRAGGABLE: false,  TEXT_SIZE: '20px'})],
           [R.lt(MAX_DRAGGABLE_CHARS),      () => ({DRAGGABLE: true,   TEXT_SIZE: '20px'})],
           [R.T(MAX_DRAGGABLE_CHARS),       () => ({DRAGGABLE: false,  TEXT_SIZE: '20px'})]
        ])(textMsg.length);

        return (
            <GradientBackground>
                <ComicPanel
                    textMsg = {textMsg}
                    textSource = {textSource}
                    style   = {{...panelStyle, width: '90%'}}
                    onPress = {onPanelPress}
                    show    = {showTop}
                    fontSize = {TEXT_SIZE}
                    draggable = {DRAGGABLE}
                />

                <AnimatedChar
                    timming = {blinkTime}
                    image1  = {CharImg1}
                    image2  = {CharImg2}
                    style   = {imageStyle}
                />

                <ComicPanel
                    textMsg = {textSource}
                    style   = {{...sourceStyle, width: '90%' }}
                    onPress = {onPanelPress}
                    panelDirection = {"TOP"}
                    show    = {showBottom}
                />

                <GreyPanel>
                    <StyledImageButton
                        source  = {smileHappy}
                        onPress = {this.goToHappy}
                    />
                    <StyledImageButton
                        source  = {smileNeutral}
                        onPress = {this.goToNeutral}
                    />
                    <StyledImageButton
                        source  = {smileSad}
                        onPress = {this.goToSad}
                    />
                </GreyPanel>
                {this.addDelayBanner()}

            </GradientBackground>
        );
    }

    addDelayBanner(){
        let {showAd} = this.state;
        return <AdBanner type={'relative'}/>;
    }

    goToHappy(){
        // this.props.goToHappy();
        let {navigation, goToHappy} = this.props;
        R.isNil(goToHappy) ? navigation.navigate('Happy')
                           : goToHappy();
    }

    goToNeutral(){
        // this.props.goToNeutral();
        let {navigation, goToNeutral} = this.props;
        R.isNil(goToNeutral) ? navigation.navigate('Neutral')
                             : goToNeutral();
    }

    goToSad(){
        // this.props.goToSad();
        let {navigation, goToSad} = this.props;
        R.isNil(goToSad) ? navigation.navigate('Sad')
                         : goToSad();
    }
}

const GREY_PANEL_MARGINS = 25;

const AnimatedChar = styled(AnimateTwoImages)`
  width: 90%;
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

ConvoScreen.defaultProps = {
    // CharImg1,
    // CharImg2,
    // blinkTime,
    textMsg: "test message",
    panelStyle: {},
    imageStyle: {},
    sourceStyle: {},
    onPanelPress: () => {},
    showTop: true,
    showBottom: false,
    // goToHappy: () => {},
    // goToNeutral: () => {},
    // goToSad: () => {}
};


export default ConvoScreen


