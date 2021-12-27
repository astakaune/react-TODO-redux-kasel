import React from "react";
import { Card, Button, ListGroupItem } from "react-bootstrap";
import { UncontrolledCollapse } from "reactstrap";

const TodoItem = ({ todo, remove, mark }) => (
	<ListGroupItem>
		<div className="row">
			<div className="col-md-7">
				<span className="d-flex" id={`toggler${todo.id}`}>
					{/* patikriname. jei todo atliktas, jis turi buti nubrauktas */}
					{todo.isComplete ? (
						<p>
							<strike>{todo.title}</strike>
						</p>
					) : (
						<p>{todo.title}</p>
					)}
				</span>
				<UncontrolledCollapse toggler={`#toggler${todo.id}`}>{todo.description}</UncontrolledCollapse>
			</div>
		</div>
	</ListGroupItem>
);

export default TodoItem;
