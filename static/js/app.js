// Fetch the JSON data using D3
function buildTable(sample) {
  d3.json("../../samples.json").then(function (data) {
    var samplesData = data;
    var samples = samplesData.samples
    var names = samplesData.names
    var metadata = samplesData.metadata
    var filterData = metadata.filter(x => x.id == sample)
    var sampleMeta = filterData[0]
    var frequency = metadata[0].wfreq
    console.log(frequency)


    // Metadata Display
    // Identify the html element to display the data
    var metadataInfo = d3.select("#sample-metadata")
    // Clear existing data
    metadataInfo.html("")

    // Display metadata
    Object.entries(sampleMeta).forEach(function ([key, value]) {
      metadataInfo.append("div").text(key + ":" + " " + " " + " " + " " + " " + value)
    }
    )
  }
  );
}

// Fetch the JSON data using D3
function buildCharts(sample) {
  d3.json("../../samples.json").then(function (data) {
    var samplesData = data;
    var samples = samplesData.samples
    var metadata = samplesData.metadata
    var filterData = samples.filter(x => x.id == sample)

    // Inital Plots
    var x_values = filterData[0].sample_values
    // console.log(x_values)
    var y_values = filterData[0].otu_ids
    // console.log(y_values)
    var labels = filterData[0].otu_labels
    // console.log(labels)


    // Bar Chart
    var trace1 = {
      x: x_values.slice(0, 10),
      y: y_values.slice(0, 10).map(x => `otu ${x}`),
      text: labels.slice(0, 10),
      type: "bar",
      orientation: "h"

    };

    var data = [trace1];

    var layout = {
      title: "ID:" + " " + " " + " " + sample
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
      title: "ID:" + " " + " " + sample,
      showlegend: false,
      height: 600,
      width: 1000
    };

    // Gauge Chart
    var frequency = metadata.wfreq
    console.log(frequency)

    var trace3 = {
      values: [
        50/9, 
        50/9, 
        50/9, 
        50/9, 
        50/9, 
        50/9, 
        50/9, 
        50/9, 
        50/9, 
        50
      ],
      rotation: 90,
      text: [
        "0-1",
        "1-2",
        "2-3",
        "3-4",
        "4-5",
        "5-6",
        "6-7",
        "7-8",
        "8-9",
        ""
      ],
      textinfo: "text",
      textposition: "inside",
      marker: {
        colors: [
          "rgba(249, 243, 236, .5)",
          "rgba(244, 242, 229, .5)",
          "rgba(233, 231, 201, .5)",
          "rgba(229, 232, 176, .5)",
          "rgba(213, 229, 153, .5)",
          "rgba(183, 205, 143, .5)",
          "rgba(139, 192, 134, .5)",
          "rgba(131, 181, 137, .5)",
          "rgba(76, 175, 80, .0)"
          // "rgba(14, 127, 0, .5)",
          // "rgba(110, 154, 22, .5)",
          // "rgba(170, 202, 42, .5)",
          // "rgba(202, 209, 95, .5)",
          // "rgba(210, 206, 145, .5)",
          // "rgba(232, 226, 202, .5)",
          // "rgba(255, 255, 255, 0)"
        ]
      },
      labels: [
        "0-1",
        "1-2",
        "2-3",
        "3-4",
        "4-5",
        "5-6",
        "6-7",
        "7-8",
        "8-9",
        ""
      ],
      hoverinfo: "label",
      hole: .5,
      type: "pie",
      showlegend: false
    }

    var data3 = [trace3];

    var layout3 = {
      title: "ID:" + " " + " " + sample,
      showlegend: false,
    };


    Plotly.newPlot("bar", data, layout);
    Plotly.newPlot("bubble", data2, layout2);
    Plotly.newPlot("gauge", data3, layout3);


  })
}
// Dropdown box
function init(){
 var location = d3.select("#selDataset")

  d3.json("../../samples.json").then(function (data) {
    var names = data.names
    names.forEach((x)=> {
      location.append("option").text(x).property("value", x)
    })
    var firstId = names[0]
    buildTable(firstId)
    buildCharts(firstId)
})
}

init()

// On change event
function optionChanged(newSample) {
  buildTable(newSample)
  buildCharts(newSample)
}

