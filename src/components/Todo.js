import { withStyles } from "@material-ui/styles";
import { Card } from "@material-ui/core";
import React from "react";

const ToDoCard = withStyles({
	root: {
		border: "1px solid black",
		margin: [[20]],
		padding: [[0, 10]],
		textAlign: "center",
	},
})(Card);

const ToDo = ({ task, toggleTask }) => {
	return (
		<ToDoCard
			className={`task ${task.completed ? "completed" : ""}`}
			onClick={() => toggleTask(task.id)}>
			<h2>{task.task} </h2>
		</ToDoCard>
	);
};

export default ToDo;
