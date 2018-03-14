//  d3 automatically matches lower level data to lower level elements
// 
var data = [];

// multi dimensional array
data[0] = [];
data[1] = [];
data[2] = [];
data[3] = [];

// lengths of the arrays match the blue blocks (2, 3, 1, 1)
// the values of the arrays match the circles
data[0][0] = [1, 2, 3]; // length of 2 (include line below)
data[0][1] = [4, 5, 6];
data[1][0] = [7, 8]; // length of 3 (include 2 lines below)
data[1][1] = [9, 10, 11, 12];
data[1][2] = [13, 14, 15];
data[2][0] = [16]; // length of 1
data[3][0] = [17, 18]; // length of 1

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

var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left} ${margin.top})`);

    // creating 4 groups for the barchart boxes
var firstGroups = chartGroup.selectAll("g")
    .data(data)
    .enter().append("g")
    .attr("class", function (d, i) {
        return "firstLevelGroup" + i;
    })
    .attr("transform", function (d, i) {
        return `translate(${(i*(barWidth+barGap))} 0)`; //shifting x coords only
    });

// console.log(firstGroups);

// var secondGroups = firstGroups.selectAll("g")
//     .data(function (d) {
//         return d;
//     })
//     .enter().append("g")
//     .attr("class", function (d, i, j) {
//         return "secondLevelGroup" + i
//     })
//     .attr("transform", function (d, i, j) {
//         console.log(d);
//         return `translate(0 ${(height-((i+1)*50))})`;
//     });

// console.log(secondGroups);

secondGroups.append("rect")
.attr("x", function(d, i){return 0;})
.attr("y")
