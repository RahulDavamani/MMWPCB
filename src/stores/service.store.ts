import { derived } from 'svelte/store';
import { lg } from './i18n.store';
import { antennaTestSystems } from './utils/service/antennaTestSystems';
import { circuitTestPlatforms } from './utils/service/circuitTestPlatforms';
import { frequencyDomainRFTest } from './utils/service/frequencyDomainRFTest';
import { timeDomainMeasurement } from './utils/service/timeDomainMeasurement';

export const serviceStatuses = derived(lg, ($lg) => ({
	APPLICATION_RECEIVED: $lg.serviceStatus.APPLICATION_RECEIVED,
	IN_REVIEW: $lg.serviceStatus.IN_REVIEW,
	WAITING_FOR_PAYMENT: $lg.serviceStatus.WAITING_FOR_PAYMENT,
	TESTING_IN_PROGRESS: $lg.serviceStatus.TESTING_IN_PROGRESS,
	REPORT_RELEASED: $lg.serviceStatus.REPORT_RELEASED,
	REJECTED: $lg.serviceStatus.REJECTED
}));

export const services = derived(lg, ({ services: { sections: l } }) => ({
	frequencyDomainRFTest: frequencyDomainRFTest(l.frequencyDomainRFTest),
	timeDomainMeasurement: timeDomainMeasurement(l.timeDomainMeasurement),
	antennaTestSystems: antennaTestSystems(l.antennaTestSystems),
	circuitTestPlatforms: circuitTestPlatforms(l.circuitTestPlatforms)
}));
