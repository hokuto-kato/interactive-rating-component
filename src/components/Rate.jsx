import { forwardRef, useRef, useState } from 'react'
import { css } from '@emotion/react'
import axios from 'axios'
import { CSSTransition } from 'react-transition-group'
import gsap from 'gsap'
import { colors, device, visuallyHidden } from '../style/variable.jsx'
import { rem, zIndex } from '../style/mixin.jsx'

export const Rate = forwardRef(
	({ rates, setIsSubmitted, value, setValue }, ref) => {
		const [isValid, setIsValid] = useState(false)
		const [isLoading, setIsLoading] = useState(false)
		const [isError, setIsError] = useState(false)
		const [errorMessage, setErrorMessage] = useState('')
		const errorNode = useRef()
		const btnRef = useRef()
		const tl = useRef()
		const btnShake = () => {
			tl.current = gsap.timeline()
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
				setIsLoading(true)
				axios
				.post('https://jsonplaceholder.typicode.com/posts', value)
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
				setErrorMessage('You haven\'t rated yet.')
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
		return (
			<section css={fade} ref={ref}>
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
							/>
							<label css={label} htmlFor={`rate${rate}`}>
								<span css={rateBody} className="rateBody">
									{rate}
								</span>
							</label>
						</li>
					))}
				</ul>
				<CSSTransition
					nodeRef={errorNode}
					timeout={200}
					in={isError}
					classNames="error"
					unmountOnExit
				>
					<p css={error} ref={errorNode}>
						{errorMessage}
					</p>
				</CSSTransition>
				<button css={isValid
					? activeBtn
					: btn} onClick={handleSubmit} ref={btnRef}>
					<span className="btnBody" css={btnBody}>SUBMIT</span>
				</button>
			</section>
		)
	}
)
const fade = css`
	&.fade-exit {
		opacity: 1;
	}
	&.fade-exit-active {
		opacity: 0;
		transition: opacity 200ms ease-in;
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
const btn = css`
	margin-top: 25px;
	width: 100%;
	min-height: 45px;
	border-radius: 22.5px;
	display: grid;
	place-items: center;
	place-content: center;
	background-color: ${colors.lightGrey};
	position: relative;
	overflow: hidden;
	@media (any-hover: hover) and (any-pointer: fine) {
		&:hover {
			.btnBody {
				color: ${colors.orange};
			}
			&:before {
				transform: scaleX(1);
				transform-origin: left;
			}
		}
	}
	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 22.5px;
		background-color: ${colors.pureWhite};
		transform: scaleX(0);
		transform-origin: right;
		transition: transform 0.5s cubic-bezier(0.435, 0.25, 0.15, 0.965);
		${zIndex('btnBg')}
	}
	${device.tablet} {
		margin-top: 30px;
	}
`
const activeBtn = css(btn, {
	transition: 'background-color 0.2s ease-out',
	backgroundColor: colors.orange
})
const btnBody = css`
	color: ${colors.pureWhite};
	font-size: ${rem(14)};
	font-weight: bold;
	letter-spacing: 2px;
	line-height: normal;
	transform: translateY(0.1rem);
	${zIndex('btnBody')}
	transition: color 0.5s cubic-bezier(0.435, 0.25, 0.15, 0.965);
	${device.tablet} {
		font-size: ${rem(15)};
	}
`
const error = css`
	color: ${colors.burntSienna};
	margin-top: 30px;
	text-align: center;
	font-size: ${rem(14)};
	${device.tablet} {
		font-size: ${rem(16)};
	}
	&.error-enter {
		opacity: 0;
	}
	&.error-enter-active {
		opacity: 1;
		transition: opacity 0.2s ease-in;
	}
	&.error-exit {
		opacity: 1;
	}
	&.error-exit-active {
		opacity: 0;
		transition: opacity 0.2s ease-out;
	}
`
Rate.displayName = 'Rate'
export default Rate
