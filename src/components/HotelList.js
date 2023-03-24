import React, { Component } from 'react';
import '../style/HotelList.css';

class HotelList extends Component {

    constructor(props) {
        super(props);
    }

    handleClick = (e) => {
        e.preventDefault();
        this.props.changeFocus(e.target.id);
    }

    render() {
        return (
            <div className="HotelList btn btn-info btn-primary" onClick={this.handleClick}>
                <div className="panel-body" id={this.props.item.name}>
                    {this.props.item.name}
                </div>
            </div>
        );
    }
}

export default HotelList;