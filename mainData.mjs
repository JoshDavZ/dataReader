import { reader } from './read-xlsx.js';
import { renderData } from './dataRender.js';
import { filterByColumn, filterByMultipleColumns} from './dataFilters.js';
import { SortByNumber,reduceBycolumn } from './Sort.js';

reader.onReady((data) => {
  let DegradasiFO = filterByColumn(reader.data, 'rca', 'DEGRADASI FO', 'include');
  DegradasiFO = reduceBycolumn(DegradasiFO, ['rca']);
  renderData(DegradasiFO, 'output2');
  
  
  reader.data.forEach((row) => {
    if (row['detail_rca']!==null && row['detail_rca']!=='') {
    row['count'] = filterByColumn(data, 'rca', row['detail_rca'], 'include').length;
    console.log('count for', row['detail_rca'], ':', row['count']);
    }
  });
  let countData = reduceBycolumn(data, ['detail_rca','count']);
  console.log('before sorting:', countData);
  countData = SortByNumber(countData, 'count');
  console.log('after sorting:', countData);
  renderData(countData, 'output1');
});

