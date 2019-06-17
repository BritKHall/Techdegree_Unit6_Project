// Variables-----------------------------------------------------------------

const overlay = document.getElementById('overlay');
const mainBtn = document.querySelector('.btn__reset');
const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById("phrase");
const ul = document.querySelector ('ul')
let missed = 0;



// Overlay Functions-----------------------------------------------------------------


function setOverlay(visibility) {
  overlay.style.visibility = visibility;
}

mainBtn.addEventListener('click', () => {
  setOverlay('hidden');
});


function showOverlay(name, message) {
  let title = document.querySelector('.title');
  let btn = document.querySelector('.btn__reset');
  setOverlay('visible');
  overlay.className = name;
  title.textContent = message;
  btn.textContent = 'Try again';
}

// Phrase functions-----------------------------------------------------------------

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

function getRandomPhraseAsArray(arr){
  const randomize = arr [Math.floor(Math.random() *arr.length)];
  const randomPhrase = randomize.split("");
  return randomPhrase
} 

getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(arr) {
    for (var i = 0; i < arr.length; i++) {
      let li = document.createElement ('li');
      li.textContent = arr[i];
      ul.appendChild(li);
      if (arr[i] !=" ") {
          li.className = "letter";
      } else {
          li.className = "space";
      } 
  }
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray); 


// keyboard functions-----------------------------------------------------------------

function checkLetter(btn) {
  let letters = document.querySelectorAll('.letter');
  let btnLetter = btn.textContent;
  let match = null;
  for (let i = 0; i < letters.length; i++) {
    let letter = letters[i].textContent;
    if (letter === btnLetter) {
      letters[i].classList.add('show');
      letters[i].classList.add('border-spin');
      if (match === null) {
        match = letter;
      }
    }
  }
  return match;
}

// Heart functions-----------------------------------------------------------------

  function createHeart(type) {
    let heart = document.createElement('img');
    heart.setAttribute('src', `images/${type}.png`);
    heart.setAttribute('height', '35px');
    heart.setAttribute('width', '30px');
    return heart;
  }


  function replaceHearts(selector, i, name, heartType) {
    let lives = document.querySelectorAll(selector); 
    lives[i].removeChild(lives[i].firstElementChild); 
    lives[i].className = name; 
    // create new img
    const heart = createHeart(heartType); 
    // add new img
    lives[i].appendChild(heart); 
  }

  keyboard.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
      let btn = event.target;
      btn.className = 'chosen';
      btn.setAttribute('disabled', '');
      let letterFound = checkLetter(btn);
      if (!letterFound) {
        // Replace hearts
        replaceHearts('.tries', 0, '', 'lostHeart');
        missed += 1;
      }
      checkWin();
    }
  });
  


// Results functions-----------------------------------------------------------------


function checkWin() {
  let letters = document.querySelectorAll('.letter');
  let guesses = document.querySelectorAll('.show');
  if (missed === 5) {
    showOverlay('lose', 'Nice Try. Better Luck Next Time.');
  } else if (letters.length === guesses.length) {
    showOverlay('win', 'Wow! You Got It!');
  }
}

// Reset functions-----------------------------------------------------------------

function deletePrevPhrase() {
  let ul = phrase.firstElementChild;
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
}

function resetKeyboard() {
  let keyBtns = document.querySelectorAll('#qwerty button');
  for (let i = 0; i < keyBtns.length; i++) {
    keyBtns[i].className = '';
    keyBtns[i].removeAttribute('disabled');
  }
}

function resetLives() {
  let lives = document.querySelectorAll('#scoreboard ol li');
  for (let i = 0; i < lives.length; i++) {
    replaceHearts('#scoreboard ol li', i, 'tries', 'liveHeart');
  }
}


mainBtn.addEventListener('click', () => {
  setOverlay('hidden');
  deletePrevPhrase();
  const phraseArray = getRandomPhraseAsArray(phrases);
  addPhraseToDisplay(phraseArray);
  resetKeyboard();
  resetLives();
  missed = 0;
});

 