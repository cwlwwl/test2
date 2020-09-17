import React from "react"

export default class Child extends React.Component {
	constructor() {
	    super()
	}
	
	changeAge() {
		this.props.setAge.bind(this.props.app)(30);
	}
	
	render() {
		return (
			<div>
				这是Child
				<button onClick={this.changeAge.bind(this)}>调用父组件方法</button>
			</div>
		)
	}
}