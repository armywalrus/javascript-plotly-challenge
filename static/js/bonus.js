// Gauge Chart
     var degrees = 180 - level
     radius = .5;
     var radians = degrees * Math.PI / 180;
     var x = radius * Math.cos(radians);
     var y = radius * Math.sin(radians);
     var path1 = (degrees < 45 || degrees > 135) ? 'M -0.0 -0.025 L 0.0 0.025 L ' : 'M -0.025 -0.0 L 0.025 0.0 L ';
    // Path: may have to change to create a better triangle
     var mainPath = path1,
         pathX = String(x),
         space = ' ',
         pathY = String(y),
         pathEnd = ' Z';
     var path = mainPath.concat(pathX,space,pathY,pathEnd);
     var data3 = [{ type: 'scatter',
     x: [0], y:[0],
      marker: {size: 14, color:'850000'},
      showlegend: false,
      name: 'test',
      text: level,
      hoverinfo: 'text+name'},
     {
       values: [
         frequency
       ],
       rotation: 90,
       text: [
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
       textinfo: "text",
       textposition: "inside",
       marker: {
         colors: [
           "rgba(249, 243, 236, .5)",
           "rgba(244, 242, 229, .5)",
           "rgba(233, 231, 201, .5)",
           "rgba(229, 232, 176, .5)",
           "rgba(213, 229, 153, .5)",
           "rgba(183, 205, 143, .5)",
           "rgba(139, 192, 134, .5)",
           "rgba(131, 181, 137, .5)",
           "rgba(76, 175, 80, 0)"
         ]
       },
       labels: [
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
       hoverinfo: "label",
       hole: .5,
       type: "pie",
       showlegend: false
     }};
     var layout3 = {
       shapes:[{
           type: 'path',
           path: path,
           fillcolor: '850000',
           line: {
             color: '850000'
           }
         }],
       height: 400,
       width: 400,
       xaxis: {zeroline:false, showticklabels:false,
                  showgrid: false, range: [-1, 1]},
       yaxis: {zeroline:false, showticklabels:false,
                  showgrid: false, range: [-1, 1]}
     };
    

    var data3 =[
      {
         domain: {x: [0, 1], y: [0, 1]},
         value: frequency,
         title: {text:"ID:" + " " + " " + metadata[0].id,},
         type: "indicator",
         mode: "gauge+number+delta",
         delta: { reference: 380 },
         gauge: {
           axis: { range: [null, 9] },
         steps: [
           { range: [0, 5], color: "blue" },
           { range: [6, 9], color: "green" }
         ],
         threshold: {
           line: { color: "red", width: 4 },
           thickness: 0.75,
           value: 490}
       }
       }
     ]
     var layout3 = { width: 600, height: 450, margin: { t: 0, b: 0 } };

