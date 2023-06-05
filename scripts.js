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
    const controlX1 = startX + Math.random() * 100 - 50;
    const controlY1 = startY + Math.random() * 100 + 50;
    const controlX2 = endX + Math.random() * 100 - 50;
    const controlY2 = endY + Math.random() * 100 + 50;

    context.beginPath();
    context.moveTo(startX, startY);
    context.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY);
    context.strokeStyle = 'rgba(255, 0, 255, 0.7)';
    context.lineWidth = 4;
    context.stroke();
  }

  requestAnimationFrame(drawLightning);
}

drawLightning();
