import React, { useState } from "react";
import { Button, Modal, Form, FormGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { addTodo } from "../../store/actions/TodoActions";

const AddTodo = () => {
	const [modal, setModal] = useState(false);
	const [task, setTask] = useState({
		title: "",
		description: "",
	});
	const handleClose = () => setModal(false);
	const handleShow = () => setModal(true);
	return (
		<>
			<Button variant="danger" onClick={handleShow}>
				New task
			</Button>
			<Modal show={modal} onHide={handleClose}>
				<Modal.Header>Create new task</Modal.Header>
				<Form>
					<Modal.Body>
						<FormGroup>
							<Form.Label for="title">Name</Form.Label>
							<Form.Control type="text" value={task.title} name="title" id="title" placeholder="Enter the name"></Form.Control>
						</FormGroup>
						<FormGroup>
							<Form.Label for="title">Description</Form.Label>
							<Form.Control type="text" value={task.description} name="title" id="title" placeholder="Enter description"></Form.Control>
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

export default AddTodo;
