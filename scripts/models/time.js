
export class Time {

	constructor(milliseconds) {

		milliseconds = milliseconds ? milliseconds : Date.now()

		
		Time.getCurrentPosition((latitude, longitude)=> {
			this.calculateTimes(milliseconds, latitude, longitude)
		})


		return this
	}

	static getCurrentPosition(success) {
		if (localStorage.getItem("latitude")) {
			success(localStorage.getItem("latitude"), localStorage.getItem("longitude"))
		}

		navigator.geolocation.getCurrentPosition((position)=> {
			localStorage.setItem("latitude", position.coords.latitude)
			localStorage.setItem("longitude", position.coords.longitude)

			success(position.coords.latitude, position.coords.longitude)
		})
	}

	calculateTimes(milliseconds, latitude, longitude) {
		let times = SunCalc.getTimes(milliseconds, latitude, longitude)
		
		this.sunrise = times.sunrise.getTime()
		this.sunset = times.sunset.getTime()
		this.nextSunrise = this.sunrise + 86400000

		this.dLength = this.sunset - this.sunrise
		this.nLength = this.nextSunrise - this.sunset
		this.rLength = this.nextSunrise - this.sunrise
		
		this.s = (this.sunset - this.sunrise) / this.rLength

		this.setMilliseconds(milliseconds)
	}

	setMilliseconds(milliseconds) {
		this.milliseconds = milliseconds
		
		this.r = (this.milliseconds - this.sunrise) / this.rLength
		this.d = (this.milliseconds - this.sunrise) / this.dLength
		this.n = (this.milliseconds - this.sunset) / this.nLength

		if (this.r > 1) {
			this.constructor(milliseconds)
		}
	}

	toString(decimals=1) {
		return this.r >= this.s ? 
			`N${(this.n * 100).toFixed(decimals)}`
			: 
			`D${(this.d * 100).toFixed(decimals)}`
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

	getDayX(fraction, center, radius, offset=0) {
		return this.getX(this.s * fraction, center, radius, offset)
	}

	getDayY(fraction, center, radius, offset=0) {
		return this.getY(this.s * fraction, center, radius, offset)
	}

	getNightX(fraction, center, radius, offset=0) {
		return this.getX(this.s + (this.nLength/this.rLength * fraction), center, radius, offset)
	}

	getNightY(fraction, center, radius, offset=0) {
		return this.getY(this.s + (this.nLength/this.rLength * fraction), center, radius, offset)
	}


	getX(time, center, radius, offset=0) {
		return center + (radius * Math.cos((time + offset + 1 - this.s + ((this.s - 0.5) / 2)) * 2 * Math.PI))
	}

	getY(time, center, radius, offset=0) {
		return center + (radius * Math.sin((time + offset + 1 - this.s + ((this.s - 0.5) / 2)) * 2 * Math.PI))
	}

	getCurrentPosition() {

	}
}