function createRays() {
    const header = document.querySelector('header');
    const rayCount = 30;
  
    for (let i = 0; i < rayCount; i++) {
      const ray = document.createElement('div');
      ray.classList.add('ray');
      ray.style.animationDelay = `${Math.random() * 5}s`;
      header.appendChild(ray);
    }
  }
  
  createRays();
  