
export class Time {

	constructor(milliseconds) {
		this.forecast = {"latitude":45.5,"longitude":-73.5,"timezone":"America/Montreal","offset":-4,"daily":{"summary":"Light rain throughout the week, with temperatures peaking at 81°F on Friday.","icon":"rain","data":[{"time":1498017600,"summary":"Partly cloudy until evening.","icon":"partly-cloudy-day","sunriseTime":1498035994,"sunsetTime":1498092458,"moonPhase":0.91,"precipIntensity":0.0027,"precipIntensityMax":0.0209,"precipIntensityMaxTime":1498042800,"precipProbability":0.41,"precipType":"rain","temperatureMin":59.54,"temperatureMinTime":1498039200,"temperatureMax":72.85,"temperatureMaxTime":1498078800,"apparentTemperatureMin":56.08,"apparentTemperatureMinTime":1498039200,"apparentTemperatureMax":68.09,"apparentTemperatureMaxTime":1498082400,"dewPoint":55.63,"humidity":0.69,"windSpeed":10.82,"windGust":22.45,"windBearing":248,"visibility":10,"cloudCover":0.42,"pressure":1009.01,"ozone":362.82,"uvIndex":6,"uvIndexTime":1498064400},{"time":1498104000,"summary":"Light rain overnight.","icon":"rain","sunriseTime":1498122408,"sunsetTime":1498178868,"moonPhase":0.95,"precipIntensity":0.0003,"precipIntensityMax":0.0017,"precipIntensityMaxTime":1498114800,"precipProbability":0.01,"precipType":"rain","temperatureMin":55.86,"temperatureMinTime":1498122000,"temperatureMax":76.92,"temperatureMaxTime":1498154400,"apparentTemperatureMin":53.74,"apparentTemperatureMinTime":1498122000,"apparentTemperatureMax":73.65,"apparentTemperatureMaxTime":1498154400,"dewPoint":55.3,"humidity":0.67,"windSpeed":7.12,"windGust":13.92,"windBearing":245,"visibility":10,"cloudCover":0.26,"pressure":1011.56,"ozone":326.86,"uvIndex":9,"uvIndexTime":1498150800},{"time":1498190400,"summary":"Rain throughout the day.","icon":"rain","sunriseTime":1498208824,"sunsetTime":1498265276,"moonPhase":0.98,"precipIntensity":0.0371,"precipIntensityMax":0.0697,"precipIntensityMaxTime":1498240800,"precipProbability":0.95,"precipType":"rain","temperatureMin":60.72,"temperatureMinTime":1498204800,"temperatureMax":80.83,"temperatureMaxTime":1498244400,"apparentTemperatureMin":59.58,"apparentTemperatureMinTime":1498204800,"apparentTemperatureMax":80.99,"apparentTemperatureMaxTime":1498244400,"dewPoint":65.7,"humidity":0.84,"windSpeed":8.55,"windGust":21.17,"windBearing":213,"visibility":10,"cloudCover":0.85,"pressure":1000.69,"ozone":295.3,"uvIndex":6,"uvIndexTime":1498237200},{"time":1498276800,"summary":"Light rain in the afternoon.","icon":"rain","sunriseTime":1498295242,"sunsetTime":1498351682,"moonPhase":0.03,"precipIntensity":0.0026,"precipIntensityMax":0.0135,"precipIntensityMaxTime":1498327200,"precipProbability":0.16,"precipType":"rain","temperatureMin":63.57,"temperatureMinTime":1498359600,"temperatureMax":75.32,"temperatureMaxTime":1498330800,"apparentTemperatureMin":60.45,"apparentTemperatureMinTime":1498359600,"apparentTemperatureMax":70.02,"apparentTemperatureMaxTime":1498330800,"dewPoint":61.22,"humidity":0.76,"windSpeed":11.14,"windGust":22.16,"windBearing":259,"visibility":10,"cloudCover":0.51,"pressure":1001.53,"ozone":313.26,"uvIndex":8,"uvIndexTime":1498327200},{"time":1498363200,"summary":"Light rain throughout the day.","icon":"rain","sunriseTime":1498381662,"sunsetTime":1498438086,"moonPhase":0.06,"precipIntensity":0.0106,"precipIntensityMax":0.0267,"precipIntensityMaxTime":1498417200,"precipProbability":0.16,"precipType":"rain","temperatureMin":56.49,"temperatureMinTime":1498377600,"temperatureMax":71.14,"temperatureMaxTime":1498410000,"apparentTemperatureMin":53.26,"apparentTemperatureMinTime":1498377600,"apparentTemperatureMax":68.26,"apparentTemperatureMaxTime":1498406400,"dewPoint":56.68,"humidity":0.77,"windSpeed":9.67,"windGust":19.63,"windBearing":250,"cloudCover":0.05,"pressure":1009.66,"ozone":357.94,"uvIndex":8,"uvIndexTime":1498410000},{"time":1498449600,"summary":"Light rain in the morning and afternoon.","icon":"rain","sunriseTime":1498468085,"sunsetTime":1498524487,"moonPhase":0.1,"precipIntensity":0.0071,"precipIntensityMax":0.0184,"precipIntensityMaxTime":1498467600,"precipProbability":0.5,"precipType":"rain","temperatureMin":54.74,"temperatureMinTime":1498471200,"temperatureMax":68.81,"temperatureMaxTime":1498507200,"apparentTemperatureMin":50.82,"apparentTemperatureMinTime":1498532400,"apparentTemperatureMax":65.41,"apparentTemperatureMaxTime":1498507200,"dewPoint":52.07,"humidity":0.74,"windSpeed":7.75,"windGust":14.43,"windBearing":255,"cloudCover":0.43,"pressure":1011.94,"ozone":370.35,"uvIndex":5,"uvIndexTime":1498496400},{"time":1498536000,"summary":"Clear throughout the day.","icon":"clear-day","sunriseTime":1498554510,"sunsetTime":1498610886,"moonPhase":0.13,"precipIntensity":0.0004,"precipIntensityMax":0.0019,"precipIntensityMaxTime":1498597200,"precipProbability":0.02,"precipType":"rain","temperatureMin":51.61,"temperatureMinTime":1498550400,"temperatureMax":68.76,"temperatureMaxTime":1498586400,"apparentTemperatureMin":46.05,"apparentTemperatureMinTime":1498550400,"apparentTemperatureMax":61.45,"apparentTemperatureMaxTime":1498593600,"dewPoint":50.67,"humidity":0.71,"windSpeed":11.83,"windGust":22.3,"windBearing":244,"cloudCover":0.02,"pressure":1014.48,"ozone":383.6,"uvIndex":8,"uvIndexTime":1498582800},{"time":1498622400,"summary":"Light rain until afternoon.","icon":"rain","sunriseTime":1498640936,"sunsetTime":1498697282,"moonPhase":0.17,"precipIntensity":0.0053,"precipIntensityMax":0.0288,"precipIntensityMaxTime":1498662000,"precipProbability":0.1,"precipType":"rain","temperatureMin":54.49,"temperatureMinTime":1498636800,"temperatureMax":68.08,"temperatureMaxTime":1498683600,"apparentTemperatureMin":51.62,"apparentTemperatureMinTime":1498636800,"apparentTemperatureMax":66.57,"apparentTemperatureMaxTime":1498665600,"dewPoint":52.83,"humidity":0.73,"windSpeed":5.74,"windGust":17.95,"windBearing":247,"cloudCover":0.34,"pressure":1016.5,"ozone":358.44,"uvIndex":8,"uvIndexTime":1498665600}]}}
		
		this.sunrise = this.forecast.daily.data[0].sunriseTime*1000
		this.sunset = this.forecast.daily.data[0].sunsetTime*1000
		this.nextSunrise = this.forecast.daily.data[1].sunriseTime*1000

		this.dLength = this.sunset - this.sunrise
		this.nLength = this.nextSunrise - this.sunset
		this.rLength = this.nextSunrise - this.sunrise
		
		this.s = (this.sunset - this.sunrise) / this.rLength

		this.setMilliseconds(milliseconds ? milliseconds : Date.now())


		return this
	}

	setMilliseconds(milliseconds) {
		this.milliseconds = milliseconds
		
		this.r = (this.milliseconds - this.sunrise) / this.rLength
		this.d = (this.milliseconds - this.sunrise) / this.dLength
		this.n = (this.milliseconds - this.sunset) / this.nLength
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
}