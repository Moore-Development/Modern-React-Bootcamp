import React, { Component } from "react";
import NewTodoForm from './NewTodoForm.js';
import Todo from './Todo.js';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.newTodo = this.newTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.state = {
            todos: []
        }
    }

    newTodo(todo) {
        this.setState(state => ({
            todos: [...state.todos, todo]
        }));
    }

    removeTodo(evt) {
        this.setState(state => ({
            todos: state.todos.filter(todo => todo.id !== evt.target.parentNode.id)
        }));
    }

    render() {
        let todoElements = this.state.todos.map(todo => {
            return <Todo 
                key={todo.id} 
                id={todo.id}
                removetodo={this.removeTodo} 
                text={todo.text} 
            />;
        });

        return(
            <div>
                {todoElements}
                <NewTodoForm newTodo={this.newTodo}/>
            </div>
        );
    }
}
export default TodoList;