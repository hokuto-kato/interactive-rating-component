import styled from 'styled-components'
import './style/mixin'
import { colors, device } from './style/variable.jsx'
import { webfont } from './include/webfont.js'
import { lazy, useEffect, useState } from 'react'
import Rate from './components/Rate.jsx'
const Thanks = lazy(() => import('./components/Thanks.jsx'))
function App() {
	useEffect(() => {
		webfont()
	})
	const rates = [1, 2, 3, 4, 5]
	const [isSubmitted, setIsSubmitted] = useState(false)
	const [value, setValue] = useState(null)
	return (
		<SContainer>
			<SMain>
				<SCard>
					{isSubmitted ? (
						<Thanks value={value} />
					) : (
						<Rate
							rates={rates}
							setIsSubmitted={setIsSubmitted}
							value={value}
							setValue={setValue}
						/>
					)}
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
		padding: 32px;
	}
`
export default App
