if (module.hot)
	module.hot.accept()


import '../styles/all.scss'


import { Clock } from './clock.js'


window.App = {
	init() {
		this.render()
	},

	render() {

		const clocks = document.querySelectorAll("[data-clock]")
		if (clocks.length > 0) {
			for (var i = clocks.length - 1; i >= 0; i--) {
				ReactDOM.render(
					<Clock />, clocks[i]
				)
			}
		}

	},

	destroy() {

		const elements = document.querySelectorAll("[data-reactroot]")
		if (elements.length > 0) {
			for (var i = elements.length - 1; i >= 0; i--) {
				if (!elements[i].parentNode.hasAttribute("data-turbolinks-permanent")) {
					ReactDOM.unmountComponentAtNode(elements[i].parentNode)	
				}
			}
		}
	}
}


window.App.destroy()
window.App.init()

		
	



