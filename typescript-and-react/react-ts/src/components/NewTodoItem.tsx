import React, { PropsWithChildren, useRef, useContext } from "react";

import { TodosContext } from "../store/todos-context";

import classes from './NewTodoItem.module.css';

const NewTodoItem: React.FC<PropsWithChildren> = (props) => {
    const todosCtx = useContext(TodosContext);
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const onSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;
        
        if (enteredText.trim().length === 0) {
            return;
        }

        todosCtx.addTodo(enteredText);
    };

    return (
        <form onSubmit={onSubmitHandler} className={classes.form}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={todoTextInputRef}/>
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default NewTodoItem;