import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import styled from "styled-components";

export default class AnimateTwoImages extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showFirst: true,
        };

        this.goToAbout = this.goToAbout.bind(this);
        this.initAnimation = this.initAnimation.bind(this);

    }

    componentDidMount(){
        this.initAnimation();
    }

    initAnimation(){
        let showFirst = this.state.showFirst;
        
        const animateCycle = () => {
            let myTimeout = showFirst ? 1000 : 300;
            
            setTimeout(() => {
                this.setState({ showFirst });
                animateCycle();
            }, myTimeout);
            showFirst = !showFirst;

        };

        animateCycle();
    }

    render() {
        let {image1, image2} = this.props;
        let {showFirst} = this.state;
        return (
            <StyledView style={this.props.style}>
                <AbsolutePosView style={{opacity: showFirst ? 1 : 0}}>
                    <StyledImage source={image1} />
                </AbsolutePosView>
                <AbsolutePosView style={{opacity: showFirst ? 0 : 1}}>
                    <StyledImage source={image2} />
                </AbsolutePosView>
            </StyledView>
        );
    }

    goToAbout(){
        let {navigation} = this.props;
        navigation.navigate('About');
    }
}

const StyledView = styled.View`
  height: 100px;
  width: 100%;
`;

const AbsolutePosView = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;    
`;

const StyledImage = styled.Image`
  resize-mode: contain;
  width: 90%;
`;


