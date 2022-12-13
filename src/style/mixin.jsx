import { css } from 'styled-components'
import { zIndexList } from './variable.jsx'

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

export const zIndex = (layer) => {
	return `
		z-index: ${zIndexList.indexOf(layer) + 1};
	`
}
