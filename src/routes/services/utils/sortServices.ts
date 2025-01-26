export const sortServices = (
	filters: { sortBy: string; sortOrder: boolean },
	a: { [k in string]: unknown },
	b: { [k in string]: unknown }
) => {
	const [valueA, valueB] = [a[filters.sortBy as keyof typeof a], b[filters.sortBy as keyof typeof a]];
	if (filters.sortOrder) {
		if (typeof valueA === 'string' && typeof valueB === 'string') return valueA.localeCompare(valueB);
		if (typeof valueA === 'number' && typeof valueB === 'number') return valueA - valueB;
	} else {
		if (typeof valueA === 'string' && typeof valueB === 'string') return valueB.localeCompare(valueA);
		if (typeof valueA === 'number' && typeof valueB === 'number') return valueB - valueA;
	}
	return 0;
};
