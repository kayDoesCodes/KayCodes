const containElement = document.querySelector('.container');

const careers = ["YouTuber.", "Developer.", "Designer.", "Engineer.", "Artist.", "Instructor."];

let careersIndex = 0;

let characterIndex = 0;

const vowels = ["a","e","i","o","u","A","E","I","O","U"];

const careersText = () => {
  const firstChar = careers[careersIndex].charAt(0);
  if (vowels.includes(firstChar)) {
    return "An";
  } else {
    return "A";
  }
};

updateText();

function updateText() {
  characterIndex++;
  containElement.innerHTML = `
  <h1>I Am ${careersText()} ${careers[careersIndex].slice(0, characterIndex).toUpperCase()}</h1>
  `;
  if (characterIndex === careers[careersIndex].length) {
    careersIndex++;
    characterIndex = 0;
  }

  if(careersIndex === careers.length) {
    careersIndex = 0;
  }

  setTimeout(updateText, 400)
};