import React                from 'react';
import ConvoScreen          from 'app/components/ConvoScreen';

let candy          = require('app/multimedia/candies/candy.png');
let candy2          = require('app/multimedia/candies/candy2.png');


export default class SadConvo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            message: '',
            source: '',
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
                    console.log(result);
                    this.setState({
                        message: `${result[0].quote}`,
                        source:  `${result[0].author}`
                    }); // result.status, result.headers, result.body});
                }
            });
    }

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
                showBottom  = {true}
                navigation  = {navigation}
                panelStyle  = {{flex:1}}
                sourceStyle = {{height: 10}}
                imageStyle  = {{flex:2}}
                goHappy     = {this.callQuote}
            />
        );
    }
}
