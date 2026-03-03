import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { env } from '$env/dynamic/private';

export const GET: RequestHandler = async ({ params }) => {
	const folder = params.folder;
	const cloudName = env.CLOUDINARY_CLOUD_NAME || 'xynree';
	const apiKey = env.CLOUDINARY_API_KEY;
	const apiSecret = env.CLOUDINARY_API_SECRET;

	if (!apiKey || !apiSecret) {
		console.error('Missing Cloudinary credentials in environment');
		return json({ error: 'Cloudinary API keys not configured' }, { status: 500 });
	}

	try {
		// Basic Auth for Cloudinary Admin API
		const auth = btoa(`${apiKey}:${apiSecret}`);

		// Use the Search API to get all resources in a folder
		// Note: expression needs to match your folder structure exactly
		// If you put things in "website/art/tattoos", the expression should find that.
		const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/resources/search`, {
			method: 'POST',
			headers: {
				Authorization: `Basic ${auth}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				expression: `folder:"website/${folder}/*"`,
				max_results: 100,
				sort_by: [{ public_id: 'asc' }]
			})
		});

		if (!response.ok) {
			const errorData = await response.json();
			console.error('Cloudinary API Error:', errorData);
			return json(
				{ error: errorData.error?.message || 'Failed to fetch from Cloudinary' },
				{ status: response.status }
			);
		}

		const data = await response.json();
		const images = data.resources.map((res: { secure_url: string }) => ({
			url: res.secure_url,
			caption: ''
		}));

		return json({ images });
	} catch (e) {
		console.error('Network or Parsing Error fetching Cloudinary images:', e);
		return json({ error: 'Internal server error' }, { status: 500 });
	}
};
