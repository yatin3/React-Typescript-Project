class Todo{
  id: string;
  text: string | undefined;

  constructor(todoText: string | undefined){
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export default Todo;