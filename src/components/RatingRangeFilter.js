import React, { Component } from 'react';
import $ from 'jquery';
import '../style/dropdown.css';

class RatingRangeFilter extends Component {

    constructor(props) {
        super(props);
    }

    renderList = () => {
        let list = this.props.option.map((name) => {
            return <li key={name}><a onClick={this.filterRatingRange} id={name}>{name-1 + ' - ' + name}</a></li>;
        });
        return <ul className="dropdown-menu">{list}</ul>
    };

    filterRatingRange = (e) => {
        e.preventDefault();
        $('#Rating').html(e.target.id-1.0 + ' - ' + e.target.id);
        $('#Rating').prop("disabled",true);
        let result = this.props.data.filter((item) => {
            return item['average rating'] >= (e.target.id) * 1.0 - 1.0 && item['average rating'] <= e.target.id * 1.0;
        });
        result.sort((a, b) => {
            return a['average rating'] - b['average rating'];
        });
        this.props.filterData(result);
        this.props.changeLocations();
        this.props.order();
        if (result.length > 0) {
            this.props.changeFocus(result[0].name);
        }
    };

    render() {
        return (
            <div className="Dropdown">
                <div className="btn-group Filter">
                    <button id="Rating" className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        {this.props.name}
                        <span className="caret"></span>
                    </button>
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

export default RatingRangeFilter;