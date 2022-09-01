import React, { PropsWithChildren, useContext } from "react";

import Todo from "../models/todo";
import classes from './TodoItem.module.css';

import { TodosContext } from "./../store/todos-context";

type TodoProps = {
    todo: Todo
}

const TodoItem: React.FC<PropsWithChildren<TodoProps>> = (props) => {
    const todosCtx = useContext(TodosContext);

    const { id, text } = props.todo;
    return <li onClick={() => {todosCtx.removeTodo(id)}} className={classes.item} key={id}>{text}</li>
};

export default TodoItem;