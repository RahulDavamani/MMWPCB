import type { Lang } from '$lib/locales/en';
import TimeDomainMeasurement from '$lib/assets/services/time-domain-measurement/time-domain-measurement.png';

export const timeDomainMeasurement = (l: Lang['services']['sections']['timeDomainMeasurement']) => ({
	code: 'time-domain-measurement',
	l,
	img: TimeDomainMeasurement,
	from: 50,
	buildTime: 48,
	services: {
		timeDomainMeasurement: {
			code: 'time-domain-measurement',
			l: l.services.timeDomainMeasurement,
			images: [TimeDomainMeasurement],
			category: l.categories.timeDomainMeasurement,
			startingFrom: 50,
			maxFrequency: 60
		}
	}
});
