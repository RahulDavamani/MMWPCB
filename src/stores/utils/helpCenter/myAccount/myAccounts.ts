import type { Lang } from '$lib/locales/en';
import { accountSettings } from './accountSettings/accountSettings';
import { registeringSigningIn } from './registeringSigningIn/registeringSigningIn';
import { mmwpcbRewards } from './mmwpcbRewards/mmwpcbRewards';

export const myAccount = (lg: Lang) => {
	const { title } = lg.support.sections.myAccount;
	return {
		title,
		subsections: {
			registeringSigningIn: registeringSigningIn(lg),
			accountSettings: accountSettings(lg),
			mmwpcbRewards: mmwpcbRewards(lg)
		}
	};
};
