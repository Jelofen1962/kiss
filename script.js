const instructions = [
  "بزن رو بعدی",
  "به امیر نگاه کن",
  "به چشماش خیره شو و هروقت گفت بزن رو بعدی",
  "حالا چشماتو ببند و تا ۳ بلند بشمار!",
  "چک پوینت!",
  "همو بوسیدیممممم! اولین بوسه‌مون مبارک ❤️"
];

let step = 0;
const instructionText = document.getElementById("instruction");
const button = document.getElementById("nextButton");

button.addEventListener("click", () => {
  step++;
  if (step < instructions.length) {
      instructionText.textContent = instructions[step];
  } else {
      instructionText.textContent = "تو نازترین دختر دنیایی قلبمممم ! 💖";
      button.style.display = "none"; // Hide button at the end
  }
});
