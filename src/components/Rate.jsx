import styled from 'styled-components'
import { colors, device, visuallyHidden } from '../style/variable.jsx'
import { rem } from '../style/mixin.jsx'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const Rate = ({ rates, setIsSubmitted }) => {
	useEffect(() => {})
	const [isValid, setIsValid] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [isError, setIsError] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')
	const [value, setValue] = useState({})

	const handleSubmit = () => {
		if (isValid) {
			setIsLoading(true)
			axios
				.post('https://jsonplaceholder.typicode.com/posts', value)
				.then((res) => {
					setIsLoading(false)
					setIsSubmitted(true)
				})
				.catch((err) => {
					console.log(err.message)
					setErrorMessage(`${err.message}.`)
					setIsError(true)
				})
				.finally(() => {
					setIsLoading(false)
				})
		} else {
			setErrorMessage("You haven't rated yet.")
			setIsError(true)
		}
	}
	const handleRadio = (e) => {
		setIsValid(true)
		setIsError(false)
		const id = Math.floor(Math.random() * 1e3)
		setValue((prev) => ({ ...prev, [e.target.name]: e.target.value, id }))
	}
	return (
		<>
			<SStar>
				<SStarBody role="img" aria-label="star"></SStarBody>
			</SStar>
			<SCardHeading>How did we do?</SCardHeading>
			<SCardBody>
				Please let us know how we did with your support request. All
				feedback is appreciated to help us improve our offering!
			</SCardBody>
			<SRateList>
				{rates.map((rate) => (
					<li key={rate}>
						<SRateInput
							id={`rate${rate}`}
							type="radio"
							name="rate"
							value={rate}
							onChange={handleRadio}
						/>
						<SRateLabel htmlFor={`rate${rate}`}>
							<SRateBody>{rate}</SRateBody>
						</SRateLabel>
					</li>
				))}
			</SRateList>
			{isError && <SError>{errorMessage}</SError>}
			<SButton onClick={handleSubmit}>
				<SButtonBody>SUBMIT</SButtonBody>
			</SButton>
		</>
	)
}

const SStar = styled.figure`
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
const SStarBody = styled.span`
	content: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNyAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMDY2ODggMC40Mjk5NTNMMTEuMDU2NyA0LjQ2MTM3QzExLjE2OTEgNC42ODkwOSAxMS4zODY0IDQuODQ2OTIgMTEuNjM3NyA0Ljg4MzQxTDE2LjA4NjYgNS41Mjk5OEMxNi4zNzczIDUuNTcyMiAxNi42MTg4IDUuNzc1ODMgMTYuNzA5NSA2LjA1NTIzQzE2LjgwMDIgNi4zMzQ2MyAxNi43MjQ0IDYuNjQxMzEgMTYuNTE0IDYuODQ2MjdMMTMuMjk0MyA5Ljk4NDIxQzEzLjExMjIgMTAuMTYxNyAxMy4wMjk2IDEwLjQxNzEgMTMuMDcyMSAxMC42NjdMMTMuODMyMSAxNS4wOTgxQzEzLjg4MTYgMTUuMzg3NiAxMy43NjI2IDE1LjY4MDEgMTMuNTI1IDE1Ljg1MjdDMTMuMjg3NCAxNi4wMjUzIDEyLjk3MjQgMTYuMDQ4IDEyLjcxMjUgMTUuOTExNEw4LjczMjc5IDEzLjgxODlDOC41MDc4OSAxMy43MDA5IDguMjM5MzcgMTMuNzAwOSA4LjAxNDQ3IDEzLjgxODlMNC4wMzQ3NSAxNS45MTE0QzMuNzc0ODEgMTYuMDQ4IDMuNDU5ODQgMTYuMDI1MyAzLjIyMjI0IDE1Ljg1MjdDMi45ODQ2NCAxNS42ODAxIDIuODY1NjIgMTUuMzg3NiAyLjkxNTIxIDE1LjA5ODFMMy42NzUyIDEwLjY2N0MzLjcxODE1IDEwLjQxNjcgMy42MzUwMyAxMC4xNjEzIDMuNDUyOTkgOS45ODQyMUwwLjIzMzI1OCA2Ljg0NjI3QzAuMDIyODE0IDYuNjQxMzEgLTAuMDUyOTg0NiA2LjMzNDYzIDAuMDM3NzQ1OSA2LjA1NTIzQzAuMTI4NDc2IDUuNzc1ODMgMC4zNjk5OTMgNS41NzIyIDAuNjYwNzA0IDUuNTI5OThMNS4xMDk1MyA0Ljg4MzQxQzUuMzYwODUgNC44NDY5MiA1LjU3ODEyIDQuNjg5MDkgNS42OTA1MiA0LjQ2MTM3TDcuNjgwMzggMC40Mjk5NTNDNy45NjU4NiAtMC4xNDMzMTggOC43ODM3MiAtMC4xNDMzMTggOS4wNjY4OCAwLjQyOTk1M1oiIGZpbGw9IiNGQzc2MTQiLz4KPC9zdmc+Cg==');
	width: 16.7px;
	height: 16px;
	${device.tablet} {
		width: 14px;
		height: 13.3px;
	}
`
const SCardHeading = styled.h1`
	font-size: ${rem(24)};
	color: ${colors.pureWhite};
	margin-top: 30px;
	line-height: normal;
	font-weight: bold;
	${device.tablet} {
		font-size: ${rem(28)};
	}
`
const SCardBody = styled.p`
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
const SRateList = styled.ul`
	margin-top: 24px;
	display: grid;
	gap: 15px;
	grid-template-columns: repeat(5, 1fr);
	place-items: center;
	${device.tablet} {
		gap: 20px;
	}
`
const SRateLabel = styled.label`
	background-color: ${colors.darkBlue};
	width: 40px;
	height: 40px;
	display: grid;
	place-items: center;
	place-content: center;
	border-radius: 100px;
	${device.tablet} {
		width: 50px;
		height: 50px;
	}
}
`
const SRateBody = styled.span`
	color: ${colors.lightGrey};
	font-size: ${rem(14)};
	font-weight: bold;
	transform: translateY(0.1rem);
	${device.tablet} {
		font-size: ${rem(16)};
	}
`
const SRateInput = styled.input`
	${visuallyHidden}
	&:checked + ${SRateLabel} {
		background-color: ${colors.lightGrey};
	}
	&:checked + ${SRateLabel} > ${SRateBody} {
		color: ${colors.pureWhite};
	}
`
const SButton = styled.button`
	margin-top: 25px;
	width: 100%;
	min-height: 45px;
	border-radius: 22.5px;
	display: grid;
	place-items: center;
	place-content: center;
	background-color: ${colors.orange};
	${device.tablet} {
		margin-top: 30px;
	}
`
const SButtonBody = styled.span`
	color: ${colors.pureWhite};
	font-size: ${rem(14)};
	font-weight: bold;
	letter-spacing: 2px;
	line-height: normal;
	transform: translateY(0.1rem);
	${device.tablet} {
		font-size: ${rem(15)};
	}
`
const SError = styled.p`
	color: red;
	margin-top: 30px;
	text-align: center;
	font-size: ${rem(14)};
	${device.tablet} {
		font-size: ${rem(16)};
	}
`
export default Rate
