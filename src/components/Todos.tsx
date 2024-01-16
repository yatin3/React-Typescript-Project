import React from "react";
import Todo from "../models/todo";
import classes from "./Todos.module.css";

import TodoItem from "./TodoItem";

const Todos: React.FC<{items: Todo[]}> = (props) => {
   return <ul className={classes.todos}>
     {props.items.map(item => <TodoItem key={item.id} text={item.text}/>)}
   </ul>
}

export default Todos;