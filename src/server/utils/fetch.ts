const allowSelfSigned = process.env.ALLOW_SELF_SIGNED_CERTS === 'true'

type FetchOptions = RequestInit & {
	tls?: { rejectUnauthorized: boolean }
}

export async function fetchWithTls(url: string, options: RequestInit = {}): Promise<Response> {
	const fetchOptions: FetchOptions = { ...options }
	if (allowSelfSigned) {
		fetchOptions.tls = { rejectUnauthorized: false }
	}
	try {
		return await fetch(url, fetchOptions)
	} catch (err) {
		if (
			!allowSelfSigned &&
			err instanceof Error &&
			(err.message.includes('self-signed') ||
				err.message.includes('SELF_SIGNED') ||
				err.message.includes('certificate') ||
				err.message.includes('CERT_'))
		) {
			throw new Error(
				'TLS certificate validation failed. If using self-signed certificates, set ALLOW_SELF_SIGNED_CERTS=true',
				{ cause: err }
			)
		}
		throw err
	}
}
