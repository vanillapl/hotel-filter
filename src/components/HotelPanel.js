import React, { Component } from 'react';
import '../style/HotelPanel.css';
import HotelList from './HotelList';

class HotelPanel extends Component {
    renderList = () => {
        if (this.props.displayData.length === 0) {
            return <h3>{'No such hotel :-)'}</h3>
        }
        let list = this.props.displayData.map((item) => {
            return <HotelList item={item} changeFocus={this.props.changeFocus} />;
        });
        return <ul>{list}</ul>
    };

    render() {
        return (
            <div className="HotelPanel">
                {this.renderList()}
            </div>
        );
    }
}

export default HotelPanel;