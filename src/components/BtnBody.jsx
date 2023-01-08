import { BsCheck } from 'react-icons/bs'
import { css } from '@emotion/react'
import { colors } from '../style/variable.jsx'
import { rem } from '../style/mixin.jsx'
const BtnBody = ({ isLoading, isSubmitted }) => {
	if (!isLoading && !isSubmitted) {
		return (
			<span className="btnBody" css={btnBody}>
				SUBMIT
			</span>
		)
	} else if (isSubmitted) {
		return <BsCheck css={check} />
	}
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
export default BtnBody
