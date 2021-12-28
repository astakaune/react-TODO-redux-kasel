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
				<div className="col-md-5">
                <div className="ml-auto">
                    <Button variant="outline-danger" onClick={() => remove(todo.id)} style={{marginRight:'10px'}} className="ml-auto">Remove</Button>
                    
					<Button variant="outline-success" onClick={() => mark(todo.id)} className="mr-auto">End</Button>
                </div>
            </div>
			</div>
		</div>
	</ListGroupItem>
);

export default TodoItem;
