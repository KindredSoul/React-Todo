// your components will all go in this `component` directory.
import React, { Component } from "react";

class ToDoList extends Component {
	constructor() {
		super();
		this.state = [""];
	}

	render() {
		return (
			<div>
				<h1>Todos go here</h1>
			</div>
		);
	}
}

export default ToDoList;
