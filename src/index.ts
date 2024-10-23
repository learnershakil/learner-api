/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx): Promise<Response> {
		return Response.json({ User: 'learnershakil', Work: 'currently cooking something interesting...', Most_used_language_Today: 'Typescript', Coding_Time: '5 hrs 45 min' , Project_Working_On: { project: 'Novice Lab', Project_Status: 'In Development'} });
	},
} satisfies ExportedHandler<Env>;
