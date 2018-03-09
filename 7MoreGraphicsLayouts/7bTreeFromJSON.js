// needs to be run in server: http://localhost:3000/7MoreGraphicsLayouts/index.html
var height = 200;
var width = 500;
var margin = {
    left: 50,
    right: 50,
    top: 40,
    bottom: 0
};

var tree = d3.tree().size([width, height]);

var svg = d3.select('body').append('svg').attr('width', '100%').attr('height', '100%');
var chartGroup = svg.append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`); // using ES6 here 
// `translate(${margin.left}, ${margin.top})`

// the json file ref probably needs to be in 'global folder' js since it's related to files in seperate folders i.e move file to global folder and change path references
d3.json('../6ImportData/6eTreeData.json').get(function (error, data) {
    console.log(data);
    console.log(data[0]); // is root element
    var root = d3.hierarchy(data[0]);
    tree(root);
    chartGroup.selectAll('circle')
        .data(root.descendants())
        .enter().append('circle')
        .attr('cx', function (d) {
            return d.x;
        })
        .attr('cy', function (d) {
            return d.y;
        })
        .attr('r', 5);

    chartGroup.selectAll('path')
        .data(root.descendants().slice(1)) // always need 1 less path than the dots we have
        .enter().append('path')
        .attr('class', 'link')
        .attr('d', function (d) {
            //return 'M' + d.x + ',' + d.y + 'L' + d.parent.x + ',' + d.parent.y; // straight lines
            // curvey lines
            return 'M' + d.x + ',' + d.y +
                'C' + d.x + ',' + (d.parent.y + d.y) / 2 + ' ' +
                d.parent.x + ',' + (d.y + d.parent.y) / 2 + ' ' +
                d.parent.x + ',' + d.parent.y;
        });
    console.log(root);


});