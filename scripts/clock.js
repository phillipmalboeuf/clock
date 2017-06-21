

import { Time } from './models/time.js';


export class Clock extends React.Component {


	constructor(props) {
		super(props)

		this.state = {
			radius: props.radius ? props.radius : 300,
			now: new Time()
		}
	}

	componentDidMount() {
		this.interval = window.setInterval(this.updateNow.bind(this), 1000)
	}

	componentWillUnmount() {
		window.clearInterval(this.interval)
	}

	updateNow() {
		this.setState({
			now: new Time()
		})
	}


	render() {

		let radius = this.state.radius
		let diameter = radius*2
		let outer = radius*0.1
		let arrow = radius*0.25
		let center = radius
		let stroke = radius*0.02
		let font = radius*0.1


		return <svg width={diameter} height={diameter} className="clock">
			{/* Text */}
			<text x={diameter} y={0} fontSize={font/2} textAnchor="start">Now: {this.state.now.r}</text>
			<text x={diameter} y={font} fontSize={font/2} textAnchor="start">Sunset: {this.state.now.s}</text>

			{/* Pies */}
			<path className="clock__day clock__day--dark" stroke="none" fill="white"
				d={`M${center} ${center}
				L${this.state.now.getSunriseX(center, radius)} ${this.state.now.getSunriseY(center, radius)}
				A${radius} ${radius} 1 0 1
				${this.state.now.getDayFractionX(0.25, center, radius)} ${this.state.now.getDayFractionY(0.25, center, radius)} Z`} />
			<path className="clock__day" stroke="none" fill="white"
				d={`M${center} ${center}
				L${this.state.now.getDayFractionX(0.25, center, radius)} ${this.state.now.getDayFractionY(0.25, center, radius)}
				A${radius} ${radius} 1 0 1
				${this.state.now.getDayFractionX(0.75, center, radius)} ${this.state.now.getDayFractionY(0.75, center, radius)} Z`} />
			<path className="clock__day clock__day--dark" stroke="none" fill="white"
				d={`M${center} ${center}
				L${this.state.now.getDayFractionX(0.75, center, radius)} ${this.state.now.getDayFractionY(0.75, center, radius)}
				A${radius} ${radius} 1 0 1
				${this.state.now.getSunsetX(center, radius)} ${this.state.now.getSunsetY(center, radius)} Z`} />

			<path className="clock__night clock__night--light" stroke="none" fill="white"
				d={`M${center} ${center}
				L${this.state.now.getSunsetX(center, radius)} ${this.state.now.getSunsetY(center, radius)}
				A${radius} ${radius} 1 0 1
				${this.state.now.getNightFractionX(0.25, center, radius)} ${this.state.now.getNightFractionY(0.25, center, radius)} Z`} />
			<path className="clock__night" stroke="none" fill="white"
				d={`M${center} ${center}
				L${this.state.now.getNightFractionX(0.25, center, radius)} ${this.state.now.getNightFractionY(0.25, center, radius)}
				A${radius} ${radius} 1 0 1
				${this.state.now.getNightFractionX(0.75, center, radius)} ${this.state.now.getNightFractionY(0.75, center, radius)} Z`} />
			<path className="clock__night clock__night--light" stroke="none" fill="white"
				d={`M${center} ${center}
				L${this.state.now.getNightFractionX(0.75, center, radius)} ${this.state.now.getNightFractionY(0.75, center, radius)}
				A${radius} ${radius} 1 0 1
				${this.state.now.getSunriseX(center, radius)} ${this.state.now.getSunriseY(center, radius)} Z`} />


			{/* Clock outer edge */}
			<circle cx={center} cy={center} r={radius} className="clock__line" stroke="black" strokeWidth={stroke} fill="transparent" />

			{/* D0 */}
			<text fontSize={font} fontWeight="bold" textAnchor="end"
				x={this.state.now.getSunriseX(center, radius+outer+font/4)}
				y={this.state.now.getSunriseY(center, radius+outer+font/4)}>D0</text>
			<line className="clock__line" stroke="black" strokeWidth={stroke}
				x1={this.state.now.getSunriseX(center, radius)}
				y1={this.state.now.getSunriseY(center, radius)}
				x2={this.state.now.getSunriseX(center, radius+outer)}
				y2={this.state.now.getSunriseY(center, radius+outer)} />
			<line className="clock__line" stroke="black" strokeWidth={stroke/2}
				x1={this.state.now.getDayFractionX(0.25, center, radius)}
				y1={this.state.now.getDayFractionY(0.25, center, radius)}
				x2={this.state.now.getDayFractionX(0.25, center, radius+outer/2)}
				y2={this.state.now.getDayFractionY(0.25, center, radius+outer/2)} />


			{/* D50 */}
			<text fontSize={font} fontWeight="bold" textAnchor="middle"
				x={this.state.now.getDayFractionX(0.5, center, radius+outer+font/4)}
				y={this.state.now.getDayFractionY(0.5, center, radius+outer+font/4)}>D50</text>
			<line className="clock__line" stroke="black" strokeWidth={stroke}
				x1={this.state.now.getDayFractionX(0.5, center, radius)}
				y1={this.state.now.getDayFractionY(0.5, center, radius)}
				x2={this.state.now.getDayFractionX(0.5, center, radius+outer)}
				y2={this.state.now.getDayFractionY(0.5, center, radius+outer)} />
			<line className="clock__line" stroke="black" strokeWidth={stroke/2}
				x1={this.state.now.getDayFractionX(0.75, center, radius)}
				y1={this.state.now.getDayFractionY(0.75, center, radius)}
				x2={this.state.now.getDayFractionX(0.75, center, radius+outer/2)}
				y2={this.state.now.getDayFractionY(0.75, center, radius+outer/2)} />


			{/* N0 */}
			<text fontSize={font} fontWeight="bold" textAnchor="start"
				x={this.state.now.getSunsetX(center, radius+outer+font/4)}
				y={this.state.now.getSunsetY(center, radius+outer+font/4)}>N0</text>
			<line className="clock__line" stroke="black" strokeWidth={stroke}
				x1={this.state.now.getSunsetX(center, radius)}
				y1={this.state.now.getSunsetY(center, radius)}
				x2={this.state.now.getSunsetX(center, radius+outer)}
				y2={this.state.now.getSunsetY(center, radius+outer)} />
			<line className="clock__line" stroke="black" strokeWidth={stroke/2}
				x1={this.state.now.getNightFractionX(0.25, center, radius)}
				y1={this.state.now.getNightFractionY(0.25, center, radius)}
				x2={this.state.now.getNightFractionX(0.25, center, radius+outer/2)}
				y2={this.state.now.getNightFractionY(0.25, center, radius+outer/2)} />


			{/* N50 */}
			<text fontSize={font} fontWeight="bold" textAnchor="middle"
				x={this.state.now.getNightFractionX(0.5, center, radius+outer+font)}
				y={this.state.now.getNightFractionY(0.5, center, radius+outer+font)}>N50</text>
			<line className="clock__line" stroke="black" strokeWidth={stroke}
				x1={this.state.now.getNightFractionX(0.5, center, radius)}
				y1={this.state.now.getNightFractionY(0.5, center, radius)}
				x2={this.state.now.getNightFractionX(0.5, center, radius+outer)}
				y2={this.state.now.getNightFractionY(0.5, center, radius+outer)} />
			<line className="clock__line" stroke="black" strokeWidth={stroke/2}
				x1={this.state.now.getNightFractionX(0.75, center, radius)}
				y1={this.state.now.getNightFractionY(0.75, center, radius)}
				x2={this.state.now.getNightFractionX(0.75, center, radius+outer/2)}
				y2={this.state.now.getNightFractionY(0.75, center, radius+outer/2)} />


			
			{/* Clock hand */}
			<path d={`M${center} ${center}
				L${this.state.now.getNowX(center, arrow, -0.1)} ${this.state.now.getNowY(center, arrow, -0.1)}
				L${this.state.now.getNowX(center, radius)} ${this.state.now.getNowY(center, radius)}
				L${this.state.now.getNowX(center, arrow, 0.1)} ${this.state.now.getNowY(center, arrow, 0.1)} Z`} className="clock__hand" strokeWidth={stroke} strokeLinejoin="miter" strokeMiterlimit={5} fill="black" />

			{/* Clock current time */}
			<text x={center} y={center} className="clock__now" fontSize={font*2} fontWeight="bold" textAnchor={this.state.now.r > this.state.now.s/2 && this.state.now.r < this.state.now.s+(this.state.now.nLength/2) ? "end" : "start"}>{this.state.now.toString()}</text>
		</svg>
	}
}
