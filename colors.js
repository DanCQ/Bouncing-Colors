let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");

// 141 colors
const colorArray = [
    "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", 
    "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", 
    "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", 
    "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", 
    "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", 
    "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue",
    "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", 
    "gray", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki",
    "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", 
    "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink", "lightsalmon", "lightseagreen",
    "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", 
    "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen",
    "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", 
    "mintcream", "mistyrose", "moccasin","navajowhite", "navy", 
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
function bouncy() {

    let index = randomRange(0, 141); //starts function with a random color in the array

    //resets index if array max is reached
    function reset () {
        if (index >= colorArray.length) {
            index = 0;
        }
    }
    
    setInterval(flashColors, 2500); //runs funtion every 2.5 seconds

    function on(name) {
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
        on(first); //starts
        setTimeout(function(){ 
            off(first);
        }, 500); //stops

        setTimeout(function(){
            on(second);
            setTimeout(function(){
                off(second);
            }, 500); //stops
        }, 1000); //starts

        setTimeout(function(){
            on(third);
            setTimeout(function(){
                off(third);
            },1000); //stops
        }, 1500); //starts
    }
}


//cycle background color
function background () {
    
    let body = document.querySelector(".main");
    let index = randomRange(0, 141); //starts function with a random color in the array

    //resets index if array max is reached
    function reset () {
        if (index >= colorArray.length) {
            index = 0;
        }
        third.innerHTML = colorArray[index];
    }
    //advances background color array
    function color () {
        first.innerHTML = colorArray[index];
        body.style.backgroundColor = colorArray[index];
        index++;
        reset();
        
    }
    setInterval(function () { color() }, 5000); //automatically changes color every 5 seconds
    
    setTimeout(function() { second.innerHTML = "next" }, 5000); 

    //advances array count on window click
    window.onclick = function () {
        body.style.backgroundColor = colorArray[index];
        index++;
        reset();
    };
    //advances array count on mouseout
    window.onmouseout = function() {
        body.style.backgroundColor = colorArray[index];
        setTimeout(function() { index++ }, 500);
        reset();
    };
    //advances array count on mouseover
    window.onmouseover = function () {
        body.style.backgroundColor = colorArray[index];
        setTimeout(function() { index++ }, 500);
        reset();
    };
}

//runs function after html document loads
window.onload = function() {

    background();
    bouncy();
}
