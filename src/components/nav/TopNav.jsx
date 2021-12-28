import React from "react";
import { Button, ButtonGroup, Card } from "react-bootstrap";
import { filterTodo } from "../../store/actions/TodoActions";
import { connect } from "react-redux";

const TopNav = (props) => {
	let { filterTodo } = props;
	return (
		<Card>
			<ButtonGroup>
				<Button className="m-1" variant="dark" onClick={() => filterTodo("ALL")}>
					ALL
				</Button>
				<Button className="m-1" variant="danger" onClick={() => filterTodo("ACTIVE")}>
					ACTIVE
				</Button>
				<Button className="m-1" variant="info" onClick={() => filterTodo("COMPLETED")}>
					COMPLETED
				</Button>
			</ButtonGroup>
		</Card>
	);
};
// map state to props: null, map dispach to props: {filterTodo}
export default connect(null, { filterTodo })(TopNav);
// per todo actions keiciame filter todo
