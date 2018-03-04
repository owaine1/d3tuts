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

var svg = d3.select("body").append("svg").attr("width", "100%").attr("height", "100%");

// creating a generator, called 'line' (structure is what linegenerators always take)
// layout is all generators at top of code (makes sense to me!)
var line = d3.line()
    .x(function (d, i) {
        return d.x * 6;
    })
    .y(function (d, i) {
        return d.y * 4;
    })
    // .curve(d3.curveStep) // toggle
    .curve(d3.curveCardinal);
// further info on curves https://github.com/d3/d3/blob/master/API.md#interpolators-d3-interpolate

svg.append('path')
    .attr('d', line(dataArray)) // toggle with line below
    // .attr('d', "M30,20L60,60L120,28L180,72L240,40") // generated in DOM from line above
    .attr('fill', 'none')
    .attr('stroke', 'blue');