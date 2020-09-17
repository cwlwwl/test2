import React from "react"

export default class Child extends React.Component {
	constructor() {
	    super()
	}
	
	changeAge() {
		//父组件对象this.props.appObj
		this.props.appObj.setAge(100);
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