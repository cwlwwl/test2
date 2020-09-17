//App.js
import React from "react";
import "./App.css";
import Left from "./Left";
import Right from "./Right";

export default class App extends React.Component {
    constructor() {
		super();
		this.state={flag:""	}
    }
  change(no) {
	   this.setState({flag:no })
  }
  render() {
    return (
      <div className="box">
        <div className="top">
			
		</div>
		<div className="bottom">
			<Left app={this}/>
			<Right flag={this.state.flag}/>
		</div>
      </div>
    );
  }
}