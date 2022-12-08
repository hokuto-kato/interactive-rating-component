import styled from 'styled-components'
import './style/mixin'
import { colors, device } from './style/variable.jsx'
import { webfont } from './include/webfont.js'
import { useEffect } from 'react'
import Rate from './components/Rate.jsx'

function App() {
	useEffect(() => {
		webfont()
	})
	const rates = [1, 2, 3, 4, 5]
	return (
		<SContainer>
			<SMain>
				<SCard>
					<Rate rates={rates} />
				</SCard>
			</SMain>
		</SContainer>
	)
}
const SContainer = styled.div`
	height: 100dvh;
	background-color: ${colors.veryDarkblue};
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
