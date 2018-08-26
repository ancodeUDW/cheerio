import React                from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar  } from 'react-native';
import { Dimensions }       from 'react-native'
import styled               from "styled-components";
import AnimateTwoImages     from 'app/components/AnimateTwoImages';
import GradientBackground   from 'app/components/GradientBackground';
import ConvoScreen          from 'app/components/ConvoScreen';
import ImageButton          from 'app/components/ImageButton';

let candy          = require('app/multimedia/home/candy.png');
let candy2          = require('app/multimedia/home/candy2.png');
let panel          = require('app/multimedia/common/panel.png');
let bottomPanel    = require('app/multimedia/common/panelBottom.png');
let smileSad       = require('app/multimedia/common/smiles/sad.png');
let smileNeutral   = require('app/multimedia/common/smiles/neutral.png');
let smileHappy     = require('app/multimedia/common/smiles/happy.png');

export default class SadConvo extends React.Component {

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
                textMsg={":|"}
                navigation = {navigation}
                panelStyle={{flex:1}}
                imageStyle={{flex:2}}
            />
        );
    }
}