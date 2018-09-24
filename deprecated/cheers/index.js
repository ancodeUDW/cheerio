import * as R from 'ramda';
import BaseRandomSentences from '../../app/services/randomSentencesGenerator/index';

let cheers = require('./cheers.json').cheers;

let cheersGenerator = new BaseRandomSentences(cheers);

export default cheersGenerator

