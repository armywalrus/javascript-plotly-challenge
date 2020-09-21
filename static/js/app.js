url = "http://localhost:8000/samples.json";

// Fetch the JSON data and console log it
const dataPromise = d3.json(url);
  console.log("Data Promise", dataPromise.then(function(data) {
    console.log(data);
    })
  );

// /**
//  * Helper function to select samples data
//  * Returns an array of values
//  * @param {array} rows
//  * @param {integer} index
//  * index 0 - names
//  * index 1 - metadata
//  * index 2 - samples
//  */

// function unpack(rows, index) {
//   return rows.map(function(row) {
//     return row[index];
//   });
// }



// ----------------------------------------------------------------------------

