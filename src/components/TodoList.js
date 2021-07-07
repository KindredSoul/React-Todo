import { Box, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
// your components will all go in this `component` directory.
import React from "react";
import ToDo from "./Todo";

const ToDoWrapper = withStyles({
	root: {
		border: "1px solid black",
	},
})(Box);

const ToDoList = ({ tasks, toggleTask, clearTask }) => {
	return (
		<ToDoWrapper>
			<div>
				{tasks.map((task) => (
					<ToDo key={task.id} task={task} toggleTask={toggleTask} />
				))}
			</div>
			<Button variant="outlined" color="secondary" onClick={clearTask}>
				Clear Completed Task
			</Button>
		</ToDoWrapper>
	);
};

export default ToDoList;
