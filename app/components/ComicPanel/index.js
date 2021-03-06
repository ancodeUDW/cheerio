// https://market.mashape.com/andruxnet/random-famous-quotes
import React                from 'react';
import * as R               from 'ramda';
import { Button, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native';
import { Dimensions }       from 'react-native'
import styled               from "styled-components";
import {Share, Linking}     from 'react-native';
import {Font}               from "expo";
import Expo                 from "expo";

let panel           = require('app/multimedia/images/common/panel.png');
let panelBottom     = require('app/multimedia/images/common/panelBottom.png');
let panelTop        = require('app/multimedia/images/common/panelTop.png');
// let panelLeft       = require('app/multimedia/common/panelLeft.png');
// let panelRight      = require('app/multimedia/common/panelRight.png');

let containerStyle = {
    // width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    // flex: 1
};


async function playSound(){
    // Todo: buggy, lets fix it in the future
    // let soundObject           = new Expo.Audio.Sound();
    //
    // try {
    //     await soundObject.loadAsync(require('app/multimedia/sound/clickSound.mp3'));
    //     await soundObject.playAsync();
    //     return Promise.resolve();
    //     // Your sound is playing!
    // } catch (error) {
    //     return Promise.reject();
    //     // An error occurred!
    // }
}

class ComicPanel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            fontLoaded: false
        };

        this.renderDraggable    = this.renderDraggable.bind(this);
        this.shareInnerContent  = this.shareInnerContent.bind(this);
        this.renderInnerContent = this.renderInnerContent.bind(this);
    }


    componentDidMount() {
        Font.loadAsync({
            'catamaran': require('app/multimedia/fonts/catamaran/Catamaran-Regular.ttf'),
        }).then(() => this.setState({ fontLoaded: true }));
    }


    render() {
        let {textMsg, style, onPanelPress, panelDirection, show, textSource, fontSize, draggable} = this.props;
        if (!show){
            return null
        }
        return (
            <StyledView style={style}>
                <StyledTopPanelImage
                    source = {panelTop}
                    hide   = {'BOTTOM' === panelDirection}
                />
                <StyledPanelView
                    source = {panel}
                    imageStyle = {{ resizeMode: 'stretch'}}
                    direction = {panelDirection}
                >
                    {this.renderDraggable()}
                </StyledPanelView>

                <StyledBottomPanelImage
                    source = {panelBottom}
                    hide   = {'TOP' === panelDirection}
                />
            </StyledView>
        );
    }

    renderDraggable(){
                    let {draggable} = this.props;

                    return draggable ? (
                                        <ScrollView  ontentContainerStyle={containerStyle}>
                                            {this.renderInnerContent()}
                                        </ScrollView>
                                        )
                                     : (
                                         <React.Fragment>
                                             {this.renderInnerContent()}
                                         </React.Fragment>
                                        )

    }

    renderInnerContent(){
        let {textMsg, onPanelPress, textSource, fontSize, email} = this.props;

        return this.state.fontLoaded ? (
            <StyledTouchableOpacity onPress={this.shareInnerContent} >
                <StyledText style={{ fontFamily: 'catamaran' }} fontSize = {fontSize}>{textMsg}</StyledText>
                {!R.isNil(textSource) ? (<StyledSource>{textSource}</StyledSource>) : null}
            </StyledTouchableOpacity>) : null;
    }



    shareInnerContent(){
        let {textMsg, onPanelPress, textSource, fontSize, email, enableShare} = this.props;

        if (!enableShare) return false;

        playSound()
            .then(() => {
                let myMessage = `${textMsg} ${!R.isNil(textSource) ? '\n\nsource: ' + textSource : null}`;

                R.isNil(email) ? Share.share({message: myMessage, title: "Cheerio shares"}, {dialogTitle: "Cheerio wants to share!"})
                    : Linking.openURL('mailto:' + email);
            })
    }
}

const GREY_PANEL_MARGINS = 25;

const StyledView = styled.View`
  width: 100%;
  flex: 1;
`;

const StyledPanelView = styled.View`
  position: relative;
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 50px;
  border-color: #6f1a2f;
  border-width: 7px;
  ${props => props.direction === 'BOTTOM' ? 'margin-top' : 'margin-bottom'}: ${GREY_PANEL_MARGINS}px;
  padding: 15px;
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const StyledText = styled.Text`
  text-align: center;
  color: #6f1a2f;
  font-size: ${props => props.fontSize}; //25px;
`;


const StyledSource = styled.Text`
  text-align: center;
  color: rgba(111,26,47,0.67);
  font-size: 15px;
  font-weight: bold;
`;


const StyledPanelImage = styled.Image`
  height: 60px;
  width: 100%;
  resize-mode: contain;
  z-index: 10;
  align-items: center;
  display: ${props => props.hide ? 'none' : 'flex'}
`;

const StyledBottomPanelImage = styled(StyledPanelImage)`
    margin-top: -7px;
`;

const StyledTopPanelImage = styled(StyledPanelImage)`
    margin-bottom: -7px;
`;

ComicPanel.defaultProps = {
    panelDirection: 'BOTTOM',
    show: true,
    textSource: null,
    draggable: false,
    fontSize: '25px',
    email: null,
    enableShare: true,
};

export default ComicPanel;



