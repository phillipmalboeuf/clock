
import { Grid, Column } from './grid.js';
import { Button } from './button.js';


export class Clock extends React.Component {


	constructor(props) {
		super(props)

		this.state = {
			radius: 350
		}
	}


	render() {

		let radius = this.state.radius
		let diameter = radius*2
		let outer = radius*0.1
		let arrow = radius*0.2
		let center = radius
		let stroke = radius*0.02

		return <Grid center>
			<svg width={diameter} height={diameter} className="clock">
				<circle cx={center} cy={center} r={radius} className="clock__back" stroke="black" strokeWidth={stroke} fill="white" />
				<path d={`M${center} ${center} L${0} ${center} A${radius} ${radius} 0 0 0 ${diameter} ${center} Z`} className="clock__night" stroke="none" fill="black" />
				
				<line x1={center} y1={0} x2={center} y2={-outer} className="clock__line" stroke="black" strokeWidth={stroke} />
				<line x1={center} y1={diameter} x2={center} y2={diameter+outer} className="clock__line" stroke="black" strokeWidth={stroke} />
				<line x1={0} y1={center} x2={-outer} y2={center} className="clock__line" stroke="black" strokeWidth={stroke} />
				<line x1={diameter} y1={center} x2={diameter+outer} y2={center} className="clock__line" stroke="black" strokeWidth={stroke} />

				<path d={`M${center} ${center} L${center-arrow} ${center-arrow} L${center} ${0} L${center+arrow} ${center-arrow} Z`} className="clock__hand" strokeWidth={stroke} strokeLinejoin="miter" strokeMiterlimit={5} fill="black" />
			</svg>
		</Grid>
	}
}
