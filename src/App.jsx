import { useEffect, useRef, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import styled from 'styled-components'
import './style/mixin'
import { colors, device } from './style/variable.jsx'
import { webfont } from './include/webfont.js'
import Rate from './components/Rate.jsx'
import Thanks from './components/Thanks.jsx'
function App() {
	useEffect(() => {
		webfont()
	})
	const rates = [1, 2, 3, 4, 5]
	const [isSubmitted, setIsSubmitted] = useState(false)
	const [value, setValue] = useState(null)
	const thanksRef = useRef()
	const rateRef = useRef()
	const nodeRef = isSubmitted ? thanksRef : rateRef
	return (
		<SContainer>
			<SMain>
				<SCard>
					<SwitchTransition>
						<CSSTransition
							key={isSubmitted}
							classNames="fade"
							nodeRef={nodeRef}
							timeout={300}
						>
							{isSubmitted ? (
								<Thanks
									value={value}
									ref={thanksRef}
									name="thanks"
								/>
							) : (
								<Rate
									rates={rates}
									setIsSubmitted={setIsSubmitted}
									value={value}
									setValue={setValue}
									ref={rateRef}
									name="rate"
								/>
							)}
						</CSSTransition>
					</SwitchTransition>
				</SCard>
			</SMain>
		</SContainer>
	)
}
const SContainer = styled.div`
	height: 100dvh;
	display: grid;
	place-items: center;
	place-content: center;
`
const SMain = styled.main`
	padding: 0 25px;
	width: 100%;
	display: grid;
	place-items: center;
`
const SCard = styled.div`
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
