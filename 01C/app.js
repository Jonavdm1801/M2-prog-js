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

        let isplayerdead = false
        let google = "website"
        let prijs = 3.50

        console.log(isplayerdead);
        console.log(google);
        console.log(prijs);


        this. isplayerdead = false
        this. google = "website"
        this. prijs = 3.50
        


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


console.log(app.isplayerdead);
console.log(app.google);
console.log(app.prijs);