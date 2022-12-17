import { forwardRef, useState } from 'react'
import { css } from '@emotion/react'
import { colors, device } from '../style/variable.jsx'
import { rem } from '../style/mixin.jsx'
import Error from './Error.jsx'
import SubmitButton from './SubmitButton.jsx'
import RadioButton from './RadioButton.jsx'
export const Rate = forwardRef(
	({ rates, setIsComplete, cardBgRef, value, setValue }, ref) => {
		const [isValid, setIsValid] = useState(false)
		const [isLoading, setIsLoading] = useState(false)
		const [isSubmitted, setIsSubmitted] = useState(false)
		const [isError, setIsError] = useState(false)
		const [errorMessage, setErrorMessage] = useState('')

		return (
			<section css={section} ref={ref}>
				<figure css={starWrap} data-fade-up="">
					<span css={starBody} role="img" aria-label="star"></span>
				</figure>
				<h1 css={heading} data-fade-up="">
					How did we do?
				</h1>
				<p css={body} data-fade-up="">
					Please let us know how we did with your support request. All
					feedback is appreciated to help us improve our offering!
				</p>
				<RadioButton
					isLoading={isLoading}
					setValue={setValue}
					setIsError={setIsError}
					setIsValid={setIsValid}
				/>
				<Error isError={isError} errorMessage={errorMessage} />
				<SubmitButton
					isValid={isValid}
					isLoading={isLoading}
					isSubmitted={isSubmitted}
					setIsLoading={setIsLoading}
					setIsSubmitted={setIsSubmitted}
					setIsError={setIsError}
					setErrorMessage={setErrorMessage}
					setIsComplete={setIsComplete}
					value={value}
				/>
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

Rate.displayName = 'Rate'
export default Rate
