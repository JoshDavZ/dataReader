function bar_impact(xData, yData, label,title, show){
    var trace1 = {
      x: xData,
      y: yData[0],
      name: label[0],
      type: 'bar',
      text: yData[0],
      marker:{
        color:'rgb(255, 205, 4)',
        opacity:0.6,
        line:{
          color:'rgb(8,48,107)',
          width:1.5,
        }
      }
    //   orientation: 'h'
    };
    var trace2 = {
      x: xData,
      y: yData[1],
      name: label[1],
      type: 'bar',
      text: yData[1],
      marker:{
        color:'rgb(255, 85, 42)',
        opacity:0.6,
        line:{
          color:'rgb(8,48,107)',
          width:1.5,
        }
      }
    //   orientation: 'h'
    };
    
    var data = [trace1, trace2];
    
    var layout = {
        showlegend:false,
        barmode: 'overlay',
        height: 500,
        width: 600,
        font:{
          size: 14,
        },
        xaxis: {
      showline: true,
      showgrid: false,
      showticklabels: true,
      linecolor: 'rgb(204,204,204)',
      linewidth: 2,
      dtick:1,
      tickmode: 'linear',
      ticks: 'outside',
      tickcolor: 'rgb(204,204,204)',
      ticklen: 5,
      tickfont: {
        family: 'Arial',
        size: 16,
        color: 'rgb(82, 82, 82)'
      }
    },
    // tidak menampilkan garis aksis y
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
          y: 1.1,
          text: title,
          font:{
            family: 'Arial',
            size: 25,
            color: 'rgb(37,37,37)'
          },
          showarrow: false
        },]
    };
    
    Plotly.newPlot(show, data, layout);
}
