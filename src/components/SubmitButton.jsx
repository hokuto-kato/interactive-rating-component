import { css } from '@emotion/react'
import { colors, device, size } from '../style/variable.jsx'
import { useEffect, useRef } from 'react'
import gsap, { Power4 } from 'gsap'
import axios from 'axios'
import BtnBody from './BtnBody.jsx'
const SubmitButton = ({
	isLoading,
	isSubmitted,
	isValid,
	setIsLoading,
	setIsSubmitted,
	setIsError,
	setErrorMessage,
	setIsComplete,
	value
}) => {
	const btnRef = useRef(null)
	const btnShakeTl = useRef(null)
	const btnLoadingTl = useRef(null)
	useEffect(() => {
		btnLoadingTl.current = gsap.timeline()
		const mm = gsap.matchMedia()
		if (isLoading) {
			btnLoadingTl.current.set(btnRef.current, {
				cursor: 'default'
			})
			mm.add(`(min-width:${size.tablet})`, () => {
				btnLoadingTl.current.to(btnRef.current, {
					width: 45,
					height: 45,
					borderRadius: 22.5,
					borderStyle: 'solid',
					borderWidth: 3,
					borderLeftColor: colors.orange,
					borderTopColor: colors.lightGrey,
					borderRightColor: colors.lightGrey,
					borderBottomColor: colors.lightGrey,
					backgroundColor: 'transparent',
					duration: 0.5,
					ease: Power4.easeOut
				})
			})
			mm.add(`(max-width:${size.tablet})`, () => {
				btnLoadingTl.current.to(btnRef.current, {
					width: 40,
					height: 40,
					borderRadius: 20,
					borderStyle: 'solid',
					borderWidth: 3,
					borderLeftColor: colors.orange,
					borderTopColor: colors.lightGrey,
					borderRightColor: colors.lightGrey,
					borderBottomColor: colors.lightGrey,
					backgroundColor: 'transparent',
					duration: 0.5,
					ease: Power4.easeOut
				})
			})
			btnLoadingTl.current.to(
				btnRef.current,
				{
					rotate: 360,
					duration: 1.2,
					repeat: -1,
					ease: 'linear'
				},
				'-=0.2'
			)
		}
		if (isSubmitted) {
			btnLoadingTl.current.set(btnRef.current, {
				cursor: 'default',
				marginTop: 25
			})
			mm.add(`(min-width:${size.tablet})`, () => {
				btnLoadingTl.current.set(btnRef.current, {
					width: 50,
					height: 50,
					borderRadius: 25,
					marginTop: 25
				})
			})
			mm.add(`(max-width:${size.tablet})`, () => {
				btnLoadingTl.current.set(btnRef.current, {
					width: 40,
					height: 40,
					borderRadius: 20,
					marginTop: 25
				})
			})
			btnLoadingTl.current
				.to(btnRef.current, {
					backgroundColor: colors.orange,
					duration: 0.5,
					ease: Power4.easeOut
				})
				.add(() => {
					setTimeout(() => {
						setIsComplete(true)
					}, 1000)
				})
		}
		return () => btnLoadingTl.current.revert()
	}, [isLoading, isSubmitted])
	const btnShake = () => {
		btnShakeTl.current = gsap
			.timeline()
			.to(btnRef.current, {
				x: -10,
				duration: 0.05
			})
			.to(btnRef.current, {
				x: 10,
				duration: 0.05
			})
			.to(btnRef.current, {
				x: 0,
				duration: 0.05
			})
	}
	const handleSubmit = () => {
		if (isValid) {
			if (isLoading || isSubmitted) return
			setIsError(false)
			setIsLoading(true)
			axios
				.post(
					'https://jsonplaceholder.typicode.com/posts?_delay=1000',
					value
				)
				.then(() => {
					setIsLoading(false)
					setIsSubmitted(true)
				})
				.catch((err) => {
					setErrorMessage(`${err.message}.`)
					setIsError(true)
				})
				.finally(() => {
					setIsLoading(false)
				})
		} else {
			setErrorMessage("You haven't rated yet.")
			setIsError(true)
			btnShake()
		}
	}
	return (
		<>
			<button
				css={btn(isValid, isLoading, isSubmitted)}
				onClick={handleSubmit}
				ref={btnRef}
				data-fade-up=""
			>
				<BtnBody isLoading={isLoading} isSubmitted={isSubmitted} />
			</button>
		</>
	)
}
const btnBase = css`
	margin: 25px auto 0;
	width: 100%;
	height: 45px;
	border-radius: 22.5px;
	display: grid;
	place-items: center;
	place-content: center;
	background-color: ${colors.lightGrey};
	transition: 0.2s ease-out;
	transition-property: background-color, color;
	${device.tablet} {
		margin-top: 30px;
	}
	@media (any-hover: hover) and (any-pointer: fine) {
		&:hover {
			background-color: ${colors.pureWhite};
			.btnBody {
				color: ${colors.orange};
			}
		}
	}
`
const btn = (isValid) => {
	if (isValid) {
		return css`
			${btnBase};
			background-color: ${colors.orange};
		`
	}
	return css`
		${btnBase};
	`
}
export default SubmitButton
