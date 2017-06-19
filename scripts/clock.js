
import { Grid, Column } from './grid.js';
import { Button } from './button.js';


export class Clock extends React.Component {


	constructor(props) {
		super(props)

		let now = new Date()
		let sunrise = new Date()
		sunrise.setHours(5)
		sunrise.setMinutes(30)
		sunrise.setSeconds(0)
		sunrise.setMilliseconds(0)
		let sunset = new Date()
		sunset.setHours(18)
		sunset.setMinutes(30)
		sunset.setSeconds(0)
		sunset.setMilliseconds(0)
		let nextSunrise = new Date()
		nextSunrise.setDate(nextSunrise.getDate() + 1)
		nextSunrise.setHours(5)
		nextSunrise.setMinutes(30)
		nextSunrise.setSeconds(0)
		nextSunrise.setMilliseconds(0)

		this.state = {
			radius: 300,
			now: Date.now(),
			sunrise: sunrise.getTime(),
			sunset: sunset.getTime(),
			nextSunrise: nextSunrise.getTime()
		}

		this.state.day = this.state.nextSunrise - this.state.sunrise
	}


	componentDidMount() {
		this.interval = window.setInterval(this.updateNow.bind(this), 1000)
	}

	componentWillUnmount() {
		window.clearInterval(this.interval)
	}

	updateNow() {
		this.setState({
			now: Date.now()
		})
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

		let rotateX = (value, percentage)=> center + ((radius + value) * Math.cos((percentage + 0.25)*2*Math.PI))
		let rotateY = (value, percentage)=> center + ((radius + value) * Math.sin((percentage + 0.25)*2*Math.PI))

		let time = now >= sunset ? `N${((now-sunset)/(sunrise-sunset)*-100).toFixed(1)}` : `D${((now-sunrise)/(sunset-sunrise)*100).toFixed(1)}`


		return <svg width={diameter} height={diameter} className="clock">
			<text x={diameter} y={0} fontSize={font/2} textAnchor="start">Now: {now}</text>
			<text x={diameter} y={font} fontSize={font/2} textAnchor="start">Sunrise: {sunrise}</text>
			<text x={diameter} y={font*2} fontSize={font/2} textAnchor="start">Sunset: {sunset}</text>


			<circle cx={center} cy={center} r={radius} className="clock__back" stroke="black" strokeWidth={stroke} fill="white" />
			<path d={`M${center} ${center} L${rotateX(0, sunrise)} ${rotateY(0, sunrise)} A${radius} ${radius} 0 0 0 ${rotateX(0, sunset)} ${rotateY(0, sunset)} Z`} className="clock__night" stroke="none" fill="black" />
			
			<line x1={rotateX(0, sunrise)} y1={rotateY(0, sunrise)} x2={rotateX(outer, sunrise)} y2={rotateY(outer, sunrise)} className="clock__line" stroke="black" strokeWidth={stroke} />
			<text x={rotateX(outer+font/4, sunrise)} y={rotateY(outer+font/4, sunrise)} fontSize={font} fontWeight="bold" textAnchor="end">D0</text>

			<line x1={center} y1={0} x2={center} y2={-outer} className="clock__line" stroke="black" strokeWidth={stroke} />
			<text x={center} y={-outer-font/4} fontSize={font} fontWeight="bold" textAnchor="middle">D50</text>

			<line x1={rotateX(0, sunset)} y1={rotateY(0, sunset)} x2={rotateX(outer, sunset)} y2={rotateY(outer, sunset)} className="clock__line" stroke="black" strokeWidth={stroke} />
			<text x={rotateX(outer+font/4, sunset)} y={rotateY(outer+font/4, sunset)} fontSize={font} fontWeight="bold">N0</text>

			<line x1={center} y1={diameter} x2={center} y2={diameter+outer} className="clock__line" stroke="black" strokeWidth={stroke} />	
			<text x={center} y={diameter+outer+font} fontSize={font} fontWeight="bold" textAnchor="middle">N50</text>

			<path d={`M${center} ${center} L${rotateX(-arrow, now-0.1)} ${rotateY(-arrow, now-0.1)} L${rotateX(0, now)} ${rotateY(0, now)} L${rotateX(-arrow, now+0.1)} ${rotateY(-arrow, now+0.1)} Z`} className="clock__hand" strokeWidth={stroke} strokeLinejoin="miter" strokeMiterlimit={5} fill="black" />

			<text x={center} y={center} className="clock__now" fontSize={font*2} fontWeight="bold" textAnchor="middle">{time}</text>
		</svg>
	}
}
