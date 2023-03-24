import React, { Component } from 'react';
import '../style/InfoPanel.css';

class InfoPanel extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="InfoPanel">
                <h2>{this.props.focus.name}</h2>
                <p>{this.props.focus.address}</p>
                <p>{this.props.focus.city + ', ' + this.props.focus['postal code']}</p>
                <h3>{'Average Rating:'}</h3>
                <h1>{this.props.focus['average rating']}</h1>
                <img src={'./images/' + this.props.focus.name + '.jpg'} />
            </div>
        );
    }
}

export default InfoPanel;