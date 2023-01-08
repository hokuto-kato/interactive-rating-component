import { BiErrorCircle } from 'react-icons/bi'
import { css } from '@emotion/react'
import { colors, device } from '../style/variable.jsx'
import { rem } from '../style/mixin.jsx'
import { useLayoutEffect, useRef } from 'react'
import gsap, { Power4 } from 'gsap'
const Error = ({ isError, errorMessage }) => {
	const errorRef = useRef(null)
	useLayoutEffect(() => {
		if (isError) {
			gsap.fromTo(
				errorRef.current,
				{
					opacity: 0,
					y: 0
				},
				{
					opacity: 1,
					duration: 0.5,
					ease: Power4.easeOut
				}
			)
		}
	}, [isError])
	return (
		<>
			{isError && (
				<p css={error} ref={errorRef}>
					<BiErrorCircle css={errorIcon} />
					<span css={errorBody}>{errorMessage}</span>
				</p>
			)}
		</>
	)
}
const error = css`
	margin-top: 30px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	${device.tablet} {
		font-size: ${rem(16)};
	}
`
const errorIcon = css`
	color: ${colors.burntSienna};
	margin-right: 5px;
	transform: translateY(-0.1rem);
`
const errorBody = css`
	color: ${colors.burntSienna};
	font-size: ${rem(14)};
	${device.tablet} {
		font-size: ${rem(15)};
	}
`
export default Error
