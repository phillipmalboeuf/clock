

export const Grid = props => {
	return <div className={`grid${props.center ? ' grid--center' : ''}${props.middle ? ' grid--middle' : ''}${props.full ? ' grid--full' : ''}${props.spaced ? ' grid--spaced' : ''}${props.guttered ? ' grid--guttered' : ''}${props.grow ? ' grid--grow' : ''}`}>
		{props.children}
	</div>
}

export const Column = props => {
	return <div className={`col${props.full ? ' col--14of14' : ''}${props.half ? ' col--7of14' : ''}${props.seventh ? ' col--2of14' : ''}${props.className ? ` ${props.className}` : ''}`}>
		{props.children}
	</div>
}