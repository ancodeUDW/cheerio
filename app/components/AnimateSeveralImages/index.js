import React from 'react';
import * as R from 'ramda';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import styled from "styled-components";



export default class AnimateTwoImages extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showFirst: true,
        };
        this.mounted = false;
        this.goToAbout = this.goToAbout.bind(this);
        this.initAnimation = this.initAnimation.bind(this);

    }

    componentDidMount(){
        this.mounted = true;
        this.initAnimation();
    }

    componentWillUnmount(){
        this.mounted = false;
    }

    initAnimation(){
        let {timming} = this.props;
        let showFirst = this.state.showFirst;
        timming = R.isEmpty(timming) ? 1000 : timming;


        const animateCycle = () => {
            let myTimeout = showFirst ? timming : 300;
            if (this.mounted){ // dont repeat the cycle if is not mounted
                setTimeout(() => this.changeFrame(showFirst, animateCycle), myTimeout);
                showFirst = !showFirst;
            }
        };

        animateCycle();
    }

    changeFrame(showFirst, animateCycle){
        if (this.mounted) { // if is not mounted, dont set the state
            this.setState({showFirst});
            animateCycle();
        }
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
  flex: 1;
  width: 100%;
  padding: 10px;
`;

const AbsolutePosView = styled.View`
  position: absolute;
  left: 10px;
  right: 10px;
  top: 10px;
  bottom: 10px;
  align-items: center;
  justify-content: center;    
`;

const StyledImage = styled.Image`
  resize-mode: contain;
  width: 90%;
  height: 100%;
`;


