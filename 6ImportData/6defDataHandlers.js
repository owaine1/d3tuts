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
    // console.log(letterNodes);


});

// *    *   *   *   *

d3.json("6eTreeData.json").get(function (error, data) {
    // console.log(data);
    // console.log(data[0]);
    // console.log(data[0].children);
    // console.log(data[0].children[0].children[1]);
    // console.log(data[0].children[0].children[1].name);

});

// *    *   *   *   *   *   *   *   *   *   *    *   *

// *    If you can avoid using a text file, DO!  *   *

// *    *   *   *   *   *   *   *   *   *   *    *   *

// d3 pulls text in as 1 long string.
d3.text("6gTest.txt").get(function (error, data) {
    var myTabPos = [];
    var myNewLinePos = [];

    var tabVal = '\\b\t\b';
    var tabMod = 'g';
    var tabRegExp = new RegExp(tabVal, tabMod);

    var lineVal = '\\b\n\\b';
    var lineMod = 'g';
    var lineRegExp = new RegExp(lineVal, lineMod);

    data.replace(tabRegExp, function (itemFound, itemLocation) {
        myTabPos.push(itemLocation);
        return itemFound;
    });
    data.replace(lineRegExp, function (itemFound, itemLocation) {
        myNewLinePos.push(itemLocation);
        return itemFound;
    });
    // console.log(myTabPos);
    // console.log(myNewLinePos);


});

// Using data from HTML

// d3 allows you to download webpages or parts of webpages...
// cleaner to scrape data off webpage (if you have permission)
// this won't work for all sites. The site will not allow you to take data if it chooses not to.
// its the CORS (cross-orign resource sharing)
// cors e.g. toggle from https://enable-cors.org to https://google.com and will be blocked
d3.html("https://google.com").get(function (error, data) {
    var frag = data.querySelector("div");
    console.log(data);
    console.log(frag);


});