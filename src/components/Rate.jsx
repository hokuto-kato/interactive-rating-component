import { forwardRef, useLayoutEffect, useRef, useState } from 'react'
import { css } from '@emotion/react'
import axios from 'axios'
import gsap, { Power4 } from 'gsap'
import { colors, device, size, visuallyHidden } from '../style/variable.jsx'
import { rem } from '../style/mixin.jsx'
import Error from './Error.jsx'
import { BsCheck } from 'react-icons/all'

export const Rate = forwardRef(
	({ rates, setIsComplete, value, setValue }, ref) => {
		const [isValid, setIsValid] = useState(false)
		const [isLoading, setIsLoading] = useState(false)
		const [isSubmitted, setIsSubmitted] = useState(false)
		const [isError, setIsError] = useState(false)
		const [errorMessage, setErrorMessage] = useState('')
		const btnRef = useRef(null)
		const btnShakeTl = useRef(null)
		const btnLoadingTl = useRef(null)
		useLayoutEffect(() => {
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
		const handleRadio = (e) => {
			setIsValid(true)
			setIsError(false)
			const id = Math.floor(Math.random() * 1e3)
			setValue((prev) => ({
				...prev,
				[e.target.name]: e.target.value,
				id
			}))
		}
		const BtnBody = () => {
			if (!isLoading && !isSubmitted) {
				return (
					<>
						<span className="btnBody" css={btnBody}>
							SUBMIT
						</span>
					</>
				)
			} else if (isSubmitted) {
				return <BsCheck css={check} />
			}
		}
		return (
			<section css={section} ref={ref}>
				<figure css={starWrap}>
					<span css={starBody} role="img" aria-label="star"></span>
				</figure>
				<h1 css={heading}>How did we do?</h1>
				<p css={body}>
					Please let us know how we did with your support request. All
					feedback is appreciated to help us improve our offering!
				</p>
				<ul css={list}>
					{rates.map((rate) => (
						<li key={rate}>
							<input
								css={input}
								id={`rate${rate}`}
								type="radio"
								name="rate"
								value={rate}
								onChange={handleRadio}
								disabled={isLoading}
							/>
							<label css={label} htmlFor={`rate${rate}`}>
								<span css={rateBody} className="rateBody">
									{rate}
								</span>
							</label>
						</li>
					))}
				</ul>
				<Error isError={isError} errorMessage={errorMessage} />
				<button
					css={btn(isValid, isLoading, isSubmitted)}
					onClick={handleSubmit}
					ref={btnRef}
				>
					<BtnBody />
				</button>
			</section>
		)
	}
)
const section = css`
	transition: opacity 1s ease-in;
	&.fade-exit {
		opacity: 1;
	}
	&.fade-exit-active {
		opacity: 0;
	}
`
const starWrap = css`
	width: 40px;
	height: 40px;
	background-color: ${colors.darkBlue};
	border-radius: 100%;
	display: grid;
	place-items: center;
	place-content: center;
	${device.tablet} {
		width: 48px;
		height: 48px;
	}
`
const starBody = css`
	content: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNyAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMDY2ODggMC40Mjk5NTNMMTEuMDU2NyA0LjQ2MTM3QzExLjE2OTEgNC42ODkwOSAxMS4zODY0IDQuODQ2OTIgMTEuNjM3NyA0Ljg4MzQxTDE2LjA4NjYgNS41Mjk5OEMxNi4zNzczIDUuNTcyMiAxNi42MTg4IDUuNzc1ODMgMTYuNzA5NSA2LjA1NTIzQzE2LjgwMDIgNi4zMzQ2MyAxNi43MjQ0IDYuNjQxMzEgMTYuNTE0IDYuODQ2MjdMMTMuMjk0MyA5Ljk4NDIxQzEzLjExMjIgMTAuMTYxNyAxMy4wMjk2IDEwLjQxNzEgMTMuMDcyMSAxMC42NjdMMTMuODMyMSAxNS4wOTgxQzEzLjg4MTYgMTUuMzg3NiAxMy43NjI2IDE1LjY4MDEgMTMuNTI1IDE1Ljg1MjdDMTMuMjg3NCAxNi4wMjUzIDEyLjk3MjQgMTYuMDQ4IDEyLjcxMjUgMTUuOTExNEw4LjczMjc5IDEzLjgxODlDOC41MDc4OSAxMy43MDA5IDguMjM5MzcgMTMuNzAwOSA4LjAxNDQ3IDEzLjgxODlMNC4wMzQ3NSAxNS45MTE0QzMuNzc0ODEgMTYuMDQ4IDMuNDU5ODQgMTYuMDI1MyAzLjIyMjI0IDE1Ljg1MjdDMi45ODQ2NCAxNS42ODAxIDIuODY1NjIgMTUuMzg3NiAyLjkxNTIxIDE1LjA5ODFMMy42NzUyIDEwLjY2N0MzLjcxODE1IDEwLjQxNjcgMy42MzUwMyAxMC4xNjEzIDMuNDUyOTkgOS45ODQyMUwwLjIzMzI1OCA2Ljg0NjI3QzAuMDIyODE0IDYuNjQxMzEgLTAuMDUyOTg0NiA2LjMzNDYzIDAuMDM3NzQ1OSA2LjA1NTIzQzAuMTI4NDc2IDUuNzc1ODMgMC4zNjk5OTMgNS41NzIyIDAuNjYwNzA0IDUuNTI5OThMNS4xMDk1MyA0Ljg4MzQxQzUuMzYwODUgNC44NDY5MiA1LjU3ODEyIDQuNjg5MDkgNS42OTA1MiA0LjQ2MTM3TDcuNjgwMzggMC40Mjk5NTNDNy45NjU4NiAtMC4xNDMzMTggOC43ODM3MiAtMC4xNDMzMTggOS4wNjY4OCAwLjQyOTk1M1oiIGZpbGw9IiNGQzc2MTQiLz4KPC9zdmc+Cg==');
	width: 16.7px;
	height: 16px;
	${device.tablet} {
		width: 14px;
		height: 13.3px;
	}
`
const heading = css`
	font-size: ${rem(24)};
	color: ${colors.pureWhite};
	margin-top: 30px;
	line-height: normal;
	font-weight: bold;
	${device.tablet} {
		font-size: ${rem(28)};
	}
`
const body = css`
	font-size: ${rem(14)};
	color: ${colors.lightGrey};
	line-height: 1.57;
	margin-top: 10px;
	${device.tablet} {
		font-size: ${rem(15)};
		line-height: 1.6;
		margin-top: 7px;
	}
`
const list = css`
	margin-top: 24px;
	display: grid;
	gap: 15px;
	grid-template-columns: repeat(5, 1fr);
	place-items: center;
	${device.tablet} {
		gap: 20px;
	}
`
const label = css`
	background-color: ${colors.darkBlue};
	display: grid;
	place-items: center;
	place-content: center;
	border-radius: 100px;
	position: relative;
	width: 40px;
	height: 40px;
	overflow: hidden;
	transform: scale(1);
	transition: transform 0.3s cubic-bezier(0.23, 0.98, 0.62, 1.58),
		background-color 0.3s ease-out;
	${device.tablet} {
		width: 50px;
		height: 50px;
	}
	@media (any-hover: hover) and (any-pointer: fine) {
		&:hover {
			transform: scale(1.1);
			background-color: ${colors.orange};
			.rateBody {
				color: ${colors.pureWhite};
			}
		}
	}
`
const rateBody = css`
	color: ${colors.lightGrey};
	font-size: ${rem(14)};
	font-weight: bold;
	transform: translateY(0.1rem);
	transition: color 0.3s cubic-bezier(0.23, 0.98, 0.62, 1.58);
	${device.tablet} {
		font-size: ${rem(16)};
	}
`
const input = css`
	${visuallyHidden}
	&:checked + label {
		background-color: ${colors.lightGrey};
	}
	&:checked + label > span {
		color: ${colors.pureWhite};
	}
`
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
const btnBody = css`
	color: ${colors.pureWhite};
	font-size: ${rem(14)};
	font-weight: bold;
	letter-spacing: 2px;
	line-height: normal;
	transform: translateY(0.1rem);
	transition: color 0.5s cubic-bezier(0.435, 0.25, 0.15, 0.965);
	margin: 0 auto;
`
const check = css`
	color: ${colors.pureWhite};
	font-size: ${rem(25)};
`

Rate.displayName = 'Rate'
export default Rate
