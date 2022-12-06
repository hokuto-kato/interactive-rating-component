import styled from 'styled-components'
import './style/mixin'
import { rem } from './style/mixin.jsx'
import { colors, device } from './style/variable.jsx'
import { webfont } from './include/webfont.js'
import { useEffect } from 'react'

function App() {
	useEffect(() => {
		webfont()
	})
	return <SHeading>Hello React</SHeading>
}

const SHeading = styled.h1`
	font-size: ${rem(20)};
	color: ${colors.orange};
	@media ${device.mobile} {
		font-size: ${rem(30)};
	}
`
export default App
