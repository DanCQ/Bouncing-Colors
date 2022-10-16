const center = document.querySelector(".center");
const lower = document.querySelector(".lower");
const middle = document.querySelector(".middle");
const upper = document.querySelector(".upper"); 

//141 colors counting 0, so the minimum is 0, the maximum is 140
const colorArray = [
    "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", 
    "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", 
    "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", 
    "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", 
    "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", 
    "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue",
    "firebrick", "floralwhite", "forestgreen", "fuchsia", 
    "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", 
    "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki",
    "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", 
    "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink", "lightsalmon", "lightseagreen",
    "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", 
    "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen",
    "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", 
    "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", 
    "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", 
    "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", 
    "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", 
    "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", 
    "slateblue", "slategray", "snow", "springgreen", "steelblue", 
    "tan", "teal", "thistle", "tomato", "turquoise", "violet", 
    "wheat", "white", "whitesmoke", "yellow", "yellowgreen"
];


//Returns a random number within a chosen range
function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
//Math.floor() rounds down to the nearest whole number  e.i. 10 = 0 - 9  
//Math.random() returns a random decimal between 0 - 0.99
}


//flashes color for words in sequential order
function flashingWords() {

    let index = randomRange(0, 140); //starts function with a random color in the array

    //resets index if array max is reached
    function reset () {
        if (index >= colorArray.length) {
            index = 0;
        }
    }

    function on(name) {
        center.style.backgroundColor = colorArray[index];
        name.style.color = colorArray[index];
        name.style.textShadow = "3px 3px 3px #6a287e";
        index++;
        reset();
    }

    function off(name) {
        name.style.color = "";
        name.style.textShadow = "";
    }

    function flashColors() {
        on(upper); //starts
        setTimeout(function() { 
            off(upper);
        }, 2000); //stops

        setTimeout(function() {
            on(middle);
            setTimeout(function() {
                off(middle);
            }, 2000); //stops
        }, 2000); //starts

        setTimeout(function() {
            on(lower);
            setTimeout(function() {
                off(lower);
            },2000); //stops
        }, 4000); //starts
    }
    flashColors();
    setInterval(flashColors, 6000); //runs funtion every 6 seconds
}


//cycle background color
function backgroundColors () {
    
    let i = randomRange(0, 140); //starts function with a random color in the array
    let j = randomRange(0, 140); //starts function with a random color in the array
    let lowerHalf = document.querySelector(".lower-half");
    let upperHalf = document.querySelector(".upper-half");
    let heavyBoop = new Audio("assets/heavy_boop.mp3");
    let lightBoop = new Audio("assets/light_boop.mp3");

    let lowerLeft = document.querySelector(".lower-left");
    let lowerRight = document.querySelector(".lower-right");
    let upperLeft = document.querySelector(".upper-left");
    let upperRight = document.querySelector(".upper-right");

    let play = setInterval(function() { color() }, 5000); //automatically changes color every 5 seconds


    //advances background color array
    function color () {
        upper.innerHTML = colorArray[i];
        upperHalf.style.backgroundColor = colorArray[i];
        i++;

        lower.innerHTML = colorArray[j];
        lowerHalf.style.backgroundColor = colorArray[j];
        j++;
        
        reset();
    }
    color();
    
    //resets index if array max is reached ( >= prevents undefined from being displayed )
    function reset () {
        if (i >= colorArray.length) {
            i = 0;
        }
        if (j >= colorArray.length) {
            j = 0;
        }
    }

    center.onclick = function() {

        heavyBoop.play();

        if (middle.innerHTML == "pause") {
            clearInterval(play);
            middle.innerHTML = "play";

        } else if (middle.innerHTML == "play") {
            color();
            middle.innerHTML = "pause";
            play = setInterval(function () { color() }, 5000);
        }
    }

    lowerLeft.onclick = function() {
        clearInterval(play);
        middle.innerHTML = "play";
        lightBoop.play();

        j--;
        if(j == -1) {
            j = 140;
        }
        lower.innerHTML = colorArray[j];
        lowerHalf.style.backgroundColor = colorArray[j];
    }

    lowerRight.onclick = function() {
        clearInterval(play);
        middle.innerHTML = "play";
        lightBoop.play();

        j++;
        if(j == 141) {
            j = 0;
        }
        lower.innerHTML = colorArray[j];
        lowerHalf.style.backgroundColor = colorArray[j];
    }

    upperLeft.onclick = function() {
        clearInterval(play);
        middle.innerHTML = "play";
        lightBoop.play();

        i--;
        if(i == -1) {
            i = 140;
        }
        upper.innerHTML = colorArray[i];
        upperHalf.style.backgroundColor = colorArray[i];
    }

    upperRight.onclick = function() {
        clearInterval(play);
        middle.innerHTML = "play";
        lightBoop.play();

        i++;
        if(i == 141) {
            i = 0;
        }
        upper.innerHTML = colorArray[i];
        upperHalf.style.backgroundColor = colorArray[i];
    }

}


//runs function after html document loads
window.onload = function() {

    backgroundColors();
    flashingWords();
}
