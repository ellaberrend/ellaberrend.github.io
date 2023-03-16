// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//2. RAW TEXT STRINGS

let storyText='It was 100 fahrenheit outside, so insertx: went for a stroll. When they got to inserty:, they laughed with joy for a few moments, then insertz:. Bob saw the whole thing, but was not surprised — insertx: weighs 500 pounds, and it was a hot day.';
let insertX = ['Billie Eilish', 'the cute dog', 'Father Christmas'];
let insertY = ['Starbucks', 'the Mall', 'Arizona'];
let insertZ = ['pooped their pants', 'tied their shoes', 'turned into a frog and burped'];

//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION


function result() {
    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace('insertx:',xItem).replace('insertx:',xItem).replace('inserty:',yItem).replace('insertz:',zItem);


  if(customName.value !== '') {
    let Name = customName.value;
    newStory = newStory.replace ('Bob',Name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14).toString() + 'stone';
    const temperature =  Math.round((94-32)*(5/9)).toString() + 'centigrade';
    newStory = newStory.replace ('100 fahrenheit', temperature).replace('500 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

randomize.addEventListener('click', result);
