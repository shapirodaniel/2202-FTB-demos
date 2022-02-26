const poem1 =
  'these growing pains though this good will hunting we fallen twigs look like bones waiting to be lit i am trying to tell you something about how rearranging words rearranges the universe';

const poem2 =
  "He is wearing a fisherman's raincoat a floppy rainhat with a long back brim or he is not he is the boy standing under the drainpipe in the full gushing waterfall his eyes are closed his head lifted into the full flow or they are open wide under the protective brim of his hat watching the heavy streams enfold him he is the boy standing under the drainpipe and I am the girl watching he is always there in spite of teachers principals trips to the office it rains and he finds the way to where water falls dirty from the roof muddy water plays over him where he stands with hands outstretched or by his sides where he spins or stands still or circles slowly it is all he hears the gushing voice of water the staccato notes on shoulder and chest it is the flowing the streaming the warm or icy notes their embrace";

// let's think about how to PREPROCESS this data
// where preprocessing means, create some sort of organization scheme
// so that we can work with the output more easily
function parsedText(text) {
  // it would be great if there a function
  // that would let me simply invoke some sort of delimiter
  // and split my string at the delimiter, and dump the contents of that operation
  // into an array
  text = text.toLowerCase();
  const wordsArray = text.split(' ');
  return wordsArray;
}

// console.log(parsedText(poem1));
// console.log(parsedText(poem2));

// think about how to build a Markov Chain
// the way that markov chains work is this:
// they're predictive in the sense that
// a frequency of words is allocated to any particular word
// simply by checking each word and looking at the NEXT word
// for example, in poem1, we have

/* 

  const shortPoem = 'these growing pains though this good will hunting we fallen twigs'

  const markovChainPoem1 = {
    // key value pairs, where each key is a word
    // and each value is an array of words that follow that word!

    these: ['growing'],
    growing: ['pains'],
    pains: ['though'],
    though: ['this'],
    this: ['good'],
    good: ['will'],
    will: ['hunting'],
    hunting: ['we'],
    we: ['fallen'],
    fallen: ['twigs'],
    twigs: ['']
  }

  // so given this predictive text "map", and when you hear map, think "object"
  // we could build an entirely next sentence by picking a randomWord
  // and following the connections between key-value pairs

  const randomWord = "these"

  // the goal will be to "predict" the next word by LOOKING AT THE CURRENT WORD, and seeing what words are "asssociated" with that word through the array that forms the value that that word is keyed to!

  these -> growing -> pains -> though

  // let's look at a poem with more variety of words, and more non-unique words that follow one another

  const markovChainPoem2 = {
    // this object is a frequency map that shows you how often any given word follows another word
    is: ['wearing', 'not', 'the', 'the', 'always', 'all', 'the'], 
  }

  is: wearing -> 1/7th of the time
  is: not -> 1/7th of the time
  is: the -> 3/7th of the time
  ...etc.

*/

// if i leverage Math.random() to pick a randomIndex from an array of values that are keyed to a particular word
// i can use that randomIndex to make a randomWordChoice from my array
// that random choice will, simply by virtue of the FREQUENCY MAP we've generated in creating the markovChain above, conform to general distribution of words associated with the word-key we're accessing
// which means, we'll get new sentences that sort of read "naturally", insofar as they are going to have relatively the same sort of frequency of word pairs, from word to word

function generateWordPairs(wordArray) {
  // you're going to parse this array
  // by iterating over its contents
  // and checking at each step of iteration
  // what word comes next?
  // ideally, you'll add that word
  // to a LIST of words, ie an ARRAY,
  // that's keyed to the word at which the iteration
  // has actually arrive
  // ie, if let i = 0 and we're on the FIRST iteration of the loop
  // then the key will need to be wordArray[0], and the word
  // that we'd like to PUSH into the value array will be wordArray[1]

  const markovChain = {};

  // loop and check, does the current word already exist as key in markovChain
  // if it does, it probably already has a values array
  // however, if it DOESN'T already exist, you'll probably want to create
  // a "holding container", ie a values array, associated with that key
  // so that you can start adding words to it :)

  /* if (key in object){
    // do something
  } */
}
