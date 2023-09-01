const coloredReindeerBuilder = function () {
    const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
    const colors = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"];

    let coloredReindeer = [];
    for (i = 0; i < reindeer.length; i++) {
        let newdeer 
        function createDeer(name, color) {
            newdeer = {
                name: name,
                color: color,
            };
            return newdeer
        }
        let pushthis = createDeer(reindeer[i], colors[i])
        coloredReindeer.push(pushthis);
    }
    return coloredReindeer    

}
let mydeer = coloredReindeerBuilder()
console.log(mydeer)

let article = document.getElementById("colored-reindeer")

let mySection = ("")
for (i = 0; i < mydeer.length; i++) {
    mySection += (`<section style = "color: ${mydeer[i].color}"> ${mydeer[i].name} </section>`)
}

article.innerHTML = mySection