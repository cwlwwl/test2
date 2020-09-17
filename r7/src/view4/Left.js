//Left.js
import React from "react";
export default class Left extends React.Component {
  constructor(props) {
    super();
	//保存数据
	this.state = {
	  content: "content1 content"
	};
  }
  develop() {
	 this.setState({
  		 content: this.state.content=="content1 content" ? "content2 content" : "content1 content"
  	 })
  }
  change(no) {
	 this.props.app.change(no);
  }
  render() {
    return (
     <div className="left">
     	<div className="head" onClick={this.develop.bind(this)}>初等教育</div>
     	<div className={this.state.content}>
			<div onClick={this.change.bind(this, "one")}>小学</div>
			<div onClick={this.change.bind(this, "two")}>初中</div>
			<div onClick={this.change.bind(this, "three")}>高中</div>
     	</div>				
     </div>
    );
  }
}