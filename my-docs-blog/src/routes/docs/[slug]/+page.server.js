import fs from 'fs';
import path from 'path';
import { renderMarkdown } from '$lib/markdown.js';

export async function load({ params }) {
	const docsDir = path.resolve('docs');
	const filePath = path.join(docsDir, `${params.slug}.md`);
	if (!fs.existsSync(filePath)) {
		return { status: 404, error: new Error(`Dokument ${params.slug} nicht gefunden`) };
	} else {
		const markdown = fs.readFileSync(filePath, 'utf-8');
		const content = await renderMarkdown(markdown);
		// Fetch all docs for the sidebar
		const files = fs.readdirSync(docsDir);
		const docs = files.map(file => ({ title: file.replace('.md', '') }));
		const docData = { title: params.slug, content, file: filePath }
		return { doc: docData, docs };
	}
}