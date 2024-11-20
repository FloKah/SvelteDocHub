import fs from 'fs';
import path from 'path';

export function load() {
	const docsDir = path.resolve('docs');
	if (!fs.existsSync(docsDir)) {
		return { docs: [] };
	}
	const files = fs.readdirSync(docsDir);
	const docs = files.map(file => ({ title: file.replace('.md', '') }));
	return { docs };
}