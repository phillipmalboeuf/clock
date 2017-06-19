


export const Input = props => {
	return <div className={`small_bottom ${props.type == "hidden" ? "hide" : props.type == "checkbox" ? "grid" : null}`}>
		{props.label && <label htmlFor={props.name}>{props.label}{props.optional ? " (Optional)" : "" }</label>}
		<input name={props.name} id={props.name} 
			type={props.type ? props.type : 'text'}
			defaultValue={props.type != "checkbox" ? props.value : null}
			defaultChecked={props.type == "checkbox" ? props.value : null}
			placeholder={props.placeholder}
			required={props.optional ? false : props.type == "checkbox" ? false : true}
			autoFocus={props.autofocus ? true : false }
			onChange={props.onChange} />
	</div>
}
