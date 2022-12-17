import { css } from '@emotion/react'
import { colors, device, visuallyHidden } from '../style/variable.jsx'
import { rem } from '../style/mixin.jsx'

const RadioButton = ({ isLoading, setIsValid, setIsError, setValue }) => {
	const rates = [1, 2, 3, 4, 5]
	const handleRadio = (e) => {
		const id = Math.floor(Math.random() * 1e3)
		setIsValid(true)
		setIsError(false)
		setValue((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
			id
		}))
	}
	return (
		<ul css={list}>
			{rates.map((rate) => (
				<li key={rate} data-fade-up="">
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
	)
}

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

export default RadioButton
