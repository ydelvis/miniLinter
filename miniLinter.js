/* This project is a mini Linter that helps to analyze a given sentence or paragraph ...
    stats like the number of words and number of sentences are found.
    Also, given a list of unnecessary words, the paragraph can be improved (remove such words)

    General goal is to practice concepts related to JavaScript Iterators.

                                                        -By ydelvis

    #AmaliTechTraining   #Codecademy 
*/

// story to be evaluated
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end. Yes, basically you are.';

let overusedWords = ['really', 'very', 'basically'];  // predefined list of overused words

let unnecessaryWords = ['extremely', 'literally', 'actually' ];  // predefined list of unnecessary words

console.log('Summary \n---------------------------------');  // just creating a logical section for summary (visual aids). 

const storyWords = story.split(' ');  // unpacking story words in to an array
console.log(`Word Count: ${storyWords.length}`);  // obtaining number of words.

// filtering out unneccessary Words
const betterWords = storyWords.filter(word => { return !unnecessaryWords.includes(word)})

// count the number of overused words
function overusedWord(words){
  for (const word of words){
    let checkWord = storyWords.filter(item => {return item === word} ); 
    console.log(`'${word}' has been used ${checkWord.length} times`)
  }
}

// obtain number of sentences
function numberOfSentences(story){
  let number = 0;
    storyWords.forEach(word =>{
    if (word.includes('.') || word.includes('!')){number +=1;   }
  })
  console.log(`Sentence Count: ${number}`);
}

// count the number of sentences
numberOfSentences(storyWords);

// check the number of repeated overused words
 overusedWord(overusedWords);  

console.log('---------------------------------') // just creating a logical section (visual aids)

// Displaying the Better words only
console.log(betterWords.join(' '));

    
 
// End of code.