import React                        from 'react';
import ConvoScreen                  from 'app/components/ConvoScreen';
import cheerioSentencesService       from 'app/services/cheerioSentences';

const jokesGenerator = cheerioSentencesService.jokesGenerator;


let muffin          = require('app/multimedia/candies/muffin.png');
let muffin2         = require('app/multimedia/candies/muffin2.png');

export default class NeutralConvo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            joke: jokesGenerator.getRandomSentence()
        };

        this.createRandomSentence = this.createRandomSentence.bind(this);
    }

    render() {
        let {navigation} = this.props;
        let {joke} = this.state;

        return (
            <ConvoScreen
                CharImg1    = {muffin}
                CharImg2    = {muffin2}
                blinkTime   = {3000}
                goToNeutral = {this.createRandomSentence}
                textMsg     = {joke}
                navigation  = {navigation}
            />
        );
    }

    createRandomSentence(){
        this.setState({joke: jokesGenerator.getRandomSentence()});
    }
}
