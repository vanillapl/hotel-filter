import React, { Component } from 'react';
import $ from 'jquery';
import '../style/dropdown.css';

class LocationFilter extends Component {
    renderList = () => {
        let list = this.props.option.map((name) => {
            return <li key={name}><a onClick={this.filterLocation} id={name}>{name}</a></li>;
        });
        return <ul className="dropdown-menu">{list}</ul>
    };

    filterLocation = (e) => {
        e.preventDefault();
        $('#Location').html(e.target.id);
        $('#Location').prop("disabled", true);
        let result = this.props.data.filter((item) => {
            return item.city === e.target.id;
        });
        this.props.filterData(result);
        this.props.order();
        if (result.length > 0) {
            this.props.changeFocus(result[0].name);
        }
    };

    render() {
        return (
            <div className="Dropdown">
                <div className="btn-group Filter">
                    <button id="Location" className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        {this.props.name}
                        <span className="caret"></span>
                    </button>
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

export default LocationFilter;