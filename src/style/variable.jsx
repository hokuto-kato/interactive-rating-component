export const colors = {
	ebonyClay: '#232A34',
	mirage: '#181E27',
	veryDarkblue: '#131518',
	darkBlue: '#262e38',
	orange: '#fc7614',
	pureWhite: '#ffffff',
	lightGrey: '#969fad'
}

export const size = {
	tablet: '412px'
}

export const device = {
	tablet: `@media(min-width: ${size.tablet})`
}

export const visuallyHidden = `
	position: absolute;
	width: 1px;
	height: 1px;
	margin: -1px;
	border: 0;
	padding: 0;
	white-space: nowrap;
	clip-path: inset(100%);
	clip: rect(0 0 0 0);
	overflow: hidden;
`
