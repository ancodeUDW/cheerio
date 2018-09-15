import React                from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar  } from 'react-native';
import { Dimensions }       from 'react-native'
import styled               from "styled-components";
import AnimateTwoImages     from 'app/components/AnimateTwoImages';
import GradientBackground   from 'app/components/GradientBackground';
import ConvoScreen          from 'app/components/ConvoScreen';
import ImageButton          from 'app/components/ImageButton';

let muffin          = require('app/multimedia/candies/muffin.png');
let muffin2         = require('app/multimedia/candies/muffin2.png');

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
                CharImg1={muffin}
                CharImg2={muffin2}
                blinkTime={3000}
                textMsg={":|"}
                navigation = {navigation}
                panelStyle={{flex:1}}
                imageStyle={{flex:2}}
            />
        );
    }
}
