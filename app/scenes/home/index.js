import React                from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar  } from 'react-native';
import { Dimensions }       from 'react-native'
import styled               from "styled-components";
import AnimateTwoImages     from 'app/components/AnimateTwoImages';
import GradientBackground   from 'app/components/GradientBackground';
import ConvoScreen          from 'app/components/ConvoScreen';
import ImageButton          from 'app/components/ImageButton';
import ComicPanel from "../../components/ComicPanel";

let candy          = require('app/multimedia/images/candies/candy.png');
let candy2          = require('app/multimedia/images/candies/candy2.png');
let panel          = require('app/multimedia/images/common/panel.png');
let bottomPanel    = require('app/multimedia/images/common/panelBottom.png');
let smileSad       = require('app/multimedia/images/common/smiles/sad.png');
let smileNeutral   = require('app/multimedia/images/common/smiles/neutral.png');
let smileHappy     = require('app/multimedia/images/common/smiles/happy.png');

export default class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        };
    }

    render() {
        let {navigation} = this.props;

        return (

            <ConvoScreen
                CharImg1={candy}
                CharImg2={candy2}
                blinkTime={3000}
                textMsg={"How are you feeling today?\nUse the buttons below we will tell you something :)"}
                navigation={navigation}
                enableShare = { false }
            />
        );
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
  font-size: 30px;
  font-weight: bold;
`;


const StyledBottomPanelImage = styled.Image`
  height: 60px;
  width: 100%;
  margin-top: -7px;
  resize-mode: contain;
`;

const StyledCandy = styled(AnimateTwoImages)`
  width: 90%;
  flex: 1;
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



