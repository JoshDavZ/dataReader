function renderData(data, table) {
    if (!data || !data.length) return;

    table = document.createElement('table');
    
    // Header row
    const header = document.createElement('tr');
    Object.keys(data[0]).forEach(k => {
      const th = document.createElement('th');
      th.textContent = k;
      header.appendChild(th);
    });
    table.appendChild(header);
    console.log('Headers:', Object.keys(data[0]));
    
    // Data rows
    data.forEach(row => {
      const tr = document.createElement('tr');
      Object.values(row).forEach(v => {
        const td = document.createElement('td');
        td.textContent = v;
        tr.appendChild(td);
      });
      table.appendChild(tr);
      console.log('rows:', Object.keys(data));
    });
    
    document.body.appendChild(table);
  }
