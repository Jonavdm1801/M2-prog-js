class App
{
    runApplication()
    {
        console.log("hello world");
    }

    newClassFunction()
    {
        console.log("hello world in de niuewClassFunction");

    }

    anotherFunctionWithArguments(aArgument)
    {
        console.log("kom maar met je argumanet");
        console.log("hier:");
        console.log(aArgument);
    }
}

let app = new App();
app.newClassFunction();

app.anotherFunctionWithArguments("mijn argument is iets...");