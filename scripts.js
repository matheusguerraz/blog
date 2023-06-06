const texts = {
  introduct: "Hi, my name is",
  name: "Matheus Guerra.",
  resume: "I'm a Python Backend Developer",
  description: "I have skills in web development with Django, experience with task automation and data scraping."
};

function typeWriter(element, text, delay = 100) {
  let charIndex = 0;

  function type() {
    if (charIndex < text.length) {
      element.textContent += text.charAt(charIndex);
      charIndex++;
      setTimeout(type, delay);
    }
  }

  type();
}

const elements = document.querySelectorAll("#centered-text p");
const ids = Object.keys(texts);

function writeLines(index) {
  if (index < elements.length) {
    const element = elements[index];
    const text = texts[ids[index]];
    typeWriter(element, text, 100);
    setTimeout(() => writeLines(index + 1), text.length * 100 + 500);
  }
}

writeLines(0);  