import React from "react";
import { ListGroup } from "react-bootstrap";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import { markDone, deleteTodo } from "../../store/actions/TodoActions";
import filterTodo from "../../utilities/filterTodo";

// cia viska sujungiame i bendra visuma

const TodoList = (props) => {
	let { todos, markDone, status, deleteTodo } = props;
	if (!todos.length) return <p>No tasks</p>;
	const filterTodos = filterTodo(todos, status);
	return (
		<ListGroup>
			{filterTodos.map((todo) => (
				<TodoItem todo={todo} key={todo.id} mark={markDone} remove={deleteTodo} />
			))}
		</ListGroup>
	);
};

const mapDispatchToProps = state =>({
    todos:state.todos.todos,
    status:state.todos.filter
})

export default connect(mapDispatchToProps, {markDone, deleteTodo})(TodoList);
