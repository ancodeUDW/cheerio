import React                from 'react';
import {StatusBar} from 'react-native';
import styled               from "styled-components";
import Background           from 'app/components/Background';

export default class GradientBackground extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <StyledView>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                    hidden={true}
                />
                <Background>
                    {this.props.children}
                </Background>
            </StyledView>
        );
    }
}

const StyledView = styled.View`
  background-color: #ffbeb8;
  align-items: center;
  justify-content: center;        
  flex: 1;
`;
