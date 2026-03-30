export function renderData(data, tableContainerId) {
  console.log('Rendering data in', tableContainerId);
    // if (!data || !data.length){console.log('No data to render'); return;}
	  const container = document.getElementById(tableContainerId);

    const table = document.createElement('table');
    
    // Header row
    const header = document.createElement('tr');
    Object.keys(data[0]).forEach(k => {
      const th = document.createElement('th');
      th.textContent = k;
      header.appendChild(th);
    });
    table.appendChild(header);
    
    // Data rows
    data.forEach(row => {
      const tr = document.createElement('tr');
      Object.values(row).forEach(v => {
        const td = document.createElement('td');
        td.textContent = v;
        tr.appendChild(td);
      });
      table.appendChild(tr);
    });
    container.appendChild(table);
  }

