// url = "http://localhost:8000/samples.json";

// Fetch the JSON data and console log it using D3
d3.json("../samples.json").then(function(data) {
  var samplesData = data;
  console.log(samplesData);
  var samples = samplesData.samples
  console.log(samples)
  var names = samplesData.names
  console.log(names)
  var metadata = samplesData.metadata
  console.log(metadata)
  var sampleMeta = metadata[0]
  console.log(sampleMeta)
  console.log(metadata[0].id)
  console.log(sampleMeta.id)

    // Metadata Display
    // Identify the html element to display the data
    var metadataInfo = d3.select("#sample-metadata")
    
   // Display metadata
    Object.entries(sampleMeta).forEach(function([key, value]) {
      var keyName = []
      var valuesName = []
      keyName.push([key])
      valuesName.push([value])
      metadataInfo.append("div").text(keyName)
      metadataInfo.append("div").text(valuesName)
      
  
  


  // // Identify the input element 
  // var inputField = d3.select("#selDataset");

  // // Get the value property of the input element
  // var inputFieldValue = inputField.property("value");

  // // Filter the data
  // var filterData = metadata.filter(x => x.id === inputFieldValue);

  // // Prevent the page from refreshing
  // d3.event.preventDefault();

  // // Clear the existing output
  // metadataInfo.html("");


      
    }
    )
  }
  );

 
   

