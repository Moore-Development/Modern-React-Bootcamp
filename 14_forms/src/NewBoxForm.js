import React, { Component } from "react";
import {v4 as uuid} from 'uuid';

class NewBoxForm extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            backgroundColor: '',
            width: 0,
            height: 0
        }
    }

    handleSubmit(evt) {
        evt.preventDefault();

        this.props.addBox({
            backgroundColor: this.state.backgroundColor,
            width: this.state.width + "px",
            height: this.state.height + "px",
            uuid: uuid()
        });

        this.setState({
            backgroundColor: '',
            width: 0,
            height: 0
        });
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    render() {
        return (
            <div className="NewBoxForm">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="backgroundColor">Box Background Color: </label>
                    <input type="text" name="backgroundColor" value={this.state.backgroundColor}
                        onChange={this.handleChange}/>
                    <label htmlFor="width">Box Width: </label>
                    <input type="text" name="width" value={this.state.width}
                        onChange={this.handleChange}/>
                    <label htmlFor="height">Box Height: </label>
                    <input type="text" name="height" value={this.state.height}
                        onChange={this.handleChange}/>
                    <button type="submit">Create Box</button>
                </form>
            </div>
        );
    }
}
export default NewBoxForm;