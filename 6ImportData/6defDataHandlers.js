var parseDate = d3.timeParse("%d/%m/%Y");

d3.csv("6cPrices.csv")
    .row(function (d) {
        return {
            month: parseDate(d.month),
            price: Number(d.price.trim().slice(1))
        };
    })
    .get(
        function (error, data) {
            // console.log(data);

        });

// *    *   *   *   *

// note tsv file: whitespace must be tabs. Check. Double spaces don't work.
d3.tsv("6dPrices.tsv")
    .row(function (d) {
        return {
            month: parseDate(d.month),
            price: Number(d.price.trim().slice(1))
        };
    })
    .get(
        function (error, data) {
            // console.log(data);
        });

// *    *   *   *   *

// this is for dsv (yes has text handler)
var psv = d3.dsvFormat("|")
d3.text("6dPrices.txt") // was 6dPrices
    .get(
        function (error, data) {
            var rows = psv.parse(data);
            var newRows = [];
            for (p = 0; p < rows.length; p++) {
                newRows.push({
                    month: parseDate(rows[p].month),
                    price: Number(rows[p].price.trim().slice(1))
                });
            }
            // console.log(rows);
            // console.log(newRows);
        });

// *    *   *   *   *

d3.xml("6fData.xml").get(function (error, data) {
    // console.log(data); // in console appears as a document
    // console.log(data.documentElement);

    // methods for returning letters and ignoring frequencies
    // 1 js way
    // var xmlLetter = data.documentElement.getElementsByTagName("letter");
    // console.log(xmlLetter); // shows array containing letters

    // 2 d3 way
    var letterNodes = d3.select(data).selectAll("letter")._groups[0][0]; // before without _groups...
    console.log(letterNodes);


});

// *    *   *   *   *

d3.json("6eTreeData.json").get(function (error, data) {
    // console.log(data);
    // console.log(data[0]);
    // console.log(data[0].children);
    // console.log(data[0].children[0].children[1]);
    // console.log(data[0].children[0].children[1].name);

});