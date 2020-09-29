import { AppBar, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React from "react";
import TodoForm from "./components/TodoForm";
import ToDoList from "./components/TodoList";

const MainContainer = withStyles({
	root: {
		border: "1px solid black",
		display: "flex",
		flexFlow: "column wrap",
		justifyContent: "space-around",
		alignItems: "center",
		paddingTop: "100px",
		"& .MuiAppBar-root": {
			textAlign: "center",
		},
	},
})(Box);

const taskList = [
	{
		task: "Finish other tasks",
		id: 0,
		completed: false,
	},
];

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	constructor() {
		super();
		this.state = {
			taskList,
		};
	}

	addTask = (e, task) => {
		e.preventDefault();
		const newTask = {
			task: task,
			id: Date.now(),
			completed: false,
		};
		this.setState({
			taskList: [...this.state.taskList, newTask],
		});
	};

	toggleTask = (id) => {
		console.log(id);
		this.setState({
			taskList: this.state.taskList.map((task) => {
				return id === task.id ? { ...task, completed: !task.completed } : task;
			}),
		});
	};

	clearTask = (e) => {
		e.preventDefault();
		this.setState({
			taskList: this.state.taskList.filter((task) => !task.completed),
		});
	};

	render() {
		return (
			<MainContainer>
				<AppBar>
					<h1>Welcome to your Todo App!</h1>
				</AppBar>
				<TodoForm addTask={this.addTask} />
				<ToDoList
					toggleTask={this.toggleTask}
					clearTask={this.clearTask}
					tasks={this.state.taskList}
				/>
			</MainContainer>
		);
	}
}

export default App;
