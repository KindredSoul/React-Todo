import { withStyles } from "@material-ui/styles";
import { Card } from "@material-ui/core";
import React from "react";

const ToDoCard = withStyles({
	root: {
		border: "1px solid black",
	},
})(Card);

const ToDo = ({ task, completed, toggleTask }) => {
	return (
		<ToDoCard
			className={`task ${completed ? "completed" : ""}`}
			onClick={() => toggleTask()}>
			<h2>{task} </h2>
		</ToDoCard>
	);
};

export default ToDo;
