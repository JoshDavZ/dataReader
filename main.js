class XLSXRenderer {
  #data = null;
  #table = null;

  get data() {
    return this.#data;
  }

  set data(jsonData) {
    this.#data = jsonData;
    // this.render();
  }

  get table() {
    return this.#table;
  }

  render() {
    if (!this.#data || !this.#data.length) return;

    this.#table = document.createElement('table');
    
    // Header row
    const header = document.createElement('tr');
    Object.keys(this.#data[0]).forEach(k => {
      const th = document.createElement('th');
      th.textContent = k;
      header.appendChild(th);
    });
    this.#table.appendChild(header);
    console.log('Headers:', Object.keys(this.#data[0]));
    
    // Data rows
    this.#data.forEach(row => {
      const tr = document.createElement('tr');
      Object.values(row).forEach(v => {
        const td = document.createElement('td');
        td.textContent = v;
        tr.appendChild(td);
      });
      this.#table.appendChild(tr);
      console.log('rows:', Object.keys(this.#data));
    });
    
    document.body.appendChild(this.#table);
  }
}

export const renderer = new XLSXRenderer();

fetch('dataTest.xlsx')
  .then(res => {
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.arrayBuffer();
  })
  .then(buffer => {
    const workbook = XLSX.read(buffer, { type: 'array' });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(sheet, { defval: '' });
    renderer.data = jsonData;
  })
  .catch(err => {
    console.error('xlsx load failed', err);
    const msg = document.createElement('p');
    msg.textContent = 'Could not load dataTest.xlsx: ' + err.message;
    document.body.appendChild(msg);
  });