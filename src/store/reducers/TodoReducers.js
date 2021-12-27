import { ADD_TODO, REMOVE_TODO, FILTER_TODO, MARK_DONE } from "../actions/types";

const init = {
	todos: [
		//1 task. Keys:
		{
			title: "Test1",
			description: "Very good task1",
			isComplete: false,
			id: 1234567,
		},
		//2 task. Keys:
		{
			title: "Test2",
			description: "Very good task2",
			isComplete: true,
			id: 1234568,
		},
	],
	filter: "ALL",
};

//istrina
const removeTodo = (todos, id) => {
	return (todos = todos.filter((todo) => todo.id !== id));
};

const Todos = (state = init, action) => {
	console.log(state.todos);
	switch (action.type) {
		case ADD_TODO: {
			let todos = [...state.todos];
			todos = [action.payload, ...todos];
			return {
				...state,
				todos,
			};
		}
		case MARK_DONE: {
			let todos = [...state.todos];
			todos = todos.map((todo) => {
				if (todo.id === action.payload) {
					todo.isComplete = !todo.isComplete;
				}
				return todo;
			});
			return {
				...state,
				todos,
			};
		}
		case FILTER_TODO: {
			return {
				...state,
				filter: action.payload,
			};
		}
		case REMOVE_TODO: {
			const todos = removeTodo(state.todos, action.payload);
			return {
				...state,
				todos,
			};
		}
		default:
			return state;
	}
};

export default Todos;
