import React, { Component } from "react";
import {v4 as uuid} from 'uuid';

class NewTodoForm extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            todoText: ''
        };
    }

    handleSubmit(evt) {
        evt.preventDefault();

        this.props.newTodo({
            text: this.state.todoText,
            id: uuid()
        });

        this.setState({
            todoText: ''
        });
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label forhtml="todo">Todo: </label>
                    <input type="text" name="todoText" value={this.state.todoText}
                        onChange={this.handleChange}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}
export default NewTodoForm;