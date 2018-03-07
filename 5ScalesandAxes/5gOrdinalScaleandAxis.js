var dataArray = [5, 11, 18];
var dataDays = ['Mon', 'Wed', "Fri"];

// supply algorithm in scale. domain: range of colors in spectrum 0–10 vs the complete range e.g. 0–255
var rainbow = d3.scaleSequential(d3.interpolateRainbow).domain([0, 10]);
var rainbow2 = d3.scaleSequential(d3.interpolateRainbow).domain([0, 3]);

var cat20 = d3.schemeCategory20; // Category20 is a very common scheme, will see a lot
console.log(cat20);

var x = d3.scaleBand() // was d3.scaleOrdinal() / then d3.scalePoint()
    .domain(dataDays)
    .range([0, 170]) // was [25, 85, 145] / then [0, 170]
    .paddingInner(.1176) // percent of chart dedicated to whitespace

var xAxis = d3.axisBottom(x);

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
    .attr("width", 50)
    .attr("height", function (dataPoint) {
        return dataPoint * 15;
    })
    .attr("fill", function (d, i) {
        return rainbow(i)
    });

svg.append("g")
    .attr("class", "x axis hidden")
    .attr("transform", "translate(0 300)")
    .call(xAxis);

var newX = 300; // should be at top. But here as part of below

svg.selectAll("circle.first")
    .data(dataArray)
    .enter().append("circle")
    .attr("class", "first")
    .attr("cx", function (dataPoint, index) {
        newX += (dataPoint * 3) + (index * 20);
        return newX;
    })
    .attr("cy", 100)
    .attr("r", function (dataPoint) {
        return dataPoint * 3;
    })
    .attr("fill", function (d, i) {
        return rainbow2(i);
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
    .attr("cy", 100)
    .attr("rx", function (dataPoint) {
        return dataPoint * 3;
    })
    .attr("ry", 30)
    .attr("fill", function (d, i) {
        return cat20[i];
    });

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
    .attr("stroke-width", 2);

// adding text

// svg.append("text")
//     .attr("x", newX)
//     .attr("y", 150)
//     .attr("fill", "none")
//     .attr("stroke", "blue")
//     .attr("stroke-width", 2)
//     .attr("text-anchor", "start")
//     .attr("dominant-baseline", "middle")
//     .attr("font-size", 30)
//     .text("start");;

// svg.append("text")
//     .attr("x", newX)
//     .attr("y", 180)
//     .attr("fill", "blue")
//     .attr("stroke", "none")
//     .attr("text-anchor", "middle")
//     .attr("dominant-baseline", "middle")
//     .attr("font-size", 30)
//     .text("middle");

// svg.append("text")
//     .attr("x", newX)
//     .attr("y", 210)
//     .attr("stroke", "blue")
//     .attr("fill", "none")
//     .attr("text-anchor", "end")
//     .attr("dominant-baseline", "middle")
//     .attr("font-size", 30)
//     .text("end");

// // needs refactoring like crazy
var textArray = ['start', 'middle', 'end'];

svg.append("text").selectAll("tspan")
    .data(textArray)
    .attr("x", newX)
    .attr("y", function (dataPoint, index) {
        return 150 + (index * 30);
    })
    .attr("fill", "none")
    .attr("stroke", "blue")
    .attr("stroke-width", 2)
    .attr("text-anchor", "start")
    .attr("dominant-baseline", "middle")
    .attr("font-size", 30)
    .text(function (dataPoint) {
        return dataPoint;
    });

svg.append("line")
    .attr("x1", newX)
    .attr("y1", 150)
    .attr("x2", newX)
    .attr("y2", 210);

// d3 offers plugin called scale chromatic https://github.com/d3/d3-scale-chromatic
// gives access to Cynthia Brewer Color scales
// of note http://colorbrewer2.org/#type=sequential&scheme=BuGn&n=3 note beware of rabbithole!