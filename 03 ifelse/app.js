class App
{

    runApplication()
    {
        console.log("hello world!");

        let title = document.getElementById("newstitle");
        console.log("title");

        let random = Math.random();
        console.log(random);
        if(random < 0.2)
        {
            title.style.backgroundColor = "#FF0000";
        }

        else if(random > 0.2 && random < 0.6)
        {
            title.style.backgroundColor = "#00FF00";
        }

        else if(random > 0.6 && random < 0.75)
        {
            title.style.backgroundColor = "#0000FF";
        }

        else(random > 0.75)
        {
            title.style.backgroundColor = "#FFEEEE";
        }
    }
}
let app = new App();
app.runApplication();
