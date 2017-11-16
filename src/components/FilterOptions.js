import React, { Component } from 'react';
import $ from 'jquery';
import '../style/FilterOptions.css';
import LocationFilter from "./LocationFilter";
import RatingRangeFilter from "./RatingRangeFilter";

class FilterOptions extends Component {

    constructor(props) {
        super(props);
        let locations = this.getLocationList();
        this.state = {
            locations: locations,
            range: [1,2,3,4,5],
            order: ['Rating in ascending order', 'Rating in descending order', 1]
        }
    }

    getLocationList = () => {
        let locations = this.props.data.map(a => a.city);
        locations = locations.filter((elem, pos, arr) => {
            return arr.indexOf(elem) === pos;
        }).sort();
        return locations;
    };

    changeLocations = () => {
        let locations = this.getLocationList();
        this.setState({ location: locations });
    };

    resetData = () => {
        this.props.resetData();
        $('.Sort').html("Sort By Rating");
    };

    sortData = (e) => {
        e.preventDefault();
        if (this.props.data.length === 47) {
            this.props.reverseSort(0);
        } else {
            this.props.reverseSort(1);
        }
        let temp = 1 - this.state.order[2];
        this.state.order[2] = temp;
        $('.Sort').html(this.state.order[temp]);
    };

    resetOrder = () => {
        this.state.order[2] = 0;
        $('.Sort').html(this.state.order[0]);
    };

    render() {
        return (
            <div className="FilterOptions">
                <ul>
                    <li><div className="btn btn-default Reset"
                             onClick={this.resetData}
                             order={this.resetOrder}
                    >Reset</div></li>
                    <li><RatingRangeFilter name={'Filter By Rate Range'}
                                           data={this.props.data}
                                           option={this.state.range}
                                           filterData={this.props.filterData}
                                           changeFocus={this.props.changeFocus}
                                           changeLocations={this.changeLocations}
                                           order={this.resetOrder}
                    /></li>
                    <li><LocationFilter name={'Filter By Location'}
                                        data={this.props.data}
                                        option={this.state.locations}
                                        filterData={this.props.filterData}
                                        changeFocus={this.props.changeFocus}
                                        order={this.resetOrder}
                    /></li>
                    <li><div className="btn btn-default Sort" onClick={this.sortData}>Sort By Rating</div></li>
                </ul>
            </div>
        );
    }
}

export default FilterOptions;