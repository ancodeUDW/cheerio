import * as R from 'ramda';
import BaseRandomSentences from "../../app/services/randomSentencesGenerator/index";
let quotes = require('./quotes.json').quotes;

let quotesGenerator = new BaseRandomSentences(quotes);

export default quotesGenerator

