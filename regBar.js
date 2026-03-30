function bar_reg(xData, yData, label,title, show){
  
  var trace1 = {
    x: xData,
    y: yData,
    name: label[0],
    orientation:'v',
    type: 'bar',
    text: yData,
    marker:{
      color:'rgb(158,202,225)',
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
    height: 220,
    width: 750,
    font:{
      size:16
    },
    yaxis: {
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
        y: 1.8,
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