export function SortByText(sorting, reference, sortBy, sortReference){
    // 1. Pre-calculate indices in a Map for O(1) lookup
    const lookup = new Map(reference.map((row,i) => [row[sortReference], i]));
    
    // 2. Sort using the Map
    // Elements not in the reference array are moved to the end (Infinity)
    sorting.sort((a, b) => {
        const indexA = lookup.has(a[sortBy]) ? lookup.get(a[sortBy]) : Infinity;
        const indexB = lookup.has(b[sortBy]) ? lookup.get(b[sortBy]) : Infinity;
        return indexA - indexB;
    });
    console.log(sorting);
    return sorting;
}

export function reduceBycolumn(data, columns = []) {
  return data.map(r => {
    const obj = {};
    columns.forEach(col => obj[col] = r[col]);
    return obj;
  });
}

export function SortByNumber(sorting, sortBy){
  sorting.sort((a,b) => b[sortBy] - a[sortBy]);
  return sorting;
}
