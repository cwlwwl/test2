import React from "react"
import Child from "./Child";
export default class App extends React.Component {
	constructor() {
	    super()
		this.state={
			age: 10
		}
	}
	setAge(age) {
		this.setState({
			age: age
		})
	}
	render() {
		return (
			<div>
				这是App  age={this.state.age}
				<div>
				  向子组件传递了一个当前组件的方法
				</div>
				<Child appObj={this} />
			</div>
		)
	}
}