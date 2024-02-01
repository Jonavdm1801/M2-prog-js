class App
{
    runApplication()
    {
     
        console.log("Hello world!");
        let arr = ["artiest1", "Artiest2", "etc"]
        console.log(arr)

        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            console.log(i + ": "+ element)
        }

        for (let i = 0; i < 5; i++) {
            const element = arr[i];
            arr.push("bob dylan")
            arr.push("prince")
            console.log(i + ": "+ element)
        }

        for (let i = 0; i < 5; i++) {
            const element = arr[i];
            arr.push("bob dylan")
            arr.push("prince")
            console.log(i + ": "+ element)
            let indexToRemove = arr.indexOf("bob dylan")
            let indexToRemove1 = arr.indexOf("prince")
            arr.splice(indexToRemove,1)
            arr.splice(indexToRemove1,5)
            arr.push("big bad voodoo daddy")
            arr.push("megadeth")  
        }
    }
}
let app = new App();
app.runApplication();