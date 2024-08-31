export type Time = { days: number; hours: number; minutes: number; seconds: number };

export const timeToSeconds = ({ days, hours, minutes, seconds }: Time) =>
	days * 86400 + hours * 3600 + minutes * 60 + seconds;

export const secondsToTime = (seconds: number) => {
	const days = Math.floor(seconds / (24 * 3600));
	seconds %= 24 * 3600;
	const hours = Math.floor(seconds / 3600);
	seconds %= 3600;
	const minutes = Math.floor(seconds / 60);
	seconds %= 60;

	return { days, hours, minutes, seconds };
};

export const timeToText = (totalSeconds: number): string => {
	if (totalSeconds === 0) return '0 secs';
	const { days, hours, minutes, seconds } = secondsToTime(totalSeconds);
	const formattedTime: string[] = [];
	if (days > 0) formattedTime.push(`${days} ${days === 1 ? 'day' : 'days'}`);
	if (hours > 0) formattedTime.push(`${hours} hrs`);
	if (minutes > 0) formattedTime.push(`${minutes} mins`);
	if (seconds > 0) formattedTime.push(`${seconds} secs`);
	return formattedTime.join(', ');
};
