function bar_rotated2(xData, yData, label,title, show){
  var multiText = yData.map((val,i)=>`${val}, ${xData[i]}`);  
  var trace1 = {
    y: xData,
    x: yData,
    name: label[0],
    text:multiText,
    textposition: 'inside',
    insidetextanchor: 'end',

    type: 'bar',
    orientation:'h',
    marker:{
      color:'rgb(110, 181, 107)',
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
    height: 600,
    width: 500,
    font:{
      size:16
    },
    yaxis: {
      showgrid: false,
      zeroline: false,
      showline: false,
      showticklabels: false,
      autorange: true,
      autotick: true,
      ticks: '',
      autosize: false
    },
    xaxis: {
      showgrid: false,
      zeroline: false,
      showline: false,
      showticklabels: false,
      autorange: true,
      autotick: true,
      ticks: '',
      autosize: false
    },};
    
    Plotly.newPlot(show, data, layout);
  }
