//  d3 automatically matches lower level data to lower level elements
// 
var data = [];

data[0] = [];
data[1] = [];
data[2] = [];
data[3] = [];

data[0][0] = [1, 2, 3];
data[0][1] = [4, 5, 6];
data[1][0] = [7, 8];
data[1][1] = [9, 10, 11, 12];
data[1][2] = [13, 14, 15];
data[2][0] = [16];
data[3][0] = [17, 18];

// console.log(data);


var width = 1000;
var height = 240;
var barWidth = 100;
var barGap = 10;

var margin = {
    left: 50,
    right: 50,
    top: 0,
    bottom: 0
};

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

    