let center = document.querySelector(".center");
let lower = document.getElementById("lower");
let middle = document.getElementById("middle");
let upper = document.getElementById("upper");

// 141 colors
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

    let index = randomRange(0, 141); //starts function with a random color in the array

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

/*
    let play = setInterval(
        function() {
            flashColors() 
    }, 6000); //runs funtion every 6 seconds

    center.onclick = function() {

        if (middle.innerHTML == "pause") {
            clearInterval(play);
            middle.innerHTML = "play";

        } else if (middle.innerHTML == "play") {
            flashColors();
            middle.innerHTML = "pause";
            play = setInterval(function () { flashColors() }, 6000);
        }
    }
*/

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
    play = setInterval(flashColors, 6000); //runs funtion every 6 seconds
}


//cycle background color
function backgroundColors () {
    
    let index = randomRange(0, 141); //starts function with a random color in the array
    let lowerHalf = document.querySelector(".lower-half");
    let upperHalf = document.querySelector(".upper-half");

    let play = setInterval( 
        function () { 
            color() 
    }, 5000); //automatically changes color every 5 seconds


    //advances background color array
    function color () {
        upper.innerHTML = colorArray[index];
        upperHalf.style.backgroundColor = colorArray[index];

        index++;
        reset();

        lower.innerHTML = colorArray[index];
        lowerHalf.style.backgroundColor = colorArray[index];
    }
    color();
    
    //resets index if array max is reached ( >= prevents undefined from being displayed )
    function reset () {
        if (index >= colorArray.length) {
            index = 0;
        }
    }

    center.onclick = function() {

        if (middle.innerHTML == "pause") {
            clearInterval(play);
            middle.innerHTML = "play";

        } else if (middle.innerHTML == "play") {
            color();
            middle.innerHTML = "pause";
            play = setInterval(function () { color() }, 5000);
        }
    }

}

//runs function after html document loads
window.onload = function() {

    backgroundColors();
    flashingWords();
}
