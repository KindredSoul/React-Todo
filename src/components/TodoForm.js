import { Box, Button, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";

const FormContainer = withStyles({
	root: {
		border: "1px solid black",
		width: "30%",
		padding: "2% 3%",
		display: "flex",
		flexFlow: "column wrap",
		justifyContent: "center",
		alignItems: "center",
	},
})(Box);

class TodoForm extends Component {
	constructor() {
		super();
		this.state = {
			task: "",
		};
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	submitTask = (e) => {
		e.preventDefault();
		this.setState({ task: "" });
		this.props.addTask(e, this.state.task);
	};

	render() {
		return (
			<FormContainer>
				<h1>Form Input</h1>
				<TextField
					name="task"
					type="text"
					value={this.state.task}
					fullWidth
					margin="dense"
					variant="outlined"
					onChange={this.handleChange}
				/>
				<Button variant="outlined" onClick={this.submitTask}>
					Add Task
				</Button>
			</FormContainer>
		);
	}
}

export default TodoForm;
