// Variables-----------------------------------------------------------------

const overlay = document.querySelector('#overlay');
const resetBtn = document.querySelector('.btn__reset');
const keyboard = getElementById("qwerty");
const phrash = getElementById("phrash");
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
  ];

// Overlay Visability-----------------------------------------------------------------


// Set overlay
function setOverlay(visibility) {
    overlay.style.visibility = visibility;
  }
  
  // Show overlay
  function showOverlay(name, message) {
    let title = document.querySelector('.title');
    let btn = document.querySelector('.btn__reset');
    setOverlay('visible');
    overlay.className = name;
    title.textContent = message;
    btn.textContent = 'Play again';
  }
  

// Get Phrase-----------------------------------------------------------------


function getRandomPhraseAsArray(arr){
    //do stuff to any arr that is passed in 
} 

getRandomPhraseAsArray(phrases);


//Set Display -----------------------------------------------------------------

function addPhraseToDisplay(arr){
    // do stuff any arr that is passed in, and add to `#phrase ul`
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhrasetoDisplay(phraseArray); 


// Check Letter-----------------------------------------------------------------