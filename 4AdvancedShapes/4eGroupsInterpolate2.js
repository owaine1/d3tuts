var dataArray = [{
        x: 5,
        y: 5
    },
    {
        x: 10,
        y: 15
    },
    {
        x: 20,
        y: 7
    },
    {
        x: 30,
        y: 18
    },
    {
        x: 40,
        y: 10
    }
];
var interpolateTypes = [
    d3.curveLinear,
    d3.curveNatural,
    d3.curveStep,
    d3.curveBasis,
    d3.curveBundle,
    d3.curveCardinal
];
var svg = d3.select("body").append("svg").attr("width", "100%").attr("height", "100%");

for (var j = 0; j < 6; j++) {

    // creating a generator, called 'line' (structure is what linegenerators always take)
    // layout is all generators at top of code (makes sense to me!)
    var line = d3.line()
        .x(function (d, i) {
            return d.x * 6;
        })
        .y(function (d, i) {
            return d.y * 4;
        })
        .curve(interpolateTypes[j]);

    var shiftX = j * 250;
    var shiftY = 0;

    var chartGroup = svg.append("g")
        .attr("class", "group" + j)
        .attr("transform", "translate(" + shiftX + ", 0)");

    // notice g element added to DOM, see chrome inspector
    chartGroup.append("path")
        .attr("d", line(dataArray)) // toggle with line below
        // .attr('d', "M30,20L60,60L120,28L180,72L240,40") // generated in DOM from line above
        .attr("fill", "none")
        .attr("stroke", "blue");

    chartGroup.selectAll("circle.grp" + j)
        .attr("class", function (d, i) {
            return "grp" + j;
        })
        .data(dataArray)
        .enter().append("circle")
        .attr("cx", function (d, i) {
            return d.x * 6;
        })
        .attr("cy", function (d, i) {
            return d.y * 4;
        })
        .attr("r", "2");
}