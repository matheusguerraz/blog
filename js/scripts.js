document.addEventListener('DOMContentLoaded', function() {
  var cursor = document.querySelector('.cursor');
  var cursorSize = cursor.offsetWidth;

  document.addEventListener('mousemove', function (e) {
    var cursorPositionX = e.pageX - (cursorSize / 1);
    var cursorPositionY = e.pageY - (cursorSize / 1);

    cursor.style.left = cursorPositionX + 'px';
    cursor.style.top = cursorPositionY + 'px';
  });

  document.addEventListener('mouseenter', function () {
    cursor.classList.add('active');
  });

  document.addEventListener('mouseleave', function () {
    cursor.classList.remove('active');
  });
});



const paragraphs = document.querySelectorAll('.container p');
let index = 0;

function typeParagraph() {
  if (index < paragraphs.length) {
    const paragraph = paragraphs[index];
    paragraph.style.display = 'block'; // Exibe o parágrafo

    const text = paragraph.innerHTML;
    const fullText = text;
    let currentText = '';
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        paragraph.innerHTML = currentText;
        currentIndex++;
      } else {
        clearInterval(interval); // Limpa o intervalo quando o texto estiver totalmente digitado
        index++; // Passa para o próximo parágrafo
        typeParagraph(); // Chama a função novamente para o próximo parágrafo
      }
    }, 100); // Velocidade de digitação (ajuste conforme necessário)
  }
}

// Oculta o conteúdo inicialmente
paragraphs.forEach((paragraph) => {
  paragraph.style.display = 'none';
});

typeParagraph(); // Inicia o efeito de digitação




document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.container');

  if (container && container.innerHTML.trim() === '') {
    // O container está vazio, preenche com as informações da constante texts
    const elements = Object.keys(texts).map(function(key) {
      return `<p>${texts[key]}</p>`;
    });

    container.innerHTML = elements.join('');
  }

  // Event listener para o link "Home"
  const homeLink = document.getElementById('homeLink');
  homeLink.addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    openTab('index.html'); // Chama a função openTab com o parâmetro 'index'
  });

  // Event listener para o link "About"
  const aboutLink = document.getElementById('aboutLink');
  aboutLink.addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    openTab('about'); // Chama a função openTab com o parâmetro 'about'
  });

  // Event listener para o link "Projects"
  const projectsLink = document.getElementById('projectsLink');
  projectsLink.addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    openTab('Projects'); // Chama a função openTab com o parâmetro 'Projects'
  });
});

function openTab(tabName) {
  const xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (xhr.status === 200) {
      document.body.innerHTML = xhr.responseText;
    } else {
      console.error('Erro ao carregar o arquivo:', xhr.status);
    }
  };
  xhr.open('GET', `${tabName}.html`, true);
  xhr.send();
}