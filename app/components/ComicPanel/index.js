// https://market.mashape.com/andruxnet/random-famous-quotes
import React                from 'react';
import * as R               from 'ramda';
import { Button, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native';
import { Dimensions }       from 'react-native'
import styled               from "styled-components";

let panel           = require('app/multimedia/common/panel.png');
let panelBottom     = require('app/multimedia/common/panelBottom.png');
let panelTop        = require('app/multimedia/common/panelTop.png');
// let panelLeft       = require('app/multimedia/common/panelLeft.png');
// let panelRight      = require('app/multimedia/common/panelRight.png');

let containerStyle = {
    // width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    // flex: 1
};

class ComicPanel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        };

        this.renderDraggable    = this.renderDraggable.bind(this);
        this.renderInnerContent = this.renderInnerContent.bind(this);
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
        let {textMsg, onPanelPress, textSource, fontSize} = this.props;

        return (
            <StyledTouchableOpacity onPress={onPanelPress} >
                <StyledText fontSize = {fontSize}>{textMsg}</StyledText>
                {!R.isNil(textSource) ? (<StyledSource>{textSource}</StyledSource>) : null}
            </StyledTouchableOpacity>)
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
  font-weight: bold;
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
    fontSize: '25px'
};

export default ComicPanel;



