import * as R from "ramda";

export default class BaseRandomSentences {
    constructor(sentencesList, apiAddress){ // Todo: apiAddress to be added in the future
        this.sentences = sentencesList;
        this.usedSentences = [];
    }

    checkSentences(){
        if (this.sentences.length === 0){
            this.sentences      = this.usedSentences;
            this.usedSentences  = [];
        }
    }

    updateUsedSentences(sentenceId){
        this.usedSentences  = R.append(this.sentences[sentenceId], this.usedSentences);
        this.sentences      = R.remove(sentenceId, 1, this.sentences);
    }

    getRandomSentenceId(){
        const LENGTH = this.sentences.length;
        let myRandomNumber = Math.floor(Math.random() * LENGTH);

        // I did millions of simulations and it never happened that myRandomNumber === LENGHT. However, I am paranoid, ok? xP
        if (myRandomNumber >= LENGTH) {
            myRandomNumber = LENGTH - 1;
        } else if (myRandomNumber < 0) {
            myRandomNumber = 0;
        }

        return myRandomNumber;
    }

    getRandomSentence(){
        this.checkSentences();
        let cheersId = this.getRandomSentenceId();
        let sentence = this.sentences[cheersId];
        this.updateUsedSentences(cheersId);
        return sentence;
    };

    // todo: in the future the quotes could be handled via a Backend Api
    // callQuote(){
    //     fetch('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=10',
    //         {
    //             method: 'POST',
    //             headers: {
    //                 "Accept": "application/json",
    //                 "Content-Type": "application/x-www-form-urlencoded",
    //                 "X-Mashape-Key": "uLp7KmpJutmshfjHLdHGNM4TVlRQp1PoU8fjsn9c4eLGzIaBdr"
    //             },
    //             body: JSON.stringify({
    //                 cat: 'famous',
    //                 count: '10'
    //             })
    //         })
    //         .then(result => result.json())
    //         .then(result =>{
    //             if (this.mount){
    //                 console.log(result);
    //                 this.setState({
    //                     message: `${result[0].quote}`,
    //                     source:  `${result[0].author}`
    //                 }); // result.status, result.headers, result.body});
    //             }
    //         });
    // }
}