import { Box, Button, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";

const FormContainer = withStyles({
	root: {
		border: "1px solid black",
	},
})(Box);

class TodoForm extends Component {
	constructor() {
		super();
		this.state = {
			value: "",
		};
	}
	render() {
		return (
			<FormContainer>
				<h1>Form Input</h1>
				<TextField
					name="task"
					type="text"
					fullWidth
					margin="dense"
					variant="outlined"
				/>
				<Button variant="outlined">Add Task</Button>
			</FormContainer>
		);
	}
}

export default TodoForm;
