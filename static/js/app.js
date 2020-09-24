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
    console.log(x_values)
    var y_values = samples[0].otu_ids
    console.log(y_values)
    var labels = samples[0].otu_labels
    console.log(labels)


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

    var layout = {
      title: "ID:" + " " + " " + metadata[0].id,
      showlegend: false,
    };


    Plotly.newPlot("bar", data, layout);
    Plotly.newPlot("bubble", data2, layout);

  
})



 
