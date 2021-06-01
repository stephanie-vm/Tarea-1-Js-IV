const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let SqxPosition = 50; 
let SqyPosition = 50;
let SqxVelocidad = getRandomArbitrary(-15, 15);
let SqyVelocidad = getRandomArbitrary(-15, 15);
let CxPosition = 50;
let CyPosition = 50;
let CxVelocidad = getRandomArbitrary(-15, 15);
let CyVelocidad = getRandomArbitrary(-15, 15);
const random = new randomValue(10, 20);
// class square {
//     constructor()
// }

function animationSquare() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(SqxPosition, SqyPosition, 100,100); 
    if (SqxPosition + SqxVelocidad > canvas.width-100 || SqxPosition  < 0) {
        SqxVelocidad = -SqxVelocidad;
    }
    
    if (SqyPosition + SqyVelocidad > canvas.height-100 || SqyPosition < 0) {
        SqyVelocidad = -SqyVelocidad;
    }
    CxPosition += CxVelocidad;
    CyPosition += CyVelocidad; 
    SqxPosition += SqxVelocidad;
    SqyPosition += SqyVelocidad; 
    window.requestAnimationFrame(animationSquare);
}

function animationCircle() {
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
    window.requestAnimationFrame(animationCircle);
}

class randomValue {
    constructor(min, max) {
        this.min = min;
        this.max = max;
    }
    result() {
        return Math.random() * (max - min) + min;
    }
}


window.requestAnimationFrame(animationCircle);
window.requestAnimationFrame(animationSquare); 


