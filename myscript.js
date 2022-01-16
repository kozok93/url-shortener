//konstanty pro hamburger menu

hamburgerBtn = document.getElementById('hamburger-btn');
mobileMenu = document.getElementById('menu-mobile')
illustrationWorking = document.getElementById('illustration-working-man')

//  Hamburger toggle on/off

hamburgerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('is-active');
  illustrationWorking.style.display = "none";
})

// konstanty pro validaci inputu


const inputShortener = document.getElementById('input-shortener');
const errorMessage = document.getElementById('error-notice');


// Regexy pro validaci inputu

const inputRegexHttps = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
const validatedRegex = new RegExp(inputRegexHttps);

//konstanty pro integraci API

const buttonShortener = document.getElementById('button-shortener');
const form = document.getElementById('shortener-form');

// Event listener pro klávesy
inputShortener.addEventListener('keyup', () => {
    // input validation
    if (inputShortener.value.match(validatedRegex)) {
      inputShortener.style.outline = '3px solid green'
      errorMessage.style.display = "none";
      //return false
    }
    else {
      inputShortener.style.outline = '5px solid red';
      errorMessage.style.display = 'block';
    }
})

//event listener pro shorten it button

buttonShortener.addEventListener('click', (event) => {
    // input validation
    if (inputShortener.value.match(validatedRegex)) {
      inputShortener.style.outline = '3px solid green'
      errorMessage.style.display = "none";
    }
    else {
      inputShortener.style.outline = '5px solid red';
      errorMessage.style.display = 'block';
      console.log(inputShortener.value)
      event.preventDefault();
    }
})
