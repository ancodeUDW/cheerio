import React                 from 'react';
import ConvoScreen           from 'app/components/ConvoScreen';
import cheerioSentencesService       from 'app/services/cheerioSentences';

const cheersGenerator = cheerioSentencesService.cheersGenerator;

let candy           = require('app/multimedia/images/candies/chups.png');
let candy2          = require('app/multimedia/images/candies/chups.png');

export default class SadConvo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            sentence: cheersGenerator.getRandomSentence()
        };

        this.createRandomSentence = this.createRandomSentence.bind(this);
    }

    render() {
        let {navigation} = this.props;
        let {sentence} = this.state;

        return (

            <ConvoScreen
                CharImg1        = {candy}
                CharImg2        = {candy2}
                blinkTime       = {3000}
                goToSad         = {this.createRandomSentence}
                textMsg         = {sentence}
                navigation      = {navigation}
            />
        );
    }

    createRandomSentence(){
        this.setState({sentence: cheersGenerator.getRandomSentence()});
    }
}




