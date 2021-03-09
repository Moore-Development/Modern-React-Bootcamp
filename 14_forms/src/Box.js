import React, { Component } from "react";

class Box extends Component {

    render() {

        return (
            <div className="Box" id={this.props.id} style={{
                backgroundColor: this.props.backgroundColor,
                width: this.props.width,
                height: this.props.height,
                
            }}>
                <button onClick={this.props.removeBox}>Remove</button>
            </div>
        );
    }
}
export default Box;