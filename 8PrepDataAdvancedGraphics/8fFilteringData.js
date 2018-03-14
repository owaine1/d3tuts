// Filtering is not using all of the available datapoints
// example at http://bl.ocks.org/d3noob/8dc93bce7e7200ab487d


var data = [];
data[0] = [];
data[1] = [];
data[2] = [];
data[3] = [];

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

var firstGroups = chartGroup.selectAll("g")
    .data(data) // has a length of 4
    .enter().append("g")
    .attr("class", function (d, i) {
        return "firstLevelGroup" + i;
    })
    .attr("transform", function (d, i) {
        return `translate(${(i*(barWidth+barGap))} 0)`; //shifting x coords only
    });

console.log(firstGroups); // selection of 4 groups

var secondGroups = firstGroups.selectAll("g") // runs * 4 to .enter().append("g"). Deals with input data
    .data(function (d) {
        // console.log(d); // shows d runs * 4
        return d;
    })
    .enter().append("g")
    .attr("class", function (d, i, j) { // runs * 7 : 2 + 3 + 1 + 1 to final }); Deals with output data
        return "secondLevelGroup" + i
    })
    .attr("transform", function (d, i, j) {
        console.log(d);
        return `translate(0 ${(height-((i+1)*50))})`;
    });

// console.log(secondGroups);

// adds rectangles * 7
secondGroups.append("rect")
    .attr("x", function (d, i) {
        return 0;
    })
    .attr("y", "0")
    .attr("width", 100)
    .attr("height", 50)
    .attr("class", "secondLevelRect");

secondGroups.selectAll("circle")
    .data(function (d) {
        console.log('inside secondGroups circle' + d);
        return d;
    })
    .enter().append("circle")
    // filter checks each row against the condition. NB append circles then filter them out
    // look in the DOM. circles are still there, but not given any attributes for them to be displayed.
    .filter(function (d) {
        return d > 10;
    })
    .attr("cx", function (d, i) {
        console.log(d);
        return ((i * 21) + 10);
    })
    .attr("cy", 25)
    .attr("r", 10);


secondGroups.selectAll("text")
    .data(function (d) {
        return d;
    })
    .enter().append("text")
    .attr("x", function (d, i) {
        return ((i * 21) + 10);
    })
    .attr("y", 25)
    .attr("class", "txt")
    .attr("text-anchor", "middle")
    .attr("dominant-baselive", "middle")
    .text(function (d, i, nodes) { // 3rd param nodes. In d3v3 it's j, d3v4 it's nodes
        console.log("nodes", nodes); // node list of the parent
        return d;
    });