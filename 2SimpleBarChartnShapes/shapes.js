// this code looks as if it code be seriously refactored
var dataArray = [5, 11, 18];

var svg = d3.select("body").append("svg")
    .attr("height", "100%")
    .attr("width", "100%");

svg.selectAll("rect")
    .data(dataArray) // binds data to a selection. e.g. if found 3 rects, bould bind to the above array
    .enter().append("rect")

    .attr("x", function (dataPoint, index) {
        return index * 60;
    })
    .attr("y", function (dataPoint) {
        return 300 - (dataPoint * 15)
    })
    .attr("width", "50")
    .attr("height", function (dataPoint) {
        return dataPoint * 15;
    })
    .attr("fill", "pink");

var newX = 300; // should be at top. But here as part of below

svg.selectAll("circle.first")
    .data(dataArray)
    .enter().append("circle")
    .attr("class", "first")
    .attr("cx", function (dataPoint, index) {
        newX += (dataPoint * 3) + (index * 20);
        return newX;
    })
    .attr("cy", "100")
    .attr("r", function (dataPoint) {
        return dataPoint * 3;
    });

// creating an elipse
var newX = 600; // bad but live with it
svg.selectAll("ellipse.second")
    .data(dataArray)
    .enter().append("ellipse")
    .attr("class", "second")
    .attr("cx", function (dataPoint, index) {
        newX += (dataPoint * 3) + (index * 20);
        return newX;
    })
    .attr("cy", "100")
    .attr("rx", function (dataPoint) {
        return dataPoint * 3;
    })
    .attr("ry", "30");

// line. More copy and paste code! Though good to know a typeof boilerplate
var newX = 900; // bad but live with it again
svg.selectAll("line")
    .data(dataArray)
    .enter().append("line")
    .attr("x1", newX)
    .attr("y1", function (dataPoint, index) {
        return 80 + (index * 20);
    })
    .attr("x2", function (dataPoint) {
        return newX + (dataPoint * 15);
    })
    .attr("y2", function (dataPoint, index) {
        return 80 + (index * 20);
    })
    .attr("stroke", "blue")
    .style("stroke", "green") // different ways of setting color of line & stroke-width. Precidence is: style, css the attr.
    // suggests: css, attr, last resort style. Bostock does this. So do this!
    .attr("stroke-width", "2");