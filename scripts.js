const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawLightning() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < 10; i++) {
    const startX = Math.random() * canvas.width;
    const startY = 0;
    const endX = Math.random() * canvas.width;
    const endY = canvas.height;
    const controlX1 = Math.random() * canvas.width;
    const controlY1 = Math.random() * canvas.height;
    const controlX2 = Math.random() * canvas.width;
    const controlY2 = Math.random() * canvas.height;

    context.beginPath();
    context.moveTo(startX, startY);
    context.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY);
    context.strokeStyle = 'rgba(117, 15, 130, 0.5)';
    context.lineWidth = 2;
    context.stroke();
  }

  requestAnimationFrame(drawLightning);
}

drawLightning();
