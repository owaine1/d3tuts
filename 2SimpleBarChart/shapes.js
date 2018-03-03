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
    .attr("y", function (dataPoint, index) {
        return 300 - (dataPoint * 15)
    })
    .attr("width", "50")
    .attr("height", function (dataPoint, index) {
        return dataPoint * 15;
    })
    .attr("fill", "pink");