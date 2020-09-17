//App.js
import React from "react";
import "./App.css";
export default class App extends React.Component {
  constructor() {
    super();
    //保存数据
    this.state = {
		content: "content1 content"
    };
  }
  develop() {
	this.setState({
	   content: this.state.content=="content1 content"?"content2 content":"content1 content"
	})
  }
  change(no) {
	   let one = document.querySelector(".one");
	   let two = document.querySelector(".two");
	   let three = document.querySelector(".three");
	   one.style.display="none";
	   two.style.display="none";
	   three.style.display="none";
	   if(no=="one") {
		  one.style.display="block";
	   }else if(no=="two") {
		  two.style.display="block";
	   }else if(no=="three") {
		  three.style.display="block";
	   }
  }
  render() {
    return (
      <div className="box">
        <div className="top">
		</div>
		<div className="bottom">
			<div className="left">
				<div onClick={this.develop.bind(this)} className="head">初等教育</div>
				<div className={this.state.content}>
					<div onClick={this.change.bind(this, "one")}>小学</div>
					<div onClick={this.change.bind(this, "two")}>初学</div>
					<div onClick={this.change.bind(this, "three")}>高学</div>
				</div>				
			</div>
			<div className="right">
				<div className="one">one</div>
				<div className="two">two</div>
				<div className="three">three</div>
			</div>
		</div>
      </div>
    );
  }
}