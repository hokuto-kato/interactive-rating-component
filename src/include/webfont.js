import WebFont from 'webfontloader'

export const webfont = () => {
	const html = document.querySelector('html')
	WebFont.load({
		google: {
			families: ['Overpass:400,700']
		}
	})
	setTimeout(() => {
		html.classList.add('wf-inactive')
	}, 3000)
}
