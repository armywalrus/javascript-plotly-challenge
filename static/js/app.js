// Fetch the JSON data using D3
d3.json("../samples.json").then(function(data) {
  var samplesData = data;
  var samples = samplesData.samples
  var names = samplesData.names
  var metadata = samplesData.metadata
  var sampleMeta = metadata[0]

    // Metadata Display
    // Identify the html element to display the data
    var metadataInfo = d3.select("#sample-metadata")
    
   // Display metadata
    Object.entries(sampleMeta).forEach(function([key, value]) {
      metadataInfo.append("div").text(key + ":" + " " + " " + " " + " " + " " + value)
    }
    )
    }
    );  
  
  // Fetch the JSON data using D3
  d3.json("../samples.json").then(function(data) {
    var samplesData = data;
    var samples = samplesData.samples
    var metadata = samplesData.metadata
  
    // Inital Plots
    var x_values = samples[0].sample_values
    // console.log(x_values)
    var y_values = samples[0].otu_ids
    // console.log(y_values)
    var labels = samples[0].otu_labels
    // console.log(labels)
    var frequency = metadata[0].wfreq
    console.log(frequency)


    // Bar Chart
    var trace1 = {
      x: x_values,
      y: y_values,
      text: labels,
      type: "bar"
    };

    var data = [trace1];

    var layout = {
      title: "ID:" + " " + " " + " " + metadata[0].id
    };

    // Bubble Chart
    var trace2 = {
      x: x_values,
      y: y_values,
      text: labels,
      mode: 'markers',
      marker: {
        size: x_values,
        color: y_values,
        
      }
    }

    var data2 = [trace2];

    var layout2 = {
      title: "ID:" + " " + " " + metadata[0].id,
      showlegend: false,
    };

    // Gauge Chart
    var data3 =[
      {
        domain: {x: [0, 1], y: [0, 1]},
        value: frequency,
        title: {text:"ID:" + " " + " " + metadata[0].id,},
        type: "indicator",
        mode: "gauge+number+delta",
        delta: { reference: 380 },
        gauge: {
          axis: { range: [null, 9] },
        steps: [
          { range: [0, 5], color: "blue" },
          { range: [6, 9], color: "green" }
        ],
        threshold: {
          line: { color: "red", width: 4 },
          thickness: 0.75,
          value: 490}
      }
      }
    ]
    var layout3 = { width: 600, height: 450, margin: { t: 0, b: 0 } };

    Plotly.newPlot("bar", data, layout);
    Plotly.newPlot("bubble", data2, layout2);
    Plotly.newPlot("gauge", data3, layout3);

  
})



 
