// import { Router, Routes, Route } from "react-router-dom";
// import axios from "axios";
import React from "react";
import { Card } from "react-bootstrap";
import "./App.css";
import "./index.scss";
import AddTodo from "./components/todo/AddTodo";
import TopNav from "./components/nav/TopNav";
import TodoList from "./components/todo/TodoList";

function App() {
	return (
		<Card className="m-2 p-2">
			<Card.Title>TASK LIST:</Card.Title>
			<Card.Body>
				<div className="container">
					<div className="row">
						<div className="col-md-7 m-auto">
							<TopNav />
							<AddTodo />
							<TodoList />
						</div>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
}

export default App;
