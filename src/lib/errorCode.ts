import type { NumericRange } from '@sveltejs/kit';

type TRPCErrorCode =
	| 'BAD_REQUEST'
	| 'UNAUTHORIZED'
	| 'FORBIDDEN'
	| 'NOT_FOUND'
	| 'TIMEOUT'
	| 'CONFLICT'
	| 'PRECONDITION_FAILED'
	| 'PAYLOAD_TOO_LARGE'
	| 'METHOD_NOT_SUPPORTED'
	| 'UNPROCESSABLE_CONTENT'
	| 'TOO_MANY_REQUESTS'
	| 'CLIENT_CLOSED_REQUEST'
	| 'INTERNAL_SERVER_ERROR';

export interface ErrorCode {
	name: string;
	message: string;
	http: NumericRange<400, 599>;
	trpc: TRPCErrorCode;
	prisma: string[];
}

const internalErrorCode: ErrorCode = {
	name: 'Internal Server Error',
	message: 'An unexpected error occurred on the server.',
	http: 500,
	trpc: 'INTERNAL_SERVER_ERROR',
	prisma: []
};

export const getErrorCode = ({ http, trpc, prisma }: { http?: number; trpc?: string; prisma?: string }): ErrorCode => {
	if (http) return errorCodes.find((ec) => ec.http == http) ?? internalErrorCode;
	if (trpc) return errorCodes.find((ec) => ec.trpc == trpc) ?? internalErrorCode;
	if (prisma) return errorCodes.find((ec) => ec.prisma.includes(prisma)) ?? internalErrorCode;
	return internalErrorCode;
};

export const errorCodes: ErrorCode[] = [
	{
		name: 'Bad Request',
		message: 'The server could not process the request due to invalid input.',
		http: 400,
		trpc: 'BAD_REQUEST',
		prisma: ['P2003']
	},
	{
		name: 'Unauthorized',
		message: 'The client must authenticate to get the requested response.',
		http: 401,
		trpc: 'UNAUTHORIZED',
		prisma: []
	},
	{
		name: 'Forbidden',
		message: 'You do not have authorization to access this page.',
		http: 403,
		trpc: 'FORBIDDEN',
		prisma: []
	},
	{
		name: 'Not Found',
		message: 'The server cannot find the requested resource.',
		http: 404,
		trpc: 'NOT_FOUND',
		prisma: ['P2025']
	},
	{
		name: 'Method Not Supported',
		message: 'The request method is known by the server but is not supported by the target resource.',
		http: 405,
		trpc: 'METHOD_NOT_SUPPORTED',
		prisma: []
	},
	{
		name: 'Timeout',
		message: 'The server would like to shut down this unused connection.',
		http: 408,
		trpc: 'TIMEOUT',
		prisma: []
	},
	{
		name: 'Conflict',
		message: 'The request conflicts with the current state of the server.',
		http: 409,
		trpc: 'CONFLICT',
		prisma: ['P2002']
	},
	{
		name: 'Precondition Failed',
		message: 'The server does not meet one of the preconditions that the requester put on the request.',
		http: 412,
		trpc: 'PRECONDITION_FAILED',
		prisma: []
	},
	{
		name: 'Payload Too Large',
		message: 'The request entity is larger than limits defined by the server.',
		http: 413,
		trpc: 'PAYLOAD_TOO_LARGE',
		prisma: []
	},
	{
		name: 'Unprocessable Content',
		message: 'The request was well-formed but was unable to be followed due to semantic errors.',
		http: 422,
		trpc: 'UNPROCESSABLE_CONTENT',
		prisma: []
	},
	{
		name: 'Too Many Requests',
		message: 'The user has sent too many requests in a given amount of time.',
		http: 429,
		trpc: 'TOO_MANY_REQUESTS',
		prisma: []
	},
	{
		name: 'Client Closed Request',
		message: 'The client has closed the request before the server could send a response.',
		http: 499,
		trpc: 'CLIENT_CLOSED_REQUEST',
		prisma: []
	},
	{
		name: 'Internal Server Error',
		message: 'An unexpected error occurred on the server.',
		http: 500,
		trpc: 'INTERNAL_SERVER_ERROR',
		prisma: []
	}
];
