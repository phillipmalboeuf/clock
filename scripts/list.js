

export const List = props => {
	return <ol className={`list--boxes ${props.className}`}>{props.children}</ol>
}

export const ListItem = props => {
	return <li className={`grid grid--spaced grid--middle${props.focused ? " li--focus" : "" }${props.clicked ? " li--tall" : "" }${props.hasNext ? " li--has_next" : "" }`}
			onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
			{props.children}
		</li>
}