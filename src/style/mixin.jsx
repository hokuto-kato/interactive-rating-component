import { css } from 'styled-components'
export const rem = (px) => {
	return `${px / 16}rem`
}

export const hover = (...args) => {
	return css`
		@media (any-hover: hover) and (any-pointer: fine) {
			&:hover {
				${css(...args)};
			}
		}
	`
}
