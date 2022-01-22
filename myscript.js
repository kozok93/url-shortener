
//konstanty pro hamburger menu

hamburgerBtn = document.getElementById('hamburger-btn');
mobileMenu = document.getElementById('menu-mobile')
illustrationWorking = document.getElementById('illustration-working-man');

//  Hamburger toggle on/off

hamburgerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('is-active');
  illustrationWorking.classList.toggle('is-menu-active');
})
// konstanty pro validaci inputu

const inputShortener = document.getElementById('input-shortener');
const errorMessage = document.getElementById('error-notice');

// Regexy pro validaci inputu

const inputRegexHttps = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
const validatedRegex = new RegExp(inputRegexHttps);

//konstanta pro integraci API

const buttonShortener = document.getElementById('button-shortener');
const shortLinkBox = document.getElementById('shortener-box-results')
const shortLinkParagraph = document.getElementById('paragraph-shortened-link')
const unshortenedLinkParagraph = document.getElementById('paragraph-unshortened-link')

// konstanta button, který zkopíruje krátký link
 const copyBtn = document.getElementById('copy-btn');

// Event listener pro klávesy
inputShortener.addEventListener('keyup', () => {
    // input validation
    if (inputShortener.value.match(validatedRegex)) {
      inputShortener.style.outline = '3px solid green'
      errorMessage.style.display = "none";

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
      getRequest();
      event.preventDefault();
    }
    else {
      event.preventDefault();
    }
})
// Api cally  get
  const getRequest = async () => {
  const url = 'https://api.shrtco.de/v2/shorten?url=' + inputShortener.value;
  const response =  await fetch(url);
  const data = await response.json();
  const shortcode = data.result.short_link
  shortLinkBox.style.display = "block";
  shortLinkParagraph.innerHTML = `${shortcode}`
  unshortenedLinkParagraph.innerHTML = `${inputShortener.value}`;
   }

// button, který zkopíruje krátký link na kliknutí nebo touch na mobilu

// event listener pro button

copyBtn.addEventListener('click', (e) => {

    navigator.clipboard.writeText(`${shortLinkParagraph.innerHTML}`);
    copyBtn.innerHTML = 'Copied';
    copyBtn.style.background = 'purple';
})
