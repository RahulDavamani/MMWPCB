export const getValues = <T>(services: T[], key: keyof T) => {
	return services.reduce((list, service) => {
		const value = service[key] as string | string[] | null;
		if (!value) return list;
		if (typeof value === 'string') {
			if (!list.includes(value)) list.push(value);
		} else
			value.forEach((v) => {
				if (v && !list.includes(v)) list.push(v);
			});
		return list;
	}, [] as string[]);
};
