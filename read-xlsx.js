export class XLSXReader {
  #data = null;
  #table = null;
  #onReady = null;

  get data() {
    return this.#data;
  }

  set data(jsonData) {
    this.#data = jsonData;
    if (this.#onReady) this.#onReady(jsonData);
  }

  get table() {
    return this.#table;
  }

  onReady(callback) {
    this.#onReady = callback;
    if (this.#data) callback(this.#data);
  }
}

export const reader = new XLSXReader();

fetch('dataTest.xlsx')
  .then(res => {
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.arrayBuffer();
  })
  .then(buffer => {
    const workbook = XLSX.read(buffer, { type: 'array' });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(sheet, { defval: '' });
    reader.data = jsonData;  // Changed from renderer to reader
  })
  .catch(err => {
    console.error('xlsx load failed', err);
    const msg = document.createElement('p');
    msg.textContent = 'Could not load dataTest.xlsx: ' + err.message;
    document.body.appendChild(msg);
  });
