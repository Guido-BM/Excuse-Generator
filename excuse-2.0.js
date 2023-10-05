const buttonGenerate = document.getElementById("generateExcuse");
const languageEn = document.getElementById("languageEn");
const languageEs = document.getElementById("languageEs");
const excuseDisplay = document.getElementById("randomExcuse");

buttonGenerate.addEventListener("click", excuseOut);
languageEn.addEventListener("click", excuseOut);
languageEs.addEventListener("click", excuseOut);

const excuseParts = [
  [
    ["Mi unicornio mascota", "Un loro parlante", "Elvis Presley"],
    [
      "y yo fuimos a la luna juntos",
      "y yo formamos una banda de rock",
      "y yo abrimos un parque temático",
    ],
    [
      "mientras cabalgaba en un pato de goma gigante",
      "con solo una cuchara y un pollo de goma.",
      "mientras hacía malabares con antorchas ardientes.",
    ],
  ],
  [
    ["My pet unicorn", "A talking parrot", "Elvis Presley"],
    [
      "and I went to the moon together",
      "and I started a rock band",
      "and I opened a theme park",
    ],
    [
      "while riding on a giant rubber duck",
      "with only a spoon and a rubber chicken.",
      "while juggling flaming torches.",
    ],
  ],
];

const random = (excuseParts) => {
  const randomIndex = Math.floor(Math.random() * excuseParts.length);
  return excuseParts[randomIndex];
};

const generateExcuse = (selectedLanguage) => {
  const excuseIndex = selectedLanguage === "en" ? 1 : 0;
  const randomPart1 = random(excuseParts[excuseIndex][0]);
  const randomPart2 = random(excuseParts[excuseIndex][1]);
  const randomPart3 = random(excuseParts[excuseIndex][2]);

  return selectedLanguage === "en"
    ? "You will not believe this but:" +
        " " +
        randomPart1 +
        " " +
        randomPart2 +
        " " +
        randomPart3
    : "No lo creerás, pero: " +
        " " +
        randomPart1 +
        " " +
        randomPart2 +
        " " +
        randomPart3;
};

function excuseOut() {
  const selectedLanguage = languageEn.checked ? "en" : "es";
  const excuse = generateExcuse(selectedLanguage);
  excuseDisplay.textContent = excuse;
}
