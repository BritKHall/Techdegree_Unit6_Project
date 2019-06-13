// Variables-----------------------------------------------------------------

const overlay = document.getElementById('overlay');
const resetBtn = document.querySelector('.btn__reset');
const keyboard = document.getElementById('qwerty');
const phrash = document.getElementById("phrash");
let missed = 0;

const phrases = [
    "prove them wrong",
    "no pressure no diamonds",
    "when nothing goes right go left",
    "listen to your heart",
    "judge only your own actions",
    "brave is not the absence of fear",
    "hope is a waking dream",
    "never stop until you are proud"
  ]

// Overlay Visability-----------------------------------------------------------------


function setOverlay(visibility) {
  overlay.style.visibility = visibility;
}

resetBtn.addEventListener('click', () => {
  setOverlay('hidden');
});


// Phrase functions-----------------------------------------------------------------


function getRandomPhraseAsArray(arr){
  const randomize = Math.floor(Math.random() * phrases.length);
  const randomPhrase = arr[randomize].split(" ");
} 

getRandomPhraseAsArray(phrases);






function addPhraseToDisplay(arr){



}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhrasetoDisplay(phraseArray); 


// keyboard functions-----------------------------------------------------------------

function checkLetters() {


}


// Results -----------------------------------------------------------------

function checkWin() {

  
}