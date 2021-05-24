const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
//Círculo
let CxPosition = 50;
let CyPosition = 50;
let CxVelocidad = getRandomArbitrary(-15, 15);
let CyVelocidad = getRandomArbitrary(-15, 15);
//Cuadrado
let CdxPosition = 50;
let CdyPosition = 50;
let CdxVelocidad = getRandomArbitrary(-15, 15);
let CdyVelocidad = getRandomArbitrary(-15, 15);


function animation() {
    //Animación círculo
    ctx.clearRect(0, 0, canvas.width,canvas.height);
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.arc(CxPosition, CyPosition,50, 0, 2 * Math.PI );
    ctx.fill();
    ctx.closePath();
    if (CxPosition + CxVelocidad > canvas.width-50 || CxPosition + CxVelocidad < 50) {
        CxVelocidad = -CxVelocidad;
    }
    
    if (CyPosition + CyVelocidad > canvas.height-50 || CyPosition + CyVelocidad < 50) {
        CyVelocidad = -CyVelocidad;
    }
    CxPosition += CxVelocidad;
    CyPosition += CyVelocidad; 
    //Animación cuadrado
    ctx.fillStyle = 'blue';
    ctx.fillRect(CdxPosition, CdyPosition, 100,100); 
    if (CdxPosition + CdxVelocidad > canvas.width-100 || CdxPosition  < 0) {
        CdxVelocidad = -CdxVelocidad;
    }
    
    if (CdyPosition + CdyVelocidad > canvas.height-100 || CdyPosition < 0) {
        CdyVelocidad = -CdyVelocidad;
    }
    CxPosition += CxVelocidad;
    CyPosition += CyVelocidad; 
    CdxPosition += CdxVelocidad;
    CdyPosition += CdyVelocidad; 
    window.requestAnimationFrame(animation);
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

window.requestAnimationFrame(animation); 