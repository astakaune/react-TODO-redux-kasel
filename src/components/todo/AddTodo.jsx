import React, { useState } from "react";
import { Card, Button, Modal, Form, FormGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { addTodo } from "../../store/actions/TodoActions";

const AddTodo = (props) => {
	const [modal, setModal] = useState(false);
	const [task, setTask] = useState({
		title: "",
		description: "",
	});
	const handleClose = () => setModal(false);
	const handleShow = () => setModal(true);

	const handleChange = (e) => {
		setTask({
			...task,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const id = parseInt(Date.now());
		const todo = {
			...task,
			isComplete: false,
			id: id,
		};
		props.addTodo(todo)
		setTask({})
		setModal(false)
	};

console.log(task)

	return (
		<>
			<Card className="p-1">
				<Button variant="warning" onClick={handleShow}>
					ADD NEW
				</Button>
			</Card>
			<Modal show={modal} onHide={handleClose}>
				<Modal.Header>Create new task</Modal.Header>
				<Form onSubmit={handleSubmit}>
					<Modal.Body>
						<FormGroup>
							<Form.Label for="title">Name</Form.Label>
							<Form.Control type="text" value={task.title} name="title" id="title" onChange={handleChange} placeholder="Enter the name"></Form.Control>
						</FormGroup>
						<FormGroup>
							<Form.Label for="title">Description</Form.Label>
							<Form.Control type="textarea" value={task.description} name="description" id="title" placeholder="Enter description" onChange={handleChange}></Form.Control>
						</FormGroup>
					</Modal.Body>
					<Modal.Footer>
						<Button type="submit">Add</Button>
						<Button onClick={handleClose}>Close</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		</>
	);
};

export default connect(null,{addTodo})(AddTodo);
