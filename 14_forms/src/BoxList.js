import React, { Component } from "react";
import Box from './Box.js';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {

    constructor(props) {
        super(props);
        this.addBox = this.addBox.bind(this);
        this.handleRemove = this.handleRemove.bind(this);

        this.state = {
            boxes: []
        }
    }

    addBox(box) {
        this.setState(state => ({
            boxes: [...state.boxes, box]
        }));
    }

    handleRemove(evt) {
        this.setState(state => ({
            boxes: state.boxes.filter(box => box.uuid !== evt.target.parentNode.id)
        }));
    }

    render() {

        let boxes = this.state.boxes.map(boxObj => {
            return <Box 
                backgroundColor={boxObj.backgroundColor}
                width={boxObj.width}
                height={boxObj.height}
                removeBox={this.handleRemove}
                key={boxObj.uuid}
                id={boxObj.uuid}
            />
        });

        return (
            <div className="BoxList">
                <br></br>
                <NewBoxForm addBox={this.addBox} />
                <br></br>
                {boxes}
            </div>
        );
    }
}
export default BoxList;