import React                from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar  } from 'react-native';
import { Dimensions }       from 'react-native'
import styled               from "styled-components";
import ConvoScreen          from 'app/components/ConvoScreen';

let chups          = require('app/multimedia/happy/chups.png');
let chups2         = require('app/multimedia/happy/chups2.png');

export default class SadConvo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            message: ''
        };
        this.mount = false;

        this.callQuote = this.callQuote.bind(this);
    }

    componentDidMount(){
        this.mount = true;
        this.callQuote();
    }

    callQuote(){
        fetch('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=10',
            {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/x-www-form-urlencoded",
                    "X-Mashape-Key": "uLp7KmpJutmshfjHLdHGNM4TVlRQp1PoU8fjsn9c4eLGzIaBdr"
                },
                body: JSON.stringify({
                    cat: 'famous',
                    count: '10'
                })
            })
            .then(result => result.json())
            .then(result =>{
                if (this.mount){
                    console.log("show, dont tell");
                    console.log(result);
                    this.setState({ message: `${result[0].quote}\n\nAutor:${result[0].author}` }); // result.status, result.headers, result.body});
                }
            });
    }

    componentWillUnmount(){
        this.mount = false;
    }

    render() {
        let {navigation} = this.props;
        let {message} = this.state;

        return (
            <ConvoScreen
                CharImg1={chups}
                CharImg2={chups2}
                blinkTime={3000}
                textMsg={message}
                navigation = {navigation}
                panelStyle={{flex:1}}
                imageStyle={{flex:3}}
                goHappy = {this.callQuote}
            />
        );
    }
}
