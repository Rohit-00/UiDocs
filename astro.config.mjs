// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	
	integrations: [
		starlight(
			{
			
			title: 'Cascade UI',
			customCss: [
				'./src/styles/custom.css',
			  ],
			social: {
				github: 'https://github.com/Rohit-00/cascade',
				twitter: 'https://x.com/byir0nic'
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
