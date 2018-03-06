var dataArray = [25, 26, 28, 32, 37, 45, 55, 70, 90, 120, 135, 150, 160, 168, 172, 177, 180];
var dataYears = ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'];

var parseDate = d3.timeParse("%Y");
// console.log(parseDate('2003'), '2003');
// console.log(d3.max(dataYears, function (d) {
//     return parseDate(d);
// }));
// console.log(d3.extent(dataYears, function (d) {
//     return parseDate(d);
// }));


var width = 500;
var height = 200;

var margin = {
    left: 50,
    right: 50,
    top: 40,
    bottom: 0
}
// structure scales always take
var x = d3.scaleTime()
    .domain(d3.extent(dataYears, function (d) {
        return parseDate(d);
    }))
    .range([0, width]);

// console.log(x(parseDate('2010')));

var y = d3.scaleLinear()
    .domain([0, d3.max(dataArray)]) //input. Always take an array
    .range([height, 0]); //output. Always take an array

// console.log(y(0), '\n', y(90), '\n', y(180)); //test scale

var xAxis = d3.axisBottom(x);
// axisLeft is a generator/ ticks on LHS
var yAxis = d3.axisLeft(y)
    .ticks(3)
    .tickPadding(10)
    .tickSize(10);

var area = d3.area()
    .x(function (d, i) {
        return x(parseDate(dataYears[i]));
    })
    .y0(height)
    .y1(function (d) {
        return y(d);
    });

var svg = d3.select("body").append("svg").attr("width", "100%").attr("height", "100%");
var chartGroup = svg.append("g").attr("transform",
    "translate(" + margin.left + ", " + margin.top + ")");

chartGroup.append("path").attr("d", area(dataArray));

chartGroup.append("g")
    .attr("class", "axis y")
    .call(yAxis);

chartGroup.append("g")
    .attr("class", "axis x")
    .attr("transform", "translate(0, " + height + ")")
    .call(xAxis);