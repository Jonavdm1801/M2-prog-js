class App
{
    runApplication()
    {
        this. greeting ="Starting up";

        console.log("hello world!")

        let canvas = document.getElementById("canvasId");

        console.log(canvas)

        let g = canvas.getContext("2d");
        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(600,400);
        g.lineTo(700,200);
        g.lineTo(800,300);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(200,300);
        g.lineTo(300,100);
        g.lineTo(700,200);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "silver";
        g.moveTo(200,300);
        g.lineTo(200,500);
        g.lineTo(600,600);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(800,300);
        g.lineTo(800,500);
        g.lineTo(600,600);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "brown";
        g.moveTo(240,510);
        g.lineTo(240,340);
        g.lineTo(300,355);
        g.lineTo(300,525);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "cyan";
        g.moveTo(340,480);
        g.lineTo(340,380);
        g.lineTo(500,420);
        g.lineTo(500,520);
        g.closePath();
        g.stroke();
        g.fill()

    }
}
let app = new App();
app.runApplication();