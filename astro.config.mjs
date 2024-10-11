// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Cascade UI',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				
				
				{
					label: 'Components',
					autogenerate: { directory: 'components' },
				},
			],
			
		}),
	],
});
