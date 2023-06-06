const texts = {
  introduct: "Hi, my name is",
  name: "Matheus Guerra.",
  resume: "I'm a Python Backend Developer",
  description: "I have skills in web development with Django, experience with task automation and data scraping."
};

function typeWriter(element, text, delay = 60) {
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
    setTimeout(() => writeLines(index + 1), text.length * 100  + 100);
  }
}

writeLines(0);  

function openTab(tabName) {
  // Cria uma nova requisição AJAX
  const xhr = new XMLHttpRequest();

  // Define o callback a ser chamado quando a requisição estiver concluída
  xhr.onload = function() {
    if (xhr.status === 200) {
      // Remove o conteúdo atual do <body>
      document.body.innerHTML = '';

      // Insere o conteúdo do arquivo no <body>
      document.body.innerHTML = xhr.responseText;
    } else {
      console.error('Erro ao carregar o arquivo:', xhr.status);
    }
  };

  // Define o método e o URL da requisição
  xhr.open('GET', `${tabName}.html`, true);

  // Envia a requisição
  xhr.send();
}


