import React, { Component } from "react";

class Todo extends Component {

    render() {
        return(
            <div id={this.props.id}>
                <h3>{this.props.text}</h3>
                <button onClick={this.props.removetodo}>X</button>
            </div>
        );
    }
}
export default Todo;