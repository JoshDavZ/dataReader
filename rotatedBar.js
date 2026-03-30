function bar_rotated(xData, yData, label,title, show){
    var trace1 = {
    y: xData,
    x: yData,
    name: label[0],
    text:yData,
    type: 'bar',
    orientation:'h',
    marker:{
      color:'rgb(89, 197, 255)',
      opacity:0.6,
      line:{
        color:'rgb(8,48,107)',
        width:1.5,
      }
    }
  };
  
  var data=[trace1];

  var layout = {
    showlegend:false,
    height: 700,
    width: 300,
    font:{
      size:16     
    },
    yaxis: {
      showgrid: false,
      // zeroline: false,
      // showline: false,
      // showticklabels: false,
      // autorange: true,
      autotick: true,
      ticks: '',
      autosize: false
    },
    xaxis: {
      showgrid: false,
      // zeroline: false,
      // showline: false,
      showticklabels: false,
      // autorange: true,
      autotick: true,
      ticks: '',
      autosize: false
    },
    annotations: [
      {
        xref: 'paper',
        yref: 'paper',
        x: 0.5,
        y: 1.05,
        text: title,
        font:{
          family: 'Arial',
          size: 20,
          color: 'rgb(37,37,37)'
        },
        showarrow: false
      },]
    };
    
    Plotly.newPlot(show, data, layout);
  }