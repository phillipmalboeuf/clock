
import { Grid, Column } from './grid.js';
import { Button } from './button.js';


export class Clock extends React.Component {


	constructor(props) {
		super(props)

		this.state = {
			radius: 300
		}
	}

	resetClock() {
		let sunrise = new Date()
		sunrise.setHours(5)
		sunrise.setMinutes(0)
		sunrise.setSeconds(0)
		sunrise.setMilliseconds(0)
		let sunset = new Date()
		sunset.setHours(19)
		sunset.setMinutes(0)
		sunset.setSeconds(0)
		sunset.setMilliseconds(0)
		let nextSunrise = new Date()
		nextSunrise.setDate(nextSunrise.getDate() + 1)
		nextSunrise.setHours(5)
		nextSunrise.setMinutes(0)
		nextSunrise.setSeconds(0)
		nextSunrise.setMilliseconds(0)

		this.setState({
			now: Date.now(),
			sunrise: sunrise.getTime(),
			sunset: sunset.getTime(),
			nextSunrise: nextSunrise.getTime(),
			day: nextSunrise.getTime() - sunrise.getTime()
		})
	}

	componentWillMount() {
		this.resetClock()
	}

	componentDidMount() {
		this.interval = window.setInterval(this.updateNow.bind(this), 1000)
	}

	componentWillUnmount() {
		window.clearInterval(this.interval)
	}

	updateNow() {
		let now = Date.now()

		if (now - this.state.sunrise > this.state.day) {
			this.resetClock()
		} else {
			this.setState({now: now})
		}
			
	}


	render() {

		let radius = this.state.radius
		let diameter = radius*2
		let outer = radius*0.1
		let arrow = radius*0.75
		let center = radius
		let stroke = radius*0.02
		let font = radius*0.1

		let now = (this.state.now - this.state.sunrise) / this.state.day
		let sunrise = (this.state.sunrise - this.state.sunrise) / this.state.day
		let sunset = (this.state.sunset - this.state.sunrise) / this.state.day
		let nextSunrise = (this.state.nextSunrise - this.state.sunrise) / this.state.day

		let rotateX = (value, percentage)=> center + ((radius + value) * Math.cos((percentage + 1 - sunset + (sunset-0.5)/2)*2*Math.PI))
		let rotateY = (value, percentage)=> center + ((radius + value) * Math.sin((percentage + 1 - sunset + (sunset-0.5)/2)*2*Math.PI))

		let time = now >= sunset ? `N${((now-sunset)/(nextSunrise-sunset)*100).toFixed(1)}` : `D${((now-sunrise)/(sunset-sunrise)*100).toFixed(1)}`


		return <svg width={diameter} height={diameter} className="clock">
			{/* Text */}
			<text x={diameter} y={0} fontSize={font/2} textAnchor="start">Now: {now}</text>
			<text x={diameter} y={font} fontSize={font/2} textAnchor="start">Sunrise: {sunrise}</text>
			<text x={diameter} y={font*2} fontSize={font/2} textAnchor="start">Sunset: {sunset}</text>

			{/* Pies */}
			<path d={`M${center} ${center} L${rotateX(0, sunrise)} ${rotateY(0, sunrise)} A${radius} ${radius} 1 0 1 ${rotateX(0, sunset/4)} ${rotateY(0, sunset/4)} Z`} className="clock__day clock__day--dark" stroke="none" fill="white" />
			<path d={`M${center} ${center} L${rotateX(0, sunset/4)} ${rotateY(0, sunset/4)} A${radius} ${radius} 1 0 1 ${rotateX(0, sunset/4*3)} ${rotateY(0, sunset/4*3)} Z`} className="clock__day" stroke="none" fill="white" />
			<path d={`M${center} ${center} L${rotateX(0, sunset/4*3)} ${rotateY(0, sunset/4*3)} A${radius} ${radius} 1 0 1 ${rotateX(0, sunset)} ${rotateY(0, sunset)} Z`} className="clock__day clock__day--dark" stroke="none" fill="white" />

			<path d={`M${center} ${center} L${rotateX(0, sunset)} ${rotateY(0, sunset)} A${radius} ${radius} 1 0 1 ${rotateX(0, sunset+(nextSunrise-sunset)/4)} ${rotateY(0, sunset+(nextSunrise-sunset)/4)} Z`} className="clock__night clock__night--light" stroke="none" fill="black" />
			<path d={`M${center} ${center} L${rotateX(0, sunset+(nextSunrise-sunset)/4)} ${rotateY(0, sunset+(nextSunrise-sunset)/4)} A${radius} ${radius} 1 0 1 ${rotateX(0, sunset+(nextSunrise-sunset)/4*3)} ${rotateY(0, sunset+(nextSunrise-sunset)/4*3)} Z`} className="clock__night" stroke="none" fill="black" />
			<path d={`M${center} ${center} L${rotateX(0, sunset+(nextSunrise-sunset)/4*3)} ${rotateY(0, sunset+(nextSunrise-sunset)/4*3)} A${radius} ${radius} 1 0 1 ${rotateX(0, sunrise)} ${rotateY(0, sunrise)} Z`} className="clock__night clock__night--light" stroke="none" fill="black" />

			{/* Clock outer edge */}
			<circle cx={center} cy={center} r={radius} className="clock__line" stroke="black" strokeWidth={stroke} fill="transparent" />
			
			{/* D0 */}
			<text x={rotateX(outer+font/4, sunrise)} y={rotateY(outer+font/4, sunrise)} fontSize={font} fontWeight="bold" textAnchor="end">D0</text>
			<line x1={rotateX(0, sunrise)} y1={rotateY(0, sunrise)} x2={rotateX(outer, sunrise)} y2={rotateY(outer, sunrise)} className="clock__line" stroke="black" strokeWidth={stroke} />
			<line x1={rotateX(0, sunset/4)} y1={rotateY(0, sunset/4)} x2={rotateX(outer/2, sunset/4)} y2={rotateY(outer/2, sunset/4)} className="clock__line" stroke="black" strokeWidth={stroke/2} />

			{/* D50 */}
			<text x={rotateX(outer+font/4, sunset/2)} y={rotateY(outer+font/4, sunset/2)} fontSize={font} fontWeight="bold" textAnchor="middle">D50</text>
			<line x1={rotateX(0, sunset/2)} y1={rotateY(0, sunset/2)} x2={rotateX(outer, sunset/2)} y2={rotateY(outer, sunset/2)} className="clock__line" stroke="black" strokeWidth={stroke} />
			<line x1={rotateX(0, sunset/4*3)} y1={rotateY(0, sunset/4*3)} x2={rotateX(outer/2, sunset/4*3)} y2={rotateY(outer/2, sunset/4*3)} className="clock__line" stroke="black" strokeWidth={stroke/2} />
			
			{/* N0 */}
			<text x={rotateX(outer+font/4, sunset)} y={rotateY(outer+font/4, sunset)} fontSize={font} fontWeight="bold">N0</text>
			<line x1={rotateX(0, sunset)} y1={rotateY(0, sunset)} x2={rotateX(outer, sunset)} y2={rotateY(outer, sunset)} className="clock__line" stroke="black" strokeWidth={stroke} />
			<line x1={rotateX(0, sunset+(nextSunrise-sunset)/4)} y1={rotateY(0, sunset+(nextSunrise-sunset)/4)} x2={rotateX(outer/2, sunset+(nextSunrise-sunset)/4)} y2={rotateY(outer/2, sunset+(nextSunrise-sunset)/4)} className="clock__line" stroke="black" strokeWidth={stroke/2} />

			{/* N50 */}
			<text x={rotateX(outer+font, sunset+(nextSunrise-sunset)/2)} y={rotateY(outer+font, sunset+(nextSunrise-sunset)/2)} fontSize={font} fontWeight="bold" textAnchor="middle">N50</text>
			<line x1={rotateX(0, sunset+(nextSunrise-sunset)/2)} y1={rotateY(0, sunset+(nextSunrise-sunset)/2)} x2={rotateX(outer, sunset+(nextSunrise-sunset)/2)} y2={rotateY(outer, sunset+(nextSunrise-sunset)/2)} className="clock__line" stroke="black" strokeWidth={stroke} />	
			<line x1={rotateX(0, sunset+(nextSunrise-sunset)/4*3)} y1={rotateY(0, sunset+(nextSunrise-sunset)/4*3)} x2={rotateX(outer/2, sunset+(nextSunrise-sunset)/4*3)} y2={rotateY(outer/2, sunset+(nextSunrise-sunset)/4*3)} className="clock__line" stroke="black" strokeWidth={stroke/2} />

			{/* Clock hand */}
			<path d={`M${center} ${center} L${rotateX(-arrow, now-0.1)} ${rotateY(-arrow, now-0.1)} L${rotateX(0, now)} ${rotateY(0, now)} L${rotateX(-arrow, now+0.1)} ${rotateY(-arrow, now+0.1)} Z`} className="clock__hand" strokeWidth={stroke} strokeLinejoin="miter" strokeMiterlimit={5} fill="black" />

			{/* Clock current time */}
			<text x={center} y={center} className="clock__now" fontSize={font*2} fontWeight="bold" textAnchor="end">{time}</text>
		</svg>
	}
}
