import * as R from 'ramda';
import randomSentencesGenerator from '../randomSentencesGenerator';

let cheers = require('./jsons/cheers.json').cheers;
let quotes = require('./jsons/quotes.json').quotes;
let jokes  = require('./jsons/jokes.json').jokes;


export default {
    cheersGenerator: new randomSentencesGenerator(cheers),
    quotesGenerator: new randomSentencesGenerator(quotes),
    jokesGenerator:  new randomSentencesGenerator(jokes),
}

