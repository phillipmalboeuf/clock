

export const Button = props => {
	
	return <button
		className={`${props.underline ? "button--underline": ""}${props.tight ? "button--tight": ""}${props.full ? " button--full": ""}${props.className ? ` ${props.className}` : ""}`}
		style={props.style}
		onClick={(e)=> {
			e.currentTarget.blur()
			if (props.onClick) {props.onClick(e)}
		}}>{props.children}</button>
}