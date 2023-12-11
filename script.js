let farben = ["blue", "orange", "cyan", "red", "green", "lilac", "lemon", "magenta", "lime", "beige"];


function farbeAendern(text){
    let randomNum = Math.floor(Math.random() * (farben.length -1));             //farben[]
    let zufaelligeFarbe = farben[randomNum];
    
    text.style.color = zufaelligeFarbe;
}

let textElement = document.querySelector(".count1"); //Array
setInterval(()=>farbeAendern(textElement), 4000);

let textElement2 = document.querySelector(".count2"); //Array
setInterval(()=>farbeAendern(textElement2), 3000);

let textElement3 = document.querySelector(".count3"); //Array
setInterval(()=>farbeAendern(textElement3), 7000);
