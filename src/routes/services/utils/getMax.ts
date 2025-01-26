export const getMax = <T>(services: T[], key: keyof T) => {
	return services.reduce((max, service) => {
		const value = service[key] as number | number[] | null;
		if (!value) return max;
		if (typeof value === 'number') return value > max ? value : max;
		else {
			value.forEach((v) => {
				if (v && v > max) max = v;
			});
			return max;
		}
	}, 0);
};
