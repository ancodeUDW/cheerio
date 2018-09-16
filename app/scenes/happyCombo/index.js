import React                        from 'react';
import ConvoScreen                  from 'app/components/ConvoScreen';
import cheerioSentencesService      from 'app/services/cheerioSentences';

const quotesGenerator  = cheerioSentencesService.quotesGenerator;

let candy           = require('app/multimedia/candies/candy.png');
let candy2          = require('app/multimedia/candies/candy2.png');


export default class HappyConvo extends React.Component {

    constructor(props){
        super(props);

        let myQuote = quotesGenerator.getRandomSentence();

        this.state = {
            message:    myQuote.quote,
            source:     myQuote.author,
        };

        this.createRandomSentence = this.createRandomSentence.bind(this);
    }

    componentDidMount(){
    }

    // todo: this will be made in the service from now on

    componentWillUnmount(){
        this.mount = false;
    }

    render() {
        let {navigation} = this.props;
        let {message, source} = this.state;

        return (
            <ConvoScreen
                CharImg1    = {candy}
                CharImg2    = {candy2}
                blinkTime   = {3000}
                textMsg     = {message}
                textSource  = {source}
                showTop     = {true}
                showBottom  = {false}
                navigation  = {navigation}
                panelStyle  = {{flex:3}}
                sourceStyle = {{height: 10}}
                imageStyle  = {{flex: 1}}
                goToHappy   = {this.createRandomSentence}
            />
        );
    }


    createRandomSentence(){
        let myQuote = quotesGenerator.getRandomSentence();

        this.setState({
            message:    myQuote.quote,
            source:     myQuote.author,
        });
    }
}
