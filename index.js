const containerEle = document.querySelector(".container");

const careers = ["Game Dev", "App Dev", "Freelancer", "Web Dev"];

let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
    characterIndex++;
    containerEle.innerHTML = `
    <h1>I am ${careers[careerIndex].slice(0, 1) === "A" ? "an" : "a"} ${careers[careerIndex].slice(0, characterIndex)}</h1>
    `;
    if(characterIndex === careers[careerIndex].length) {
        careerIndex++;
        characterIndex = 0;
    }

    if(careerIndex  === careers.length) {
        careerIndex = 0;
    }
    setTimeout(updateText, 400);
}

