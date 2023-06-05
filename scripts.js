function createLightning() {
  const lightning = document.getElementById('lightning');
  const colors = ['#ff00ff', '#ff99ff', '#cc33cc'];
  
  for (let i = 0; i < 10; i++) {
    const strike = document.createElement('div');
    strike.className = 'lightning-strike';
    
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    const endX = Math.random() * 100;
    const endY = Math.random() * 100;
    
    const color = colors[Math.floor(Math.random() * colors.length)];
    strike.style.background = `radial-gradient(${color}, transparent)`;
    
    strike.style.clipPath = "url('C:\Users\usuario\blog\lightning.svg')";
    
    lightning.appendChild(strike);
  }
}

createLightning();
