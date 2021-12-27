import React from 'react';
import {Button, ButtonGroup} from "react-bootstrap";
import {filterTodo} from "../../store/actions/TodoActions";
import {connect} from "react-redux";

const TopNav = (props) => {
    let {filterTodo} = props;
    return (
       <ButtonGroup>
           <Button variant="dark" onClick={()=>filterTodo('ALL')}>All tasks</Button>
           <Button variant="warning" onClick={()=>filterTodo('ACTIVE')}>ACTIVE tasks</Button>
           <Button variant="info" onClick={()=>filterTodo('COMPLETED')}>COMPLETED tasks</Button>
       </ButtonGroup>
    )
}
// map state to props: null, map dispach to props: {filterTodo}
export default connect(null,{filterTodo})(TopNav);
// per todo actions keiciame filter todo