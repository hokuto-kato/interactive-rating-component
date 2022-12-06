export const rem = (px) => {
	return `${px / 16}rem`
}

export const mqMin = (px) => {
	return `@media (min-width: ${px}px)`
}
