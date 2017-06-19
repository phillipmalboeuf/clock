

import { Grid } from './grid.js';


export class Form extends React.Component {

	onSubmit(e) {
		e.preventDefault()
		this.props.onSubmit(e, this.state)
	}

	onChange(e) {
		let value = e.currentTarget.value
		if (e.currentTarget.type == "checkbox") {
			value = e.currentTarget.checked
		}

		this.setState({
			[e.currentTarget.name]: value
		})
	}


	render() {
		return <form onSubmit={this.onSubmit.bind(this)}>
			{React.Children.map(this.props.children, (child) => React.cloneElement(child, {onChange: this.onChange.bind(this)}))}
		</form>
	}
}

