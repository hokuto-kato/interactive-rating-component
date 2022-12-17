import { useEffect, useState, useRef } from 'react'
import { css } from '@emotion/react'
import './style/mixin'
import { device } from './style/variable.jsx'
import { webfont } from './include/webfont.js'
import Rate from './components/Rate.jsx'
import Thanks from './components/Thanks.jsx'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import gsap from 'gsap'
import { CustomEase } from 'gsap/CustomEase'

function App() {
	useEffect(() => {
		webfont()
		gsap.registerPlugin(CustomEase)
		gsap.set('[data-card-bg]', {
			scaleY: 0
		})
		gsap.set('[data-fade-up]', {
			opacity: 0,
			y: 20
		})
		gsap.timeline()
			.to('[data-card-bg]', {
				delay: 0.5,
				scaleY: 1,
				duration: 1,
				ease: CustomEase.create(
					'custom',
					'M0,0 C0.435,0.25 0.15,0.965 1,1'
				)
			})
			.to('[data-fade-up]', {
				opacity: 1,
				y: 0,
				stagger: 0.1,
				duration: 1,
				ease: 'power4.out'
			})
	}, [])
	const [isComplete, setIsComplete] = useState(false)
	const [value, setValue] = useState(null)
	const thanksRef = useRef(null)
	const rateRef = useRef(null)
	const cardBgRef = useRef(null)
	const nodeRef = isComplete ? thanksRef : rateRef
	return (
		<div css={container}>
			<main css={main}>
				<div css={card}>
					<span css={cardBg} ref={cardBgRef} data-card-bg=""></span>
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
									setIsComplete={setIsComplete}
									value={value}
									setValue={setValue}
									ref={rateRef}
									cardBgRef={cardBgRef}
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
	overflow: hidden;
`
const card = css`
	padding: 25px 25px 30px;
	border-radius: 15px;
	max-width: 412px;
	position: relative;
	overflow: hidden;
	${device.tablet} {
		border-radius: 30px;
		padding: 30px;
	}
`
const cardBg = css`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: radial-gradient(circle at 50% 0, #232a34, #181e27 90%);
	z-index: -1;
	transform: scaleY(1);
	transform-origin: 50% 100%;
`
export default App
