class App
{
    runApplication()
    {
        console.log("hello world!");
        let canvas=document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        let kleur = "pink"

        let random = Math.random();
        console.log(random);

        if (random < 0.5) {
            kleur = "black";
        } else {
            kleur = "gold";
        }

        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(600,400);
        g.lineTo(800,300);
        g.lineTo(700,200);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(300,100);
        g.lineTo(200,300);
        g.lineTo(600,400);
        g.lineTo(700,200);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()


        g.beginPath()
        g.fillStyle = "silver";
        g.moveTo(600,400);
        g.lineTo(600,600);
        g.lineTo(200,500);
        g.lineTo(200,300);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(600,400);
        g.lineTo(800,300);
        g.lineTo(800,500);
        g.lineTo(600,600);
        g.closePath();
        g.stroke();
        g.fill()
    
        g.beginPath()
        g.fillStyle = kleur;
        g.moveTo(650,450);
        g.lineTo(780,390);
        g.lineTo(780,485);
        g.lineTo(650,550);
        g.closePath();
        g.stroke();
        g.fill()
        ctx.fillRect(20, 20, 150, 100);
        
    }
}

let app = new App();
app.runApplication();