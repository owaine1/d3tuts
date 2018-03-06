var dataArray = [25, 26, 28, 32, 37, 45, 55, 70, 90, 120, 135, 150, 160, 168, 172, 177, 180];
var dataYears = ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'];

var width = 500;
var height = 200;

var margin = {
    left: 50,
    right: 50,
    top: 40,
    bottom: 0
}
// structure scales always take
var y = d3.scaleLinear()
    .domain([0, 180]) //input. Always take an array
    .range([height, 0]); //output. Always take an array

// console.log(y(0), '\n', y(90), '\n', y(180)); //test scale

var yAxis = d3.axisLeft(y); // axisLeft is a generator

var area = d3.area()
    .x(function (d, i) {
        return i * 20;
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