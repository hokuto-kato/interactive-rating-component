import styled from 'styled-components'
import { colors, device } from '../style/variable.jsx'
import { rem } from '../style/mixin.jsx'

export const Thanks = ({ ...value }) => {
	return (
		<>
			<SThanks>
				<figure>
					<SImgBody
						role="img"
						aria-label="data submitted image"
					></SImgBody>
				</figure>
				<SRateInfo>
					<SRateInfoBody>
						You selected {value.rate} out of 5
					</SRateInfoBody>
				</SRateInfo>
				<SHeading>Thank you!</SHeading>
				<SBody>
					We appreciate you taking the time to give a rating. If you
					ever need more support, don’t hesitate to get in touch!
				</SBody>
			</SThanks>
		</>
	)
}
const SThanks = styled.section`
	text-align: center;
`
const SImgBody = styled.span`
	content: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0IiBoZWlnaHQ9Ijk2IiB2aWV3Qm94PSIwIDAgMTQ0IDk2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExNi4xODMgMTMuNzU0N0gxMTYuMjA3QzExNi40NzEgMTMuNzYyNiAxMTYuNjkxIDEzLjU1NSAxMTYuNjk5IDEzLjI5MDlDMTE2LjcwNyAxMy4wMjY4IDExNi41IDEyLjgwNjMgMTE2LjIzNiAxMi43OTgzQzExNS43MzUgMTIuNzY5NiAxMTUuMjU3IDEyLjc0NTcgMTE0Ljc4IDEyLjc0NTdDMTE0LjUxNiAxMi43NDU3IDExNC4zMDMgMTIuOTU5OCAxMTQuMzAzIDEzLjIyMzlDMTE0LjMwMyAxMy40ODggMTE0LjUxNiAxMy43MDIxIDExNC43OCAxMy43MDIxQzExNS4yMjkgMTMuNzA2OSAxMTUuNzA2IDEzLjcyNiAxMTYuMTgzIDEzLjc1NDdaTTEwOC42MTIgMTQuMjkwM0MxMDguMzgzIDE0LjI5NTQgMTA4LjE4MyAxNC4xMzY5IDEwOC4xMzUgMTMuOTEyNUMxMDguMTA4IDEzLjc4NzUgMTA4LjEzMiAxMy42NTcgMTA4LjIwMiAxMy41NTAxQzEwOC4yNzIgMTMuNDQzMiAxMDguMzgyIDEzLjM2ODggMTA4LjUwNyAxMy4zNDM1QzEwOC45ODUgMTMuMjQ3OCAxMDkuNDYyIDEzLjE1NyAxMDkuOTM5IDEzLjA4NTJDMTEwLjExIDEzLjA1ODggMTEwLjI4MiAxMy4xMjU0IDExMC4zOSAxMy4yNjAyQzExMC40OTggMTMuMzk0OSAxMTAuNTI2IDEzLjU3NzIgMTEwLjQ2NCAxMy43Mzg0QzExMC40MDEgMTMuODk5NiAxMTAuMjU4IDE0LjAxNTIgMTEwLjA4NyAxNC4wNDE2QzEwOS42MSAxNC4xMTM0IDEwOS4xNjYgMTQuMTk5NCAxMDguNzAzIDE0LjI5NTFDMTA4LjY3MyAxNC4yOTc4IDEwOC42NDIgMTQuMjk2MiAxMDguNjEyIDE0LjI5MDNaTTEyMi4yMTMgMTQuODIxMUMxMjIuMjU5IDE0LjgyNTcgMTIyLjMwNSAxNC44MjU3IDEyMi4zNTEgMTQuODIxMUwxMjIuMzc1IDE0LjgzNTVDMTIyLjU0NSAxNC44NTk0IDEyMi43MTYgMTQuNzkwMyAxMjIuODIyIDE0LjY1NDNDMTIyLjkyOCAxNC41MTgzIDEyMi45NTMgMTQuMzM2IDEyMi44ODkgMTQuMTc2MUMxMjIuODI0IDE0LjAxNjIgMTIyLjY3OSAxMy45MDMgMTIyLjUwOSAxMy44NzkxQzEyMi4wMzEgMTMuNzQwNCAxMjEuNTU0IDEzLjYxNiAxMjEuMDc2IDEzLjUwMTNDMTIwLjgxMyAxMy40MzkyIDEyMC41NDkgMTMuNjAzIDEyMC40ODcgMTMuODY3MUMxMjAuNDI1IDE0LjEzMTIgMTIwLjU4OCAxNC4zOTU2IDEyMC44NTIgMTQuNDU3N0MxMjEuMzA2IDE0LjU2MjkgMTIxLjc2NCAxNC42ODcyIDEyMi4yMTMgMTQuODIxMVpNMTAyLjc1MiAxNi4xMTIyQzEwMi41MjQgMTYuMTExNyAxMDIuMzI4IDE1Ljk0OSAxMDIuMjg1IDE1LjcyNDFDMTAyLjI0MiAxNS40OTg0IDEwMi4zNjUgMTUuMjczOCAxMDIuNTc4IDE1LjE4OTNDMTAzLjAyNyAxNS4wMDc2IDEwMy40NzYgMTQuODM1NSAxMDMuOTI5IDE0LjY3MjlDMTA0LjE3NSAxNC41OTE3IDEwNC40NCAxNC43MjA5IDEwNC41MjggMTQuOTY0M0MxMDQuNjE2IDE1LjIwNzcgMTA0LjQ5NCAxNS40NzcgMTA0LjI1NCAxNS41NzE5QzEwMy44MTUgMTUuNzI5NyAxMDMuMzc1IDE1Ljg5NzEgMTAyLjkzNiAxNi4wNzg4QzEwMi44NjcgMTYuMTA3MSAxMDIuNzkxIDE2LjExODUgMTAyLjcxNyAxNi4xMTIySDEwMi43NTJaTTEyNy44NSAxNy4xMTE3QzEyNy45MiAxNy4xNTI2IDEyNy45OTkgMTcuMTc0MSAxMjguMDggMTcuMTczOEMxMjguMjk5IDE3LjE3NSAxMjguNDkgMTcuMDI2NiAxMjguNTQ1IDE2LjgxMzlDMTI4LjU5OSAxNi42MDEzIDEyOC41MDEgMTYuMzc5MSAxMjguMzA5IDE2LjI3NDhDMTI3Ljg4OSAxNi4wNDUzIDEyNy40NTQgMTUuODIwNSAxMjcuMDEgMTUuNjEwMUMxMjYuODU2IDE1LjUzNjcgMTI2LjY3NCAxNS41NTEzIDEyNi41MzMgMTUuNjQ4NEMxMjYuMzkzIDE1Ljc0NTYgMTI2LjMxNSAxNS45MTA2IDEyNi4zMjggMTYuMDgxMkMxMjYuMzQyIDE2LjI1MTggMTI2LjQ0NSAxNi40MDIyIDEyNi42IDE2LjQ3NTdDMTI3LjAyOSAxNi42NzY1IDEyNy40NDkgMTYuODkxNyAxMjcuODUgMTcuMTExN1pNOTcuMTk5MiAxOC44NTcxQzk3LjAyOTQgMTguODU2NCA5Ni44NzI2IDE4Ljc2NTQgOTYuNzg3NyAxOC42MThDOTYuNjU3MyAxOC4zOTA3IDk2LjczNCAxOC4xMDA2IDk2Ljk1OTUgMTcuOTY3N0M5Ny4zNzk2IDE3LjcyMzggOTcuNzk5NyAxNy40ODk1IDk4LjIxOTggMTcuMjU5OUM5OC4zNjkgMTcuMTc0NSA5OC41NTI0IDE3LjE3NTMgOTguNzAwOSAxNy4yNjIxQzk4Ljg0OTMgMTcuMzQ4OCA5OC45NDAzIDE3LjUwODMgOTguOTM5NiAxNy42ODA1Qzk4LjkzODggMTcuODUyNyA5OC44NDY0IDE4LjAxMTMgOTguNjk3MiAxOC4wOTY4Qzk4LjQ5NiAxOC4yMDU2IDk4LjI5NTkgMTguMzIxMyA5OC4wOTY0IDE4LjQzNjVMOTguMDk2MyAxOC40MzY2Qzk3Ljg4NCAxOC41NTkyIDk3LjY3MjQgMTguNjgxNSA5Ny40NjA4IDE4Ljc5NDlDOTcuMzY4NyAxOC44NDkzIDk3LjI2MTIgMTguODcxMiA5Ny4xNTUyIDE4Ljg1NzFIOTcuMTk5MlpNMTMyLjY2NyAyMC43NDEyQzEzMi43NTYgMjAuODMyNSAxMzIuODc4IDIwLjg4NDEgMTMzLjAwNiAyMC44ODQ3SDEzMi45ODdDMTMzLjEyIDIwLjg5MTkgMTMzLjI0OSAyMC44NDM0IDEzMy4zNDUgMjAuNzUwOEMxMzMuNTMgMjAuNTY0MiAxMzMuNTMgMjAuMjYzIDEzMy4zNDUgMjAuMDc2NUMxMzMuMDAxIDE5LjcyNzQgMTMyLjY0MyAxOS4zODc5IDEzMi4yOCAxOS4wNjc1QzEzMi4wODMgMTguODkzNSAxMzEuNzgxIDE4LjkxMjcgMTMxLjYwNyAxOS4xMTA1QzEzMS40MzQgMTkuMzA4NyAxMzEuNDUzIDE5LjYxMDQgMTMxLjY1IDE5Ljc4NDhDMTMyLjAxIDIwLjEwMzYgMTMyLjM0OSAyMC40MjI0IDEzMi42NjcgMjAuNzQxMlpNOTEuOTk3MSAyMi4yNzE0QzkxLjg0NTMgMjIuMjcxIDkxLjcwMjYgMjIuMTk4MyA5MS42MTI5IDIyLjA3NTRDOTEuNTM3NSAyMS45NzMzIDkxLjUwNTYgMjEuODQ1NCA5MS41MjQ0IDIxLjcxOThDOTEuNTQzMiAyMS41OTQyIDkxLjYxMTIgMjEuNDgxMyA5MS43MTMyIDIxLjQwNTlDOTIuMTA0NiAyMS4xMTkgOTIuNDk2MSAyMC44NDE2IDkyLjg4NzUgMjAuNTY0M0M5My4wMjc0IDIwLjQ2NiA5My4yMDg5IDIwLjQ1IDkzLjM2MzggMjAuNTIyMkM5My41MTg2IDIwLjU5NDQgOTMuNjIzMyAyMC43NDM5IDkzLjYzODMgMjAuOTE0M0M5My42NTMzIDIxLjA4NDggOTMuNTc2NCAyMS4yNTAzIDkzLjQzNjUgMjEuMzQ4NUw5Mi4yODEzIDIyLjE3NThDOTIuMTk0NyAyMi4yNDA5IDkyLjA4ODcgMjIuMjc0NiA5MS45ODA1IDIyLjI3MTRIOTEuOTk3MVpNMTM1LjUyMiAyNC40MTM4QzEzNS43NjUgMjQuODEwNyAxMzUuOTk0IDI1LjIyMTkgMTM2LjIxNCAyNS42Mzc5QzEzNi4yOTUgMjUuNzk1NCAxMzYuNDU3IDI1Ljg5NDggMTM2LjYzNCAyNS44OTYyQzEzNi44MDIgMjUuODk3NCAxMzYuOTU5IDI1LjgwOTggMTM3LjA0NiAyNS42NjU3QzEzNy4xMzMgMjUuNTIxNSAxMzcuMTM4IDI1LjM0MiAxMzcuMDU5IDI1LjE5MzJDMTM2Ljk3OSAyNS4wNTI3IDEzNi45MDIgMjQuOTEyMyAxMzYuODI1IDI0Ljc3MjRMMTM2LjgyNSAyNC43NzIxTDEzNi44MjUgMjQuNzcxN0wxMzYuODI0IDI0Ljc3MDdDMTM2LjY2NSAyNC40ODI4IDEzNi41MDggMjQuMTk3NyAxMzYuMzM4IDIzLjkyMTJDMTM2LjIwMiAyMy42OTU4IDEzNS45MSAyMy42MjMxIDEzNS42ODQgMjMuNzU4NkMxMzUuNDU5IDIzLjg5NSAxMzUuMzg3IDI0LjE4NzkgMTM1LjUyMiAyNC40MTM4Wk04Ny4xNDk1IDI2LjE0OTZMODcuMTM5NCAyNi4xNDk1Qzg3LjI1OSAyNi4xNDY4IDg3LjM3MzQgMjYuMDk5MSA4Ny40NTk4IDI2LjAxNTdMODcuNDYwNSAyNi4wMTUxTDg3LjQ2MDYgMjYuMDE1Qzg3LjgyMzEgMjUuNzA0NCA4OC4xODU3IDI1LjM5MzggODguNTQ4MiAyNS4wOTI4Qzg4Ljc1MTIgMjQuOTIyNSA4OC43Nzc5IDI0LjYxOTUgODguNjA3OSAyNC40MTYyQzg4LjQzNzggMjQuMjEyOCA4OC4xMzU0IDI0LjE4NiA4Ny45MzI0IDI0LjM1NjRMODYuODM0NCAyNS4zMTI4Qzg2LjY4NTYgMjUuNDQ0MiA4Ni42MzM1IDI1LjY1NDIgODYuNzAzNSAyNS44NDAyQzg2Ljc3MjMgMjYuMDIzIDg2Ljk0NTEgMjYuMTQ1MSA4Ny4xMzk0IDI2LjE0OTVMODcuMTMwNCAyNi4xNDk2SDg3LjE0OTVaTTgyLjE0MTIgMzAuMDcwM0M4Mi4yMTQ0IDMwLjI0OTMgODIuMzg3OSAzMC4zNjY1IDgyLjU4MSAzMC4zNjczSDgyLjU2MTlDODIuNzAyNSAzMC4zNzM4IDgyLjgzODcgMzAuMzE3OCA4Mi45MzQzIDMwLjIxNDNMODMuMDI1MSAzMC4xMjU3TDgzLjE4ODIgMjkuOTY2NEw4My4xODkgMjkuOTY1Nkw4My4xODk5IDI5Ljk2NDhMODMuMTg5OSAyOS45NjQ3QzgzLjQ0NjkgMjkuNzEzNyA4My43MDI0IDI5LjQ2NCA4My45NjA2IDI5LjIxOTdDODQuMTQ1NyAyOS4wMzMxIDg0LjE0NTcgMjguNzMxOSA4My45NjA2IDI4LjU0NTRDODMuODcxIDI4LjQ1NDkgODMuNzQ5IDI4LjQwMzkgODMuNjIxNyAyOC40MDM5QzgzLjQ5NDQgMjguNDAzOSA4My4zNzI0IDI4LjQ1NDkgODMuMjgyNyAyOC41NDU0TDgyLjI0NjggMjkuNTQ5NkM4Mi4xMDk4IDI5LjY4NTggODIuMDY4MSAyOS44OTEzIDgyLjE0MTIgMzAuMDcwM1pNMTM4Ljc3OCAzMS43MTExQzEzOC41NTMgMzEuNzE3NiAxMzguMzU0IDMxLjU2NjMgMTM4LjMgMzEuMzQ3NkMxMzguMTkgMzAuODY5NCAxMzguMDcxIDMwLjQyNDcgMTM3LjkzNyAyOS45ODQ4QzEzNy45MDIgMjkuODYzIDEzNy45MTYgMjkuNzMyMSAxMzcuOTc3IDI5LjYyMDlDMTM4LjAzOCAyOS41MDk3IDEzOC4xNCAyOS40MjczIDEzOC4yNjIgMjkuMzkxOEMxMzguNTE0IDI5LjMxNzUgMTM4Ljc3OCAyOS40NjA2IDEzOC44NTQgMjkuNzEyMkwxMzguODg3IDI5LjgzMTVDMTM5LjAwOSAzMC4yNjY0IDEzOS4xMjYgMzAuNjg0NiAxMzkuMjMxIDMxLjEyMjlDMTM5LjI2MSAzMS4yNDY2IDEzOS4yNDEgMzEuMzc3MiAxMzkuMTc1IDMxLjQ4NThDMTM5LjEwOCAzMS41OTQ0IDEzOS4wMDEgMzEuNjcyIDEzOC44NzggMzEuNzAxNUwxMzguNzc4IDMxLjcxMTFaTTc3LjkyNjYgMzQuNjk1Qzc4LjAxNDYgMzQuNzc3NiA3OC4xMzA2IDM0LjgyMzcgNzguMjUxMiAzNC44MjQxSDc4LjIzMjFDNzguMzc5MiAzNC44MzY1IDc4LjUyMzcgMzQuNzggNzguNjIzNiAzNC42NzExTDc5LjU3ODMgMzMuNjI4NkM3OS43MzY4IDMzLjQzNDUgNzkuNzE4NSAzMy4xNTA3IDc5LjUzNjUgMzIuOTc4NEM3OS4zNTQ2IDMyLjgwNjIgNzkuMDcwNyAzMi44MDQgNzguODg2MSAzMi45NzM1Qzc4LjU1NjcgMzMuMzE3OCA3OC4yMjczIDMzLjY2NjkgNzcuOTAyNyAzNC4wMjA4Qzc3LjcyNDEgMzQuMjEzOCA3Ny43MzQ3IDM0LjUxNTIgNzcuOTI2NiAzNC42OTVaTTEzOS42NDIgMzcuODYwN0MxMzkuMzg5IDM3Ljg2MTEgMTM5LjE3OSAzNy42NjQgMTM5LjE2NCAzNy40MTEyQzEzOS4xMzYgMzYuOTMzIDEzOS4xMDIgMzYuNDU0OCAxMzkuMDU5IDM1Ljk3NjZDMTM5LjAzNSAzNS43MTI1IDEzOS4yMyAzNS40NzkxIDEzOS40OTQgMzUuNDU1NEMxMzkuNzU3IDM1LjQzMTYgMTM5Ljk5IDM1LjYyNjQgMTQwLjAxNCAzNS44OTA1QzE0MC4wNTcgMzYuMzY4NyAxNDAuMDk1IDM2Ljg0NjkgMTQwLjExOSAzNy4zMjUxQzE0MC4xMTkgMzcuNTc4NCAxMzkuOTIzIDM3Ljc4ODEgMTM5LjY3IDM3LjgwMzNMMTM5LjY0MiAzNy44NjA3Wk03My42NjM0IDM5LjE3NzZDNzMuNzQwMiAzOS4zNDY3IDczLjkwNzggMzkuNDU2IDc0LjA5MzMgMzkuNDU3OUg3NC4wODM3Qzc0LjIyNDIgMzkuNDYwNSA3NC4zNTg2IDM5LjQwMSA3NC40NTEzIDM5LjI5NTNDNzQuNzc1OSAzOC45MzE5IDc1LjA5MSAzOC41NzMyIDc1LjQwNjEgMzguMjE0NkM3NS41Mjc2IDM4LjA4NzggNzUuNTcgMzcuOTA0MyA3NS41MTYzIDM3LjczN0M3NS40NjI1IDM3LjU2OTYgNzUuMzIxNSAzNy40NDUyIDc1LjE0ODkgMzcuNDEzMUM3NC45NzYzIDM3LjM4MSA3NC44MDAxIDM3LjQ0NjQgNzQuNjkgMzcuNTgzM0M3NC4zNjA2IDM3Ljk0MiA3NC4wNDU1IDM4LjMwNTQgNzMuNzM1MyAzOC42Njg4QzczLjYxNDcgMzguODEgNzMuNTg2NyAzOS4wMDg0IDczLjY2MzQgMzkuMTc3NlpNMTM5LjQ4OSA0NC4wNzczSDEzOS41MjdDMTM5LjY1NCA0NC4wNzYgMTM5Ljc3NiA0NC4wMjM4IDEzOS44NjUgNDMuOTMyMUMxMzkuOTU0IDQzLjg0MDUgMTQwLjAwMiA0My43MTcyIDE0MCA0My41ODk1QzE0MC4wMzggNDMuMTExMyAxNDAuMDcxIDQyLjYzMzEgMTQwLjA5NSA0Mi4xNTQ5QzE0MC4xMDkgNDEuODkyNSAxMzkuOTA4IDQxLjY2ODIgMTM5LjY0NiA0MS42NTI4QzEzOS41MTYgNDEuNjQ2MiAxMzkuMzg4IDQxLjY5MzcgMTM5LjI5MyA0MS43ODQxQzEzOS4xOTkgNDEuODc0NSAxMzkuMTQ1IDQxLjk5OTkgMTM5LjE0NSA0Mi4xMzFDMTM5LjExNiA0Mi42MDkyIDEzOS4wODggNDMuMDg3NCAxMzkuMDUgNDMuNTY1NkMxMzkuMDMgNDMuODI4MiAxMzkuMjI3IDQ0LjA1NjkgMTM5LjQ4OSA0NC4wNzczWk03MC4wODMzIDQ0LjIyMDdDNjkuOTczNCA0NC4yMTk4IDY5Ljg2NzIgNDQuMTgxIDY5Ljc4MjYgNDQuMTEwN0M2OS41ODA5IDQzLjk0MzcgNjkuNTUxMSA0My42NDUgNjkuNzE1OCA0My40NDEzTDcwLjYyNzUgNDIuMzMxOEM3MC43MzMzIDQyLjE5NzcgNzAuOTAyNCA0Mi4xMzAzIDcxLjA3MTIgNDIuMTU1QzcxLjI0MDEgNDIuMTc5NyA3MS4zODI5IDQyLjI5MjcgNzEuNDQ2IDQyLjQ1MTVDNzEuNTA5MSA0Mi42MTAzIDcxLjQ4MjggNDIuNzkwNyA3MS4zNzcgNDIuOTI0OEw3MC40NyA0NC4wMjk0QzcwLjM3ODkgNDQuMTUxMiA3MC4yMzUzIDQ0LjIyMjIgNzAuMDgzMyA0NC4yMjA3Wk0zLjY2MTQ2IDQ4LjA1MTFDMy43NDI3OCA0OC4xMTIyIDMuODQxNDYgNDguMTQ1NyAzLjk0MzExIDQ4LjE0NjdDNC4wOTU5IDQ4LjE0NzEgNC4yMzk2NCA0OC4wNzQyIDQuMzI5NzkgNDcuOTUwN0M0LjYwMTg5IDQ3LjU4MjUgNC44OTMwOSA0Ny4yMDk1IDUuMTk4NjEgNDYuODUwOEM1LjM2ODY2IDQ2LjY0ODggNS4zNDMwMSA0Ni4zNDY5IDUuMTQxMzIgNDYuMTc2NkM0LjkzOTYzIDQ2LjAwNjIgNC42MzgyOCA0Ni4wMzE5IDQuNDY4MjMgNDYuMjMzOUM0LjE1MzE2IDQ2LjYxMTcgMy44NDc2NCA0Ni45OTkxIDMuNTYxMjEgNDcuMzg2NEMzLjQwNzMgNDcuNTk4MSAzLjQ1MTk5IDQ3Ljg5NDQgMy42NjE0NiA0OC4wNTExWk02Ni4xODggNDkuMDc0NEM2Ni4wMDQ1IDQ5LjA3NTQgNjUuODM2NyA0OC45NzEgNjUuNzU2MyA0OC44MDU4QzY1LjY3NTkgNDguNjQwNyA2NS42OTcxIDQ4LjQ0MzkgNjUuODEwOCA0OC4yOTk4TDY2LjcwMzUgNDcuMTcxMkM2Ni44MDgxIDQ3LjAzMTggNjYuOTgwMiA0Ni45NjA0IDY3LjE1MjUgNDYuOTg1QzY3LjMyNDkgNDcuMDA5NiA2Ny40NzAyIDQ3LjEyNjMgNjcuNTMxOCA0Ny4yODk0QzY3LjU5MzMgNDcuNDUyNiA2Ny41NjEzIDQ3LjYzNjMgNjcuNDQ4MiA0Ny43NjlMNjYuNTYwMyA0OC44OTI3QzY2LjQ3MjQgNDkuMDA0MyA2Ni4zMzk0IDQ5LjA3MDkgNjYuMTk3NSA0OS4wNzQ0SDY2LjE4OFpNMTM4LjU5NiA1MC4yMzY1QzEzOC42MjYgNTAuMjQxNSAxMzguNjU3IDUwLjI0MTUgMTM4LjY4NyA1MC4yMzY1QzEzOC45MTUgNTAuMjQ0OCAxMzkuMTE3IDUwLjA5MDYgMTM5LjE2OSA0OS44NjgyQzEzOS4yNTUgNDkuMzkxNiAxMzkuMzM2IDQ4LjkxNDkgMTM5LjQxNiA0OC40MzgyTDEzOS40MTcgNDguNDMzN0MxMzkuNDQ1IDQ4LjI2MjggMTM5LjM4IDQ4LjA4OTkgMTM5LjI0NyA0Ny45ODAxQzEzOS4xMTMgNDcuODcwMiAxMzguOTMxIDQ3Ljg0MDIgMTM4Ljc2OSA0Ny45MDEyQzEzOC42MDggNDcuOTYyMiAxMzguNDkxIDQ4LjEwNSAxMzguNDYyIDQ4LjI3NThDMTM4LjM4NyA0OC43MjAxIDEzOC4zMTIgNDkuMTM5NiAxMzguMjMyIDQ5LjU4MDNMMTM4LjIxNCA0OS42ODE3QzEzOC4xNjggNDkuOTQwNCAxMzguMzM4IDUwLjE4ODEgMTM4LjU5NiA1MC4yMzY1Wk0xLjEwMjc0IDUzLjY2OTlDMS4wNTY4MyA1My42NzY3IDEuMDEwMiA1My42NzY3IDAuOTY0Mjk2IDUzLjY2OTlDMC43MTI2IDUzLjU5MTkgMC41NzE1ODggNTMuMzI0NCAwLjY0OTIyOSA1My4wNzIyQzAuNzg3NjY4IDUyLjU5NCAwLjk1NDc0OSA1Mi4xMzk3IDEuMTI2NiA1MS42ODA2QzEuMTgzMSA1MS41MTIgMS4zMjgzNCA1MS4zODg4IDEuNTAzNjQgNTEuMzYwNkMxLjY3ODk0IDUxLjMzMjUgMS44NTUzNCA1MS40MDQxIDEuOTYxNiA1MS41NDY2QzIuMDY3ODUgNTEuNjg5MSAyLjA4NjQgNTEuODc4OSAyLjAwOTc1IDUyLjAzOTNDMS44Mzc4OSA1Mi40NzQ0IDEuNjgwMzYgNTIuOTE0NCAxLjUzMjM3IDUzLjM0OTVDMS40NjE5MiA1My41MjE5IDEuMjk4IDUzLjYzNzYgMS4xMTIyOCA1My42NDZMMS4xMDI3NCA1My42Njk5Wk02Mi4wNzc4IDUzLjkwOUM2Mi4xNjExIDUzLjk3MzggNjIuMjYzNSA1NC4wMDkxIDYyLjM2OSA1NC4wMDk0TDYyLjM3ODUgNTMuOTg1NUM2Mi41MTkgNTMuOTg4MSA2Mi42NTM0IDUzLjkyODcgNjIuNzQ2MSA1My44MjI5TDYzLjYyNDUgNTIuNjg5NkM2My43ODY2IDUyLjQ3OTcgNjMuNzQ4MSA1Mi4xNzc4IDYzLjUzODUgNTIuMDE1NEM2My4zMjg5IDUxLjg1MjkgNjMuMDI3NiA1MS44OTE1IDYyLjg2NTQgNTIuMTAxNEw2MS45OTE4IDUzLjIzOTVDNjEuODMxNSA1My40NDgzIDYxLjg3IDUzLjc0NzYgNjIuMDc3OCA1My45MDlaTTEzNy4yNTUgNTYuMzE0NEMxMzcuMjEgNTYuMzE5IDEzNy4xNjUgNTYuMzE5IDEzNy4xMjEgNTYuMzE0NEMxMzYuOTk5IDU2LjI3ODggMTM2Ljg5NyA1Ni4xOTY0IDEzNi44MzYgNTYuMDg1MkMxMzYuNzc1IDU1Ljk3NCAxMzYuNzYxIDU1Ljg0MzEgMTM2Ljc5NiA1NS43MjE0QzEzNi45MTYgNTUuMzAwNiAxMzcuMDQ1IDU0Ljg0MTUgMTM3LjE3NCA1NC4zNDlDMTM3LjIwNSA1NC4yMjU4IDEzNy4yODQgNTQuMTIwMyAxMzcuMzkzIDU0LjA1NTdDMTM3LjUwMyA1My45OTExIDEzNy42MzMgNTMuOTcyNyAxMzcuNzU2IDU0LjAwNDdDMTM3Ljg3OSA1NC4wMzcyIDEzNy45ODQgNTQuMTE3NiAxMzguMDQ4IDU0LjIyOEMxMzguMTExIDU0LjMzODUgMTM4LjEyOCA1NC40Njk4IDEzOC4wOTUgNTQuNTkyOEMxMzcuOTY2IDU1LjA3MSAxMzcuODM3IDU1LjU0OTIgMTM3LjcxMyA1NS45ODQ0QzEzNy42NDggNTYuMTgyNyAxMzcuNDYzIDU2LjMxNjMgMTM3LjI1NSA1Ni4zMTQ0Wk01OC4xNjY2IDU4LjY3OTFDNTguMjQ3OCA1OC44NDI4IDU4LjQxNTIgNTguOTQ1OCA1OC41OTc3IDU4Ljk0NDRWNTguOTI1M0M1OC43NDIxIDU4LjkyMiA1OC44NzcyIDU4Ljg1MzUgNTguOTY1MyA1OC43Mzg4TDU5Ljg0ODQgNTcuNjE1MUM1OS45OTQgNTcuNDA0OCA1OS45NDg1IDU3LjExNyA1OS43NDUyIDU2Ljk2MkM1OS41NDIgNTYuODA3IDU5LjI1MjkgNTYuODM5OCA1OS4wODk0IDU3LjAzNjRMNTguMjE1OCA1OC4xNzQ1QzU4LjEwNDQgNTguMzE5NSA1OC4wODUzIDU4LjUxNTMgNTguMTY2NiA1OC42NzkxWk0wLjYwNjI2NiA1OS44MUMwLjM2NjY1NiA1OS44MTIzIDAuMTYyNDI2IDU5LjYzNjQgMC4xMjg4OTEgNTkuMzk4N0MwLjA2MjA1ODcgNTguOTIwNSAwLjAxOTA5NSA1OC40MDg5IDAgNTcuOTIxMUMwIDU3LjY1NyAwLjIxMzcyOCA1Ny40NDI5IDAuNDc3Mzc0IDU3LjQ0MjlDMC43NDEwMjEgNTcuNDQyOSAwLjk1NDc0OSA1Ny42NTcgMC45NTQ3NDkgNTcuOTIxMUMwLjk3MDYwOCA1OC4zODE5IDEuMDEwNDQgNTguODQxNiAxLjA3NDA5IDU5LjI5ODNDMS4wOTE3MyA1OS40MjQ2IDEuMDU4MjggNTkuNTUyNyAwLjk4MTE5NCA1OS42NTQyQzAuOTA0MTA1IDU5Ljc1NTYgMC43ODk3NTQgNTkuODIyMSAwLjY2MzU1IDU5LjgzODdMMC42MDYyNjYgNTkuODFaTTU0LjM3NTIgNjMuNjA3MUM1NC40NTUyIDYzLjc3MDUgNTQuNjIwOSA2My44NzQyIDU0LjgwMjYgNjMuODc0N1Y2My44NTU1QzU0Ljk0NzEgNjMuODU5OCA1NS4wODU4IDYzLjc5ODMgNTUuMTc5NyA2My42ODgyTDU2LjA1ODEgNjIuNTU0OEM1Ni4xNzUxIDYyLjQyMSA1Ni4yMDgyIDYyLjIzMzIgNTYuMTQ0MiA2Mi4wNjczQzU2LjA4MDEgNjEuOTAxNCA1NS45Mjk0IDYxLjc4NDggNTUuNzUyOSA2MS43NjQ3QzU1LjU3NjUgNjEuNzQ0NiA1NS40MDM1IDYxLjgyNDIgNTUuMzAzOCA2MS45NzE0TDU0LjQyNTUgNjMuMTA0OEM1NC4zMTQ2IDYzLjI0OSA1NC4yOTUxIDYzLjQ0MzcgNTQuMzc1MiA2My42MDcxWk0yLjU3NzgyIDY1LjY3NzVDMi4zOTY1NyA2NS42NzI0IDIuMjMzODIgNjUuNTY1IDIuMTU3NzMgNjUuNDAwMUMxLjkyODU5IDY0Ljk1NTQgMS43MTM3NyA2NC41MTA3IDEuNTIyODIgNjQuMDgwM0MxLjQ3MTQ3IDYzLjk2NDMgMS40NjgyNyA2My44MzI1IDEuNTEzOTMgNjMuNzE0MUMxLjU1OTYgNjMuNTk1NyAxLjY1MDM5IDYzLjUwMDQgMS43NjYyOSA2My40NDkxQzEuODgyMTIgNjMuMzk3NiAyLjAxMzYyIDYzLjM5NDQgMi4xMzE4MiA2My40NDAyQzIuMjUwMDIgNjMuNDg1OSAyLjM0NTIxIDYzLjU3NjkgMi4zOTY0MiA2My42OTNDMi41ODI2IDY0LjEwNDIgMi43ODc4NyA2NC41MzQ2IDMuMDA3NDYgNjQuOTYwMkMzLjA2NTU5IDY1LjA3MzYgMy4wNzYxMSA2NS4yMDU2IDMuMDM2NjcgNjUuMzI2OEMyLjk5NzIzIDY1LjQ0OCAyLjkxMTEgNjUuNTQ4NCAyLjc5NzQxIDY1LjYwNTdDMi43Mjk0NyA2NS42NDA2IDIuNjU0MTcgNjUuNjU4NyAyLjU3NzgyIDY1LjY1ODNWNjUuNjc3NVpNNTAuNjMwMyA2OC42Mzc1QzUwLjcxNjIgNjguNzA4OCA1MC44MjQzIDY4Ljc0NzcgNTAuOTM1OSA2OC43NDc1QzUxLjA3ODYgNjguNzQ2NiA1MS4yMTM1IDY4LjY4MTYgNTEuMzAzNCA2OC41NzA2TDUyLjIxMDQgNjcuNDUxNkM1Mi4zNzQgNjcuMjQ2NiA1Mi4zNDIxIDY2Ljk0NzggNTIuMTM4OCA2Ni43ODIxQzUyLjA0MDIgNjYuNzAxOSA1MS45MTM3IDY2LjY2NDMgNTEuNzg3NCA2Ni42Nzc4QzUxLjY2MTEgNjYuNjkxMyA1MS41NDUzIDY2Ljc1NDYgNTEuNDY1NyA2Ni44NTM4QzUxLjE2NSA2Ny4yMzE2IDUwLjg2NDIgNjcuNTk5OCA1MC41NjM1IDY3Ljk2OEM1MC4zOTg4IDY4LjE3MTggNTAuNDI4NiA2OC40NzA1IDUwLjYzMDMgNjguNjM3NVpNNS45NzY3MyA3MC44NjU5QzUuODI5OCA3MC44NjY3IDUuNjkwNyA3MC43OTk3IDUuNTk5NiA3MC42ODQyQzUuMjk0MDggNzAuMjk2OSA1LjAwMjg4IDY5LjkwOTUgNC43MjEyMyA2OS41MjIyQzQuNjQ2NzYgNjkuNDE5IDQuNjE2NDcgNjkuMjkwMiA0LjYzNzA4IDY5LjE2NDZDNC42NTc3IDY5LjAzODkgNC43Mjc1IDY4LjkyNjYgNC44MzEwMyA2OC44NTI3QzUuMDQ0ODIgNjguNzAwNiA1LjM0MTEgNjguNzQ5NyA1LjQ5NDU4IDY4Ljk2MjdDNS43NzE0NiA2OS4zNDA1IDYuMDUzMTEgNjkuNzE4MiA2LjM0OTA4IDcwLjA5MTJDNi40NjIyOSA3MC4yMzQ3IDYuNDgzODYgNzAuNDMwNCA2LjQwNDY1IDcwLjU5NTJDNi4zMjU0NCA3MC43NiA2LjE1OTMyIDcwLjg2NTEgNS45NzY3MyA3MC44NjU5Wk00Ni41Njc5IDczLjM1MjZDNDYuNjU1NCA3My40MzIzIDQ2Ljc2OTQgNzMuNDc2NiA0Ni44ODc3IDczLjQ3NjlWNzMuNDUzQzQ3LjAyMjEgNzMuNDYxNiA0Ny4xNTM5IDczLjQxMyA0Ny4yNTA1IDczLjMxOTFMNDcuNDU0NiA3My4wODk2TDQ3LjQ1NTEgNzMuMDg5QzQ3LjcwMDcgNzIuODEyOSA0Ny45NTE2IDcyLjUzMDkgNDguMjA1MyA3Mi4yNDMxQzQ4LjMyNjkgNzIuMTE2MyA0OC4zNjkyIDcxLjkzMjkgNDguMzE1NSA3MS43NjU1QzQ4LjI2MTcgNzEuNTk4MiA0OC4xMjA3IDcxLjQ3MzggNDcuOTQ4MSA3MS40NDE3QzQ3Ljc3NTUgNzEuNDA5NiA0Ny41OTkzIDcxLjQ3NSA0Ny40ODkyIDcxLjYxMTlDNDcuMTg1NiA3MS45NTY5IDQ2Ljg4MTkgNzIuMjkzMyA0Ni41ODI0IDcyLjYyNTJMNDYuNTgyMSA3Mi42MjU1TDQ2LjUzNDUgNzIuNjc4M0M0Ni4zNTgzIDcyLjg3MzkgNDYuMzczMiA3My4xNzU0IDQ2LjU2NzkgNzMuMzUyNlpNMTAuMTcyOCA3NS40NDIzQzEwLjA1NDUgNzUuNDQyIDkuOTQwNTYgNzUuMzk3NyA5Ljg1MzAxIDc1LjMxNzlDOS40OTQ5OCA3NC45ODggOS4xNDE3MiA3NC42NTMyIDguODAyNzggNzQuMzE4NUM4LjYxNDI4IDc0LjEzMzYgOC42MTEwNyA3My44MzA3IDguNzk1NjIgNzMuNjQxOUM4Ljk4MDE4IDczLjQ1MyA5LjI4MjYgNzMuNDQ5OCA5LjQ3MTExIDczLjYzNDdDOS44MDUyNyA3My45NjQ2IDEwLjE0OSA3NC4yODk4IDEwLjQ5NzUgNzQuNTkxMUMxMC41OTE3IDc0LjY3NyAxMC42NDc4IDc0Ljc5NzEgMTAuNjUzMiA3NC45MjQ2QzEwLjY1ODYgNzUuMDUyMiAxMC42MTI4IDc1LjE3NjYgMTAuNTI2MSA3NS4yNzAxQzEwLjQzODUgNzUuMzc1NiAxMC4zMDk4IDc1LjQzODMgMTAuMTcyOCA3NS40NDIzWk00Mi4wOTk3IDc3LjY2MTFDNDIuMTg5NCA3Ny43NjkxIDQyLjMyMjEgNzcuODMyMSA0Mi40NjI1IDc3LjgzMzNDNDIuNTc3NyA3Ny44MjU2IDQyLjY4NjIgNzcuNzc2MyA0Mi43NjggNzcuNjk0Nkw0Mi44Nzc4IDc3LjYwMzdDNDMuMjAyNCA3Ny4zMjY0IDQzLjUyNyA3Ny4wMzQ3IDQzLjg2MTIgNzYuNzI4NkM0NC4wNTQ5IDc2LjU0OSA0NC4wNjY3IDc2LjI0NjEgNDMuODg3NCA3Ni4wNTJDNDMuNzA4MSA3NS44NTc5IDQzLjQwNTcgNzUuODQ2MSA0My4yMTE5IDc2LjAyNTdDNDIuODkyMSA3Ni4zMjIyIDQyLjU3MjMgNzYuNjA0MyA0Mi4yNTcyIDc2Ljg3NjlMNDIuMTUyMiA3Ni45ODY5QzQyLjA1NTkgNzcuMDY5MyA0MS45OTYzIDc3LjE4NjYgNDEuOTg2NSA3Ny4zMTMxQzQxLjk3NjYgNzcuNDM5NSA0Mi4wMTczIDc3LjU2NDcgNDIuMDk5NyA3Ny42NjExWk0xNS4xMDg5IDc5LjIwNTdDMTUuMDE3OSA3OS4yMDY5IDE0LjkyODUgNzkuMTgyIDE0Ljg1MTEgNzkuMTM0QzE0LjQ0NTQgNzguODc1NyAxNC4wMzk2IDc4LjYwMzIgMTMuNjQzNCA3OC4zMjU4QzEzLjQyNzUgNzguMTc1MSAxMy4zNzQxIDc3Ljg3NzggMTMuNTI0IDc3LjY2MTFDMTMuNjc0NSA3Ny40NDQ5IDEzLjk3MTMgNzcuMzkxNCAxNC4xODc2IDc3LjU0MTZDMTQuNTc0MiA3Ny44MTQxIDE0Ljk2NTcgNzguMDcyNCAxNS4zNjE5IDc4LjMyNThDMTUuNTM4OCA3OC40NDAyIDE1LjYyIDc4LjY1NzIgMTUuNTYxNyA3OC44NTk5QzE1LjUwMzQgNzkuMDYyNiAxNS4zMTk0IDc5LjIwMzEgMTUuMTA4OSA3OS4yMDU3Wk0zNi44OTYzIDgwLjk3NUMzNi45NzYzIDgxLjEzODcgMzcuMTQyMiA4MS4yNDI1IDM3LjMyNCA4MS4yNDI4SDM3LjMwNjhDMzcuMzg2IDgxLjI0NjIgMzcuNDY0NyA4MS4yMjk3IDM3LjUzNTkgODEuMTk1QzM3Ljk2NTYgODAuOTc5OCAzOC40IDgwLjc0NTUgMzguODI0OSA4MC41MDE2QzM5LjA1MjIgODAuMzcwMyAzOS4xMzEgODAuMDc5OCAzOS4wMDE1IDc5Ljg1MTNDMzguOTM4NSA3OS43NDA2IDM4LjgzNCA3OS42NTk3IDM4LjcxMTMgNzkuNjI2NEMzOC41ODg1IDc5LjU5MzIgMzguNDU3NSA3OS42MTA1IDM4LjM0NzUgNzkuNjc0M0MzNy45NDE3IDc5LjkwODYgMzcuNTI2NCA4MC4xMzM0IDM3LjExMTEgODAuMzM0MkMzNi44NzUyIDgwLjQ1MTkgMzYuNzc5MSA4MC43Mzg2IDM2Ljg5NjMgODAuOTc1Wk0yMC42NTEyIDgxLjk3OTJDMjAuNTk1OSA4MS45NzkyIDIwLjU0MDkgODEuOTY5NSAyMC40ODg5IDgxLjk1MDVDMjAuMDExNSA4MS43ODMyIDE5LjU4MTkgODEuNjAxNSAxOS4xMzMyIDgxLjQxMDJDMTguOTc2MyA4MS4zNDI3IDE4Ljg2NzIgODEuMTk2NSAxOC44NDcxIDgxLjAyNjZDMTguODI3IDgwLjg1NjggMTguODk4OSA4MC42ODkxIDE5LjAzNTcgODAuNTg2N0MxOS4xNzI1IDgwLjQ4NDMgMTkuMzUzNCA4MC40NjI4IDE5LjUxMDMgODAuNTMwM0MxOS45Mzk5IDgwLjcxNjggMjAuMzgzOSA4MC44ODg5IDIwLjgxODMgODEuMDUxNUMyMS4wMzY5IDgxLjEzMSAyMS4xNjY2IDgxLjM1NjcgMjEuMTI1MyA4MS41ODZDMjEuMDg0IDgxLjgxNTIgMjAuODgzOCA4MS45ODEzIDIwLjY1MTIgODEuOTc5MlpNMzEuMDA4NiA4Mi45MzhDMzEuMTA0OSA4My4wNzk2IDMxLjI2OTMgODMuMTU4OSAzMS40Mzk5IDgzLjE0NkwzMS41MjU4IDgzLjEzNjVDMzIuMDAzMiA4My4wNiAzMi40ODA2IDgyLjk2NDMgMzIuOTU3OSA4Mi44NDk2QzMzLjIxMzIgODIuNzg4MSAzMy4zNzEgODIuNTMxOCAzMy4zMTEyIDgyLjI3NTdDMzMuMjgyOCA4Mi4xNTIgMzMuMjA2NCA4Mi4wNDQ3IDMzLjA5OSA4MS45Nzc0QzMyLjk5MTUgODEuOTEwMiAzMi44NjE4IDgxLjg4ODUgMzIuNzM4MyA4MS45MTcxQzMyLjI4NDggODIuMDI3MSAzMS44MjE4IDgyLjExNzkgMzEuMzY4MyA4Mi4xODk3QzMxLjE5NzcgODIuMjAyNSAzMS4wNDcgODIuMzA1NSAzMC45NzI4IDgyLjQ1OThDMzAuODk4NiA4Mi42MTQyIDMwLjkxMjIgODIuNzk2NSAzMS4wMDg2IDgyLjkzOFpNMjYuNjI3OSA4My4zMjc4SDI2LjY2NjFMMjYuNjg1MiA4My4zMTgyQzI2Ljk0ODkgODMuMzI4OCAyNy4xNzEyIDgzLjEyMzIgMjcuMTgxNyA4Mi44NTkxQzI3LjE5MjIgODIuNTk1IDI2Ljk4NzEgODIuMzcyNCAyNi43MjM0IDgyLjM2MThDMjYuMjU4OCA4Mi4zMjM1IDI1Ljc5NTcgODIuMjcxIDI1LjMzNDMgODIuMjA0QzI1LjE2MzcgODIuMTc5MiAyNC45OTI5IDgyLjI0NzUgMjQuODg2MiA4Mi4zODNDMjQuNzc5NSA4Mi41MTg2IDI0Ljc1MzIgODIuNzAwOSAyNC44MTcgODIuODYxMkMyNC44ODA5IDgzLjAyMTYgMjUuMDI1MyA4My4xMzU2IDI1LjE5NTggODMuMTYwNEMyNS42NzMyIDgzLjIzMjEgMjYuMTUwNiA4My4yODk1IDI2LjYyNzkgODMuMzI3OFpNOC4yNDQ5NiA0My42NzA4QzguMDQzNjIgNDMuNjY5OSA3Ljg2NDI2IDQzLjU0MjYgNy43OTY5OSA0My4zNTIyQzcuNzI5MjYgNDMuMTYwNSA3Ljc4OTk1IDQyLjk0NjggNy45NDgyOCA0Mi44MTk2QzguNTgzODEgNDIuMzA2OSA5LjAxNzM1IDQyLjAwOCA5LjExNjEyIDQxLjkzOTlMOS4xMTYxNSA0MS45Mzk4TDkuMTE2MTcgNDEuOTM5OEw5LjEzNjk1IDQxLjkyNTRDOS4zNTY4OSA0MS43ODU0IDkuNjQ4MjMgNDEuODQ4IDkuNzkxNTUgNDIuMDY2QzkuOTM0ODggNDIuMjg0IDkuODc3MjUgNDIuNTc2OCA5LjY2MjA2IDQyLjcyNEM5LjY2MjA2IDQyLjcyNCA5LjIxODEgNDMuMDIwNCA4LjU0OTc4IDQzLjU2MDhDOC40NjI2MyA0My42MzMyIDguMzUyNjYgNDMuNjcyMSA4LjIzOTQ4IDQzLjY3MDhIOC4yNDQ5NloiIGZpbGw9IiNFNkU2RTYiLz4KPHBhdGggZD0iTTEwNi41MzEgODkuMDg1M0g1MS42ODUzTDYyLjUxNjkgMC43MDQ2ODFIMTExLjQyOUwxMTYuNTM3IDcuNDYxNjJMMTA2LjUzMSA4OS4wODUzWiIgZmlsbD0iIzM5NDc1RiIvPgo8cGF0aCBkPSJNMTAwLjU5NyA4OS4wODUzSDQ1Ljc0NjhMNTYuNTc4NSAwLjcwNDY4MUgxMTEuNDI5TDEwMC41OTcgODkuMDg1M1oiIGZpbGw9IiM2MTcyOEQiLz4KPHBhdGggZD0iTTk3Ljg5NTEgNzIuMzE0OEg1Mi4wNjcxTDU5Ljg4MTggOC41ODUzOUgxMDUuNzFMOTcuODk1MSA3Mi4zMTQ4WiIgZmlsbD0iIzE4MUYyNyIvPgo8cGF0aCBkPSJNODIuNDM3NyA0NC40OTMzTDk1LjY4MDEgNDQuNjUxMUw5NS40MjIzIDQ2LjcwMjZMODIuNDM3NyA0Ni40Nzc4VjQ0LjQ5MzNaIiBmaWxsPSIjMUUyNTJFIi8+CjxwYXRoIGQ9Ik00NS43NDY4IDg5LjA4NTNMNTIuMzQ0MSA5NS4xODcxTDEwNS43MSA5NkwxMDYuNTMxIDg5LjA4NTNINDUuNzQ2OFoiIGZpbGw9IiMzOTQ3NUYiLz4KPHBhdGggZD0iTTg4LjA4NTEgMjUuODI5MkM4OC4wODUxIDI1LjgyOTIgOTAuMzcxOCAyNS45OTE4IDkxLjU0MTMgMzAuMzAwNEM5Mi43MTA5IDM0LjYwODkgOTIuMzA5OSA0Ni42MzU2IDkyLjMwOTkgNDYuNjM1Nkw4Mi40NDczIDQ2LjQ3NzhDODIuNDQ3MyA0Ni40Nzc4IDc3LjUyNTYgMjguNTc4OSA4OC4wODUxIDI1LjgyOTJaIiBmaWxsPSIjMkQzOTRCIi8+CjxwYXRoIGQ9Ik00LjgxNzYxIDI5LjE5MzVMNDAuNjkxMSAtNC41MDM5N2UtMDZMNTkuNTE4OSAyMy4yMTU4TDIzLjY0NTQgNTIuNDA5M0w0LjgxNzYxIDI5LjE5MzVaIiBmaWxsPSIjRkM3NjE0Ii8+CjxwYXRoIGQ9Ik0yNC40MzQ5IDE5LjQ5NDRMNDAuNDk2OCA2LjQyMzM3TDQzLjYwNjIgMTAuMjU3NEwyNy41NDQzIDIzLjMyODRMMjQuNDM0OSAxOS40OTQ0WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggb3BhY2l0eT0iMC40NiIgZD0iTTIyLjEwMTkgNDMuNjI2OUMyMS4yNDQzIDQyLjU2OTQgMjEuNDA1IDQxLjAxNzIgMjIuNDYxMSA0MC4xNTc4TDI3LjIwNiAzNi4yOTY0QzI4LjI2NDYgMzUuNDM1IDI5LjgyMTMgMzUuNTk2MSAzMC42ODEgMzYuNjU2MUMzMS41Mzg2IDM3LjcxMzYgMzEuMzc3OSAzOS4yNjU4IDMwLjMyMTkgNDAuMTI1MkwyNS41NzY5IDQzLjk4NjZDMjQuNTE4MyA0NC44NDggMjIuOTYxNiA0NC42ODY5IDIyLjEwMTkgNDMuNjI2OVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIG9wYWNpdHk9IjAuNDYiIGQ9Ik0zMi44MjA0IDM0LjkwNzVDMzEuOTYyOCAzMy44NSAzMi4xMjM1IDMyLjI5NzggMzMuMTc5NSAzMS40Mzg0TDQ4LjE5MTUgMTkuMjIxOEM0OS4yNTAxIDE4LjM2MDMgNTAuODA2OCAxOC41MjE1IDUxLjY2NjUgMTkuNTgxNUM1Mi41MjQxIDIwLjYzOSA1Mi4zNjM0IDIyLjE5MTIgNTEuMzA3NCAyMy4wNTA2TDM2LjI5NTQgMzUuMjY3MkMzNS4yMzY4IDM2LjEyODYgMzMuNjgwMSAzNS45Njc1IDMyLjgyMDQgMzQuOTA3NVoiIGZpbGw9IndoaXRlIi8+CjxlbGxpcHNlIG9wYWNpdHk9IjAuMyIgY3g9IjE1Ljk0NDIiIGN5PSIyOS44OTg3IiByeD0iMy4yNjUyNCIgcnk9IjMuMjcwODciIGZpbGw9IndoaXRlIi8+CjxlbGxpcHNlIG9wYWNpdHk9IjAuMyIgY3g9IjE5LjI1NzIiIGN5PSIyNi45MTk1IiByeD0iMy4yNjUyNCIgcnk9IjMuMjcwODciIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik04OC4wODUxIDI1LjgyOTJDODguMDg1MSAyNS44MjkyIDgyLjg5NiAyNy42OTkgODQuNzA1MyA0Mi4zNDYyQzg2LjAzMjQgNTMuMDc2OSA4MS41NDk4IDY3LjI4NDIgNzQuOTIzOSA2Ny40NTYzQzY4LjI5NzkgNjcuNjI4NSA1Ni4wNzcxIDY3LjA0NTEgNTYuMDc3MSA2Ny4wNDUxQzU2LjA3NzEgNjcuMDQ1MSA2Mi40NDA1IDUwLjU0NzMgNjEuMTIzIDM2LjY5MzlDNjAuOTIwNSAzNC43NTQ0IDYxLjE1MjEgMzIuNzk0MSA2MS44MDA5IDMwLjk1NTVDNjIuNTc0MiAyOC44NDY2IDY0LjAxMTEgMjYuNjUxNyA2Ni42ODQ0IDI2LjI5MzFDNzIuMDIxNSAyNS41NjYyIDg4LjA4NTEgMjUuODI5MiA4OC4wODUxIDI1LjgyOTJaIiBmaWxsPSIjQkFENkZBIi8+CjxwYXRoIGQ9Ik01Mi40MDYyIDY4LjExNjNMNzUuODIxNSA2Ny42MzgxQzc1LjgyMTUgNjcuNjM4MSA3Mi4yNTA3IDY0LjA4OTggNzIuMDI2MyA1NS4wNTY3TDM5LjgxNzkgNTUuNTM0OUM0MC4zNjk5IDU3Ljg2NTYgNDEuMjE4NiA2MC4xMTU2IDQyLjM0MzIgNjIuMjI5NkM0NC4zMjY3IDY1LjkzMDMgNDguMjE0MSA2OC4yMDQzIDUyLjQwNjIgNjguMTE2M1oiIGZpbGw9IiM1NDZGOEQiLz4KPHBhdGggZD0iTTY5LjUxOTkgMTMuMTg1N0w2OC43MDM2IDE4LjU1NThIOTIuMzY3MUw5My4wODMxIDEzLjE4NTdINjkuNTE5OVoiIGZpbGw9IiMyRDM5NEIiLz4KPHBhdGggb3BhY2l0eT0iMC40OCIgZD0iTTc2LjAzNjMgNzYuNjEzOUM3My40ODIzIDc0LjM3NTkgNjkuNDQzNyA3NC44MTU4IDY3LjYzOTMgNzcuNjk5NEM2Ny4xODM4IDc4LjQgNjYuOTM3MSA3OS4yMTYxIDY2LjkyOCA4MC4wNTIxQzY2LjkyOCA4My41OTA4IDY5LjM2NzQgODUuOTEgNzQuMjQxNCA4NC45MzQ1Qzc3Ljk2MDEgODQuMTg4NSA3OS4zNzc5IDc5LjUzNTYgNzYuMDM2MyA3Ni42MTM5WiIgZmlsbD0id2hpdGUiLz4KPGVsbGlwc2UgY3g9IjEzMC44MzQiIGN5PSI3Mi40ODIyIiByeD0iMTMuMTY2IiByeT0iMTMuMTg4NyIgZmlsbD0iI0ZDNzYxNCIvPgo8cGF0aCBkPSJNNjUuNTM4OCAzMS43NzhDNjUuMzY4MyAzMS43ODQgNjUuMjA3NSAzMS42OTgzIDY1LjExNyAzMS41NTM0QzY1LjAyNjYgMzEuNDA4NCA2NS4wMjAyIDMxLjIyNjEgNjUuMTAwMyAzMS4wNzUyQzY1LjE4MDQgMzAuOTI0MiA2NS4zMzQ4IDMwLjgyNzYgNjUuNTA1NCAzMC44MjE2QzY1LjYwNTYgMzAuODIxNiA3NS41ODc1IDMwLjA4NTIgODAuOTM4OSAzMC41NjM0QzgxLjIwMjYgMzAuNTg3MSA4MS4zOTcgMzAuODIwNSA4MS4zNzMzIDMxLjA4NDZDODEuMzQ5NiAzMS4zNDg3IDgxLjExNjYgMzEuNTQzNSA4MC44NTMgMzEuNTE5OEM3NS42MDE5IDMxLjA0MTYgNjUuNjcyNSAzMS43NjM2IDY1LjU3NyAzMS43NzMyTDY1LjUzODggMzEuNzc4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTY0Ljc0NjMgMzguMjQ4QzY0LjQ4MjcgMzguMjU3MyA2NC4yNjE1IDM4LjA1MDcgNjQuMjUyMyAzNy43ODY2QzY0LjI0MyAzNy41MjI1IDY0LjQ0OTMgMzcuMzAwOSA2NC43MTI5IDM3LjI5MTZDNjQuODEzMiAzNy4yOTE2IDc0Ljc5NTEgMzYuNTU1MiA4MC4xNDY0IDM3LjAzMzRDODAuNDEwMSAzNy4wNTcyIDgwLjYwNDYgMzcuMjkwNSA4MC41ODA4IDM3LjU1NDZDODAuNTU3MSAzNy44MTg3IDgwLjMyNDIgMzguMDEzNiA4MC4wNjA1IDM3Ljk4OThDNzQuODA5NCAzNy41MTE2IDY0Ljg4NDggMzguMjM4NSA2NC43ODQ1IDM4LjI0MzJMNjQuNzQ2MyAzOC4yNDhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNjQuNjU1NSA0NC45NzE1QzY0LjM5MTkgNDQuOTgyMSA2NC4xNjk2IDQ0Ljc3NjUgNjQuMTU5MSA0NC41MTI0QzY0LjE0ODUgNDQuMjQ4MyA2NC4zNTM3IDQ0LjAyNTcgNjQuNjE3NCA0NC4wMTUxQzY0LjcxNzYgNDQuMDE1MSA3NC43MDQzIDQzLjI3ODcgODAuMDUwOSA0My43NTY5QzgwLjIyMTQgNDMuNzcyMiA4MC4zNzA4IDQzLjg3NzYgODAuNDQyOCA0NC4wMzMyQzgwLjUxNDggNDQuMTg4OSA4MC40OTg0IDQ0LjM3MTIgODAuMzk5OCA0NC41MTE0QzgwLjMwMTMgNDQuNjUxNyA4MC4xMzU1IDQ0LjcyODYgNzkuOTY0OSA0NC43MTMzQzc0LjcxMzggNDQuMjM1MSA2NC43ODkyIDQ0Ljk2MTkgNjQuNjg5IDQ0Ljk2NjdMNjQuNjU1NSA0NC45NzE1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTY0LjAyMDcgNTEuNjk0OUM2My44NTAyIDUxLjcwMDkgNjMuNjg5NCA1MS42MTUzIDYzLjU5OSA1MS40NzAzQzYzLjUwODUgNTEuMzI1NCA2My41MDIyIDUxLjE0MzEgNjMuNTgyMyA1MC45OTIxQzYzLjY2MjQgNTAuODQxMiA2My44MTY4IDUwLjc0NDUgNjMuOTg3MyA1MC43Mzg1QzY0LjA4NzYgNTAuNzM4NSA3NC4wNjk1IDUwLjAwMjEgNzkuNDIwOCA1MC40ODUxQzc5LjU5MTQgNTAuNTAwNSA3OS43NDA4IDUwLjYwNTggNzkuODEyOCA1MC43NjE1Qzc5Ljg4NDggNTAuOTE3MSA3OS44Njg0IDUxLjA5OTQgNzkuNzY5OCA1MS4yMzk3Qzc5LjY3MTIgNTEuMzc5OSA3OS41MDU1IDUxLjQ1NjkgNzkuMzM0OSA1MS40NDE1Qzc0LjA4MzggNTAuOTYzMyA2NC4xNTkyIDUxLjY5MDIgNjQuMDU4OSA1MS42OTQ5SDY0LjAyMDdaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K');
	width: 144px;
	height: 96px;
	${device.tablet} {
		width: 162px;
		height: 108px;
	}
`
const SRateInfo = styled.p`
	background-color: ${colors.darkBlue};
	padding: 5px 12px;
	border-radius: 22.5px;
	color: ${colors.orange};
	text-align: center;
	margin-top: 25px;
	display: inline-block;
	${device.tablet} {
		margin-top: 30px;
	}
`
const SRateInfoBody = styled.span`
	transform: translateY(1px);
	display: inline-block;
	line-height: 1.57;
	font-size: ${rem(14)};
	${device.tablet} {
		font-size: ${rem(15)};
		line-height: 1.6;
	}
`
const SHeading = styled.h2`
	color: ${colors.pureWhite};
	margin-top: 25px;
	font-weight: bold;
	font-size: ${rem(24)};
	line-height: normal;
	${device.tablet} {
		font-size: ${rem(28)};
		margin-top: 30px;
	}
`
const SBody = styled.p`
	margin-top: 10px;
	color: ${colors.lightGrey};
	line-height: 1.57;
	font-size: ${rem(14)};
	${device.tablet} {
		font-size: ${rem(15)};
	}
`

export default Thanks
