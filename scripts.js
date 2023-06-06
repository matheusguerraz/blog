/* function createLightning() {
  const lightning = document.getElementById('lightning');
  const colors = ['#ff00ff', '#ff99ff', '#cc33cc'];
  
  for (let i = 0; i < 10; i++) {
    const strike = document.createElement('div');
    strike.className = 'lightning-strike';
    
    const color = colors[Math.floor(Math.random() * colors.length)];
    strike.style.background = `radial-gradient(${color}, transparent)`;
    
    const lightningImage = document.createElement('img');
    lightningImage.src = 'lightning.svg';
    lightningImage.classList.add('lightning-image');
    strike.appendChild(lightningImage);
    
    lightning.appendChild(strike);
  }
}

createLightning();
 */