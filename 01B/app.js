class App
{
    runApplication()
    {
        this. greeting ="Starting up";

        console.log("hello world!")
        
        this. eenVariableNaam = "hello"
        this. appNaam = "demoApp"
        this. versienummer = 0.2
        this. versiedatum = 30-11-2023
        this. autheur = "Jona"
        this. copyright = "Jona"
        this. distributeur = "Jona"
        this. darkmode = false


    }
}
let app = new App();
app.runApplication();

console.log(app.greeting);
console.log(app.appNaam);
console.log(app.versiedatum);
console.log(app.autheur);
console.log(app.copyright);
console.log(app.distributeur);
console.log(app.darkmode);
