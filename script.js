function init() {
    //Varaiables generales, su uso se ejecuta en varias secciones del código
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    //Éstas variables están declaradas específicamente para el uso del cuadrado, sq= square
    let SqxPosition = 50; 
    let SqyPosition = 50;
    let SqxVelocity = randomValues(-15, 15);
    let SqyVelocity = randomValues(-15, 15);

    //Éstas variables están declaradas específicamente para el uso del círculo, c= circle 
    let CxPosition = 50;
    let CyPosition = 50;
    let CxVelocity = randomValues(-15, 15);
    let CyVelocity = randomValues(-15, 15);

    //  Ésta animación permite que el cuadrado rebote en cada uno de los laterales del canvas
    function animationSquare() {
        if (SqxPosition + SqxVelocity > canvas.width-100 || SqxPosition  < 0) {
            SqxVelocity = -SqxVelocity;
        }
        
        if (SqyPosition + SqyVelocity > canvas.height-100 || SqyPosition < 0) {
            SqyVelocity = -SqyVelocity;
        }
        window.requestAnimationFrame(animationSquare);
    }

    //  Ésta animación permite que el círculo rebote en cada uno de los laterales del canvas
    function animationCircle() {
        if (CxPosition + CxVelocity > canvas.width-50 || CxPosition + CxVelocity < 50) {
            CxVelocity = -CxVelocity;
        }
        
        if (CyPosition + CyVelocity > canvas.height-50 || CyPosition + CyVelocity < 50) {
            CyVelocity = -CyVelocity;
        }
        window.requestAnimationFrame(animationCircle);
    }
    //  Función que ejecuta los objetos del cuadrado y el círculo
    //  por medio de new y llama a sus respectivas funciones para crear las figuras en el 
    //  canvas
    function generalControlAnimation() {
        ctx.clearRect(0, 0, canvas.width,canvas.height);
        const square = new objectSquare(SqxPosition, SqyPosition, SqxVelocity, SqyVelocity);
        const circle = new objectCircle(CxPosition, CyPosition, CxVelocity, CyVelocity);

        square.createSquare();
        circle.createCircle();
        figuresCollision();
        CxPosition += CxVelocity;
        CyPosition += CyVelocity; 
        SqxPosition += SqxVelocity;
        SqyPosition += SqyVelocity; 

        window.requestAnimationFrame(generalControlAnimation);
    }
    //Objeto para almacenar los valores del cuadrado, 
    //se utiliza un método para relizar la acción de crear el cuadrado
    class objectSquare {
        constructor (SqxPosition, SqyPosition, SqxVelocidad, SqyVelocidad){
            this.SqxPosition = SqxPosition;
            this.SqyPosition = SqyPosition;
            this.SqxVelocidad = SqxVelocidad;
            this.SqyVelocidad = SqyVelocidad;
        }
        createSquare() {
            ctx.fillStyle = 'blue';
            ctx.fillRect(SqxPosition, SqyPosition, 100,100); 
        }
    }

    //Objeto para almacenar los valores del círculo, 
    //se utiliza un método para relizar la acción de crear el círculo
    class objectCircle {
        constructor (CxPosition, CyPosition, CxVelocidad, CyVelocidad) {
            this.CxPosition = CxPosition;
            this.CyPosition = CyPosition;
            this.CxVelocidad = CxVelocidad;
            this.CyVelocidad = CyVelocidad;
        }
        createCircle(){
            ctx.beginPath();
            ctx.fillStyle = 'red';
            ctx.arc(CxPosition, CyPosition,50, 0, 2 * Math.PI );
            ctx.fill();
            ctx.closePath();
        }
    }
    //función para la colisón entre figuras
    function figuresCollision() {
        let dx = CxPosition - CxPosition;
        let dy = CyPosition - CyPosition;
        let distance = Math.sqrt((dx * dx) + (dy * dy));

        if (distance <= 100) {
            if (Math.abs(dx)<= 100 && Math.abs(dx) > 75) {
                SqxVelocity = -SqxVelocity;
                CxVelocity = -CxVelocity;
            }
        }
        if (Math.abs(dy)<= 100 && Math.abs(dy) > 75) {
            SqyVelocity = -SqyVelocity;
            CyVelocity = -CyVelocity;
        }
        window.requestAnimationFrame(figuresCollision); 
    }
    // ésta función genera valores random que después son utilizados
    // en las coordenadas para generara posiciones diferentes de las figuras
    // dentro del canvas
    function randomValues (min, max) {
        return Math.random() * (max - min) + min;
    }
    //Llamado para realizar las animaciones respectivas
    window.requestAnimationFrame(animationSquare);  
    window.requestAnimationFrame(animationCircle);
    window.requestAnimationFrame(generalControlAnimation);
    window.requestAnimationFrame(figuresCollision); 
}

init();