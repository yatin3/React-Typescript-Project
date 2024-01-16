import React from "react";

const TodoItem: React.FC<{text: string | undefined}> = (props) => {
    return <li>{props.text}</li>
};

export default TodoItem;