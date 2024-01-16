import React, { useRef } from "react";
import classes from './NewTodo.module.css'

const NewTodo: React.FC<{ onAddTodo: (text: string | undefined)=> void}> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submithandler = (event: React.FormEvent) => {
       event.preventDefault();
       
       const enteredText = todoTextInputRef.current?.value;
       
       if(enteredText?.trim().length === 0){
        return;
       }

       props.onAddTodo(enteredText);

    };

    return <form onSubmit={submithandler} className={classes.form}>
        <label htmlFor="text">Todo text</label>
        <input type="text" id="text" ref={todoTextInputRef}/>
        <button>Add Todo</button>
    </form>
};

export default NewTodo;