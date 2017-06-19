

import { Grid } from './grid.js';

import { Button } from './button.js';


export class Overlay extends React.Component {

	constructor(props) {
		super(props)
		
		this.state = {
			showed: props.show,
			origin: {
				x: 0.5,
				y: 0.5
			}
		}
	}

	
	componentDidMount() {
		key("escape", this.toggle.bind(this))
	}

	componentWillUnmount() {
		key.unbind("escape")
	}


	toggle(event) {
		event.preventDefault()
		this.setState({
			showed: !this.state.showed,
			origin: {
				x: event.screenX / window.innerWidth,
				y: event.screenY / window.innerHeight
			}
		})
	}

	hide(event) {
		event.preventDefault()
		this.setState({showed: false})
	}


	render() {

		return <div className={`overlay${this.state.showed ? " overlay--show": ""}`}>
			<a className="overlay__back" onClick={this.hide.bind(this)} />
			<div className="overlay__container" style={{
					"transformOrigin": `${this.state.origin.x*100}% ${this.state.origin.y*100}%`
				}}>
				<Button className="overlay__close" onClick={this.hide.bind(this)}>Cancel</Button>
				{this.props.children}
			</div>
		</div>
	}
}