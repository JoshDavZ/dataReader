export function filterByColumn(csvData, columnTitle, searchChar, mode = 'include') {
	return csvData.filter(row => {
		const value = row[columnTitle];
		if (!value) return false;
		
		if (mode === 'exact') {
			return value === searchChar;
		} else if (mode === 'include') {
			return value.includes(searchChar);
		} else if (mode === 'exclude') {
			return !value.includes(searchChar);
		}
		return false;
	});
}

export function filterByMultipleColumns(csvData, conditions) {
	return csvData.filter(row => {
		return conditions.every(condition => {
			const value = row[condition.column];
			if (!value) return false;
			
			const mode = condition.mode || 'include';
			
			if (mode === 'exact') {
				return value === condition.char;
			} else if (mode === 'include') {
				return value.includes(condition.char);
			} else if (mode === 'exclude') {
				return !value.includes(condition.char);
			}
			return false;
		});
	});
}


export function SeverityFilter(csvData, SeverityType = []) {
  // If no filters are provided, return the full dataset
  if (SeverityType.length === 0) return csvData;

  return csvData.filter(row => {
    // Condition 1: Is the severity in our selected list?
    const isMatchingSeverity = SeverityType.includes(row.SEVERITY);
    
    // Condition 2: Is the duration more than 5?
	let isLongDuration;
	if(row.SEVERITY == 'LOW') isLongDuration = Number(row.DURASI) > 20;
	else isLongDuration = Number(row.DURASI) > 0;

    // Only return true if BOTH conditions are met
    return isMatchingSeverity && isLongDuration;
  });
}
