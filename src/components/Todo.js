import { makeStyles } from "@material-ui/styles";
import { Card } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
	root: {
		border: "1px solid black",
		margin: [[20]],
		padding: [[0, 10]],
		textAlign: "center",
	},
	completed: {
		textDecoration: "line-through",
	},
});

const ToDo = ({ task, toggleTask }) => {
	const { root, completed } = useStyles();
	return (
		<Card
			className={`task ${root} ${task.completed ? completed : ""}`}
			onClick={() => toggleTask(task.id)}>
			<h2>{task.task} </h2>
		</Card>
	);
};

export default ToDo;
