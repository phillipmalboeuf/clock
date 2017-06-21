
export class Time {

	constructor(milliseconds) {
		this.milliseconds = milliseconds ? milliseconds : Date.now()
		
		this.sunrise = Time.sunrise()
		this.sunset = Time.sunset()
		this.nextSunrise = this.sunrise + 86400000

		this.dLength = this.sunset - this.sunrise
		this.nLength = this.nextSunrise - this.sunset
		this.rLength = this.nextSunrise - this.sunrise
		
		this.s = (this.sunset - this.sunrise) / this.rLength

		this.r = (this.milliseconds - this.sunrise) / this.rLength
		this.d = (this.milliseconds - this.sunrise) / this.dLength
		this.n = (this.milliseconds - this.sunset) / this.nLength
	}

	toString(decimals=1) {
		return this.r >= this.sunset ? 
			`N${(this.n * 100).toFixed(decimals)}`
			: 
			`D${(this.d * 100).toFixed(decimals)}`
	}

	static sunrise() {
		let sunrise = new Date()
		sunrise.setHours(5)
		sunrise.setMinutes(0)
		sunrise.setSeconds(0)
		sunrise.setMilliseconds(0)

		return sunrise.getTime()
	}

	static sunset() {
		let sunset = new Date()
		sunset.setHours(19)
		sunset.setMinutes(0)
		sunset.setSeconds(0)
		sunset.setMilliseconds(0)

		return sunset.getTime()
	}

	getNowX(center, radius, offset=0) {
		return this.getX(this.r, center, radius, offset)
	}

	getNowY(center, radius, offset=0) {
		return this.getY(this.r, center, radius, offset)
	}

	getSunriseX(center, radius, offset=0) {
		return this.getX(0, center, radius, offset)
	}

	getSunriseY(center, radius, offset=0) {
		return this.getY(0, center, radius, offset)
	}

	getSunsetX(center, radius, offset=0) {
		return this.getX(this.s, center, radius, offset)
	}

	getSunsetY(center, radius, offset=0) {
		return this.getY(this.s, center, radius, offset)
	}

	getDayFractionX(fraction, center, radius, offset=0) {
		return this.getX(this.s * fraction, center, radius, offset)
	}

	getDayFractionY(fraction, center, radius, offset=0) {
		return this.getY(this.s * fraction, center, radius, offset)
	}

	getNightFractionX(fraction, center, radius, offset=0) {
		return this.getX(this.s + (this.nLength/this.rLength * fraction), center, radius, offset)
	}

	getNightFractionY(fraction, center, radius, offset=0) {
		return this.getY(this.s + (this.nLength/this.rLength * fraction), center, radius, offset)
	}


	getX(time, center, radius, offset=0) {
		return center + (radius * Math.cos((time + offset + 1 - this.s + ((this.s - 0.5) / 2)) * 2 * Math.PI))
	}

	getY(time, center, radius, offset=0) {
		return center + (radius * Math.sin((time + offset + 1 - this.s + ((this.s - 0.5) / 2)) * 2 * Math.PI))
	}
}