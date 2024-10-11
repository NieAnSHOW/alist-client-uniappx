import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import autocss from './uni_modules/kux-autocss';

export default defineConfig({
	plugins: [
		uni(),
		autocss({
			configFile: 'autocss/config.js',
			cssFile: 'autocss/index.css',
			generateGlobalCss: true
		})
	]
});