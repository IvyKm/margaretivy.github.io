const words = ["Junior Product Manager", "UX Designer", "Creative Thinker"];
let i = 0;
const typewriter = document.querySelector('.typewriter');

function rotateWords() {
  typewriter.style.animation = 'none';
  void typewriter.offsetWidth;
  typewriter.textContent = words[i];
  typewriter.style.animation = 'typing 3s steps(30, end), blink 0.75s step-end infinite';
  i = (i + 1) % words.length;
}

setInterval(rotateWords, 4000);
rotateWords();
