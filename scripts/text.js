

export const Header = props => {
	if (props.big) {
		return <h1>{props.children}</h1>
	} else {
		return <h2>{props.children}</h2>
	}
}

export const Paragraph = props => {
	return <p className={`${props.highlight ? "highlight" : ""}${props.className ? ` ${props.className}` : ""}`}>{props.children}</p>
}

export const Link = props => {
	return <a href={props.url} target={props.url && props.url.indexOf("http") >= 0 ? "_blank" : undefined}
		className={`${props.highlight ? "a--highlight" : ""}${props.topleft ? "a--top_left" : ""}${props.className ? ` ${props.className}` : ""}`}
		onClick={props.onClick}
		onMouseEnter={props.onMouseEnter}
		onMouseLeave={props.onMouseLeave}>{props.children}</a>
}