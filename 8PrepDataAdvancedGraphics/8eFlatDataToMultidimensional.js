// nest turns flat, tabular data into hierarchical data

var parseDate = d3.timeParse("%d/%m/%Y");

d3.csv("../6ImportData/6cPrices.csv")
    .row(function (d) {
        return {
            month: parseDate(d.month),
            price: Number(d.price.trim().slice(1))
        };
    })
    .get(
        function (error, data) {
            var nestedData = d3.nest()
                // key ishow want to group the data. d.month is date not month
                .key(function (d) {
                    return d.month.getMonth(); // js method. gets index of month, 0 Jan, 1 Feb etc..
                    // also toggle getMonth() to getFullYear();
                })
                .entries(data);
            console.log(nestedData);
            console.log(data);
        });
// nest often used to aggregate data into time periods. Useful for creating hierarchical layout 
// see https://bl.ocks.org/mbostock/2838bf53e0e65f369f476afd653663a2
// look at line: var nest = d3.nest() // note 3 key parameters.