import { useEffect, useState, useRef } from 'react'
import { css } from '@emotion/react'
import './style/mixin'
import { colors, device } from './style/variable.jsx'
import { webfont } from './include/webfont.js'
import Rate from './components/Rate.jsx'
import Thanks from './components/Thanks.jsx'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
function App() {
	useEffect(() => {
		webfont()
	})
	const rates = [1, 2, 3, 4, 5]
	const [isComplete, setIsComplete] = useState(false)
	const [value, setValue] = useState(null)
	const thanksRef = useRef(null)
	const rateRef = useRef(null)
	const nodeRef = isComplete ? thanksRef : rateRef
	return (
		<div css={container}>
			<main css={main}>
				<div css={card}>
					<SwitchTransition>
						<CSSTransition
							key={isComplete}
							nodeRef={nodeRef}
							timeout={0}
							classNames="fade"
						>
							{isComplete ? (
								<Thanks value={value} ref={thanksRef} />
							) : (
								<Rate
									rates={rates}
									setIsComplete={setIsComplete}
									value={value}
									setValue={setValue}
									ref={rateRef}
								/>
							)}
						</CSSTransition>
					</SwitchTransition>
				</div>
			</main>
		</div>
	)
}
const container = css`
	height: 100dvh;
	display: grid;
	place-items: center;
	place-content: center;
`
const main = css`
	padding: 0 25px;
	width: 100%;
	display: grid;
	place-items: center;
`
const card = css`
	padding: 25px 25px 30px;
	border-radius: 15px;
	background-image: radial-gradient(
		circle at 50% 0,
		${colors.ebonyClay},
		${colors.mirage} 90%
	);
	max-width: 412px;
	${device.tablet} {
		border-radius: 30px;
		padding: 30px;
	}
`
export default App
