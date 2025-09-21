import { json } from '@sveltejs/kit';
import { DISCORD_WEBHOOK_URL } from '$env/static/private';
import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	if (!DISCORD_WEBHOOK_URL) {
		return json({ error: 'Server configuration error.' }, { status: 500 });
	}
	try {
		const { message, username, name } = await request.json();

		if (!message || typeof message !== 'string') {
			return json({ error: 'Invalid message format.' }, { status: 400 });
		}

		const payload: { content: string; username?: string; name?: string } = {
			content: message
		};
    if (username) {
      payload.username = username;
    }
    if (name) {
      payload.name = name;
    }

		const response = await fetch(DISCORD_WEBHOOK_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(payload)
		});

		if (response.ok) {
			return json({ success: true, message: 'Message sent!' }, { status: 200 });
		} 
    else {
			const errorText = await response.text();
			return json({ error: errorText }, { status: response.status });
		}
	} 
  catch (error) {
		return json({ error: 'Internal server error.' }, { status: 500 });
	}
};