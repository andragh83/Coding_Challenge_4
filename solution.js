const fs = require("fs");

//Part 1
fs.readFile("./input.txt", (err, data) => {
    console.time("funchallenge part 1");
    if (err) {
        console.log(err);
    } 
    
    var file = data.toString();

    // var up = (file.match(new RegExp("\\(", "g")) || []).length;
    // var down = (file.match(new RegExp("\\)", "g")) || []).length;

    // console.log("Santa needs to go to floor ", up-down);

    function floor(str) {
        var position = 0;
        for (var i=0; i<str.length; i++) {
            if (str[i] == ")") {
                position --;
            } else if (str[i] == "(") {
                position ++;
            }
        }
    return position;    
    }

    console.log("Santa needs to go to floor ", floor(file));

    console.timeEnd("funchallenge part 1");
});

//Part 2
fs.readFile("./input.txt", (err, data) => {
    console.time("funchallenge part 2");
    if (err) {
        console.log(err);
    } 
    
    var file = data.toString();

    function basement(str) {
        var position = 0;
        for (var i=0; i<str.length; i++) {
            if (str[i] == ")") {
                position --;
                if (position == -1) { return i+1 }
            } else if (str[i] == "(") {
                position ++;
            }
        }
        
    }
    
    console.log("Santa enters basemenet on position ", basement(file));
    console.timeEnd("funchallenge part 2");
});

