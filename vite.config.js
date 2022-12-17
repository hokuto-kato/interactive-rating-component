import react from '@vitejs/plugin-react'
import squoosh from './plugins/squoosh'
export default {
	base: './',
	root: 'src',
	server: {
		open: true,
		host: true
	},
	css: {
		devSourcemap: true
	},
	build: {
		outDir: '../dist',
		emptyOutDir: true,
		publicDir: '../src/public',
		rollupOptions: {
			output: {
				chunkFileNames: 'js/script.[hash].js',
				entryFileNames: 'js/script.[hash].js',
				assetFileNames: ({ name }) => {
					if (/\.(gif|jpe?g|png|svg|webp)$/.test(name ?? '')) {
						return 'img/[name].[hash][extname]'
					}
					if (/\.(mp4|webm)$/.test(name ?? '')) {
						return 'movie/[name].[hash][extname]'
					}
					if (/\.css$/.test(name ?? '')) {
						return 'css/style.[hash][extname]'
					}
					if (/\.ico/.test(name ?? '')) {
						return 'favicon.ico'
					}
					return 'assets/[name].[hash][extname]'
				}
			}
		}
	},
	plugins: [
		react({
			jsxImportSource: '@emotion/react',
			babel: {
				plugins: ['@emotion/babel-plugin']
			}
		}),
		squoosh()
	]
}
