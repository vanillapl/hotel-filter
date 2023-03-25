import React, { Component } from 'react';
import $ from 'jquery';
import HotelPanel from './components/HotelPanel';
import FilterOptions from './components/FilterOptions';
import './style/App.css';
import data from "./sourceData.json";
import InfoPanel from "./components/InfoPanel";

class App extends Component {
    constructor() {
        super();
        this.state = {
            data: data,
            displayData: data,
            focus: data[0],
            sorted: false
        }
    }

    filterData = (result) => {
        this.setState({ displayData: result });
    };

    changeFocus = (item) => {
        for (let i = 0; i < this.state.data.length; i++) {
            if (this.state.data[i].name === item) {
                this.setState({ focus: this.state.data[i] });
                break;
            }
        }
    };

    resetData = () => {
        $('#Rating').html('Filter By Rate Range');
        $('#Location').html('Filter By Location');
        $('#Rating').prop("disabled", false);
        $('#Location').prop("disabled", false);
        data.sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
        this.setState({
            data: data,
            displayData: data,
            focus: data[0],
            sorted: false
        });
    };

    reverseSort = (id) => {
        let temp = this.state.displayData;
        if (id === 0 && this.state.sorted === false) {
            temp.sort((a, b) => {
                return a['average rating'] - b['average rating'];
            });
            this.state.sorted = true;
        } else {
            temp.reverse();
        }
        this.setState({
            displayData: temp,
            focus: temp[0]
        });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Hotels in California</h1>
                </header>
                <FilterOptions data={this.state.displayData}
                    changeFocus={this.changeFocus}
                    filterData={this.filterData}
                    resetData={this.resetData}
                    reverseSort={this.reverseSort} />
                <div className="leftPanel"></div>
                <HotelPanel changeFocus={this.changeFocus} displayData={this.state.displayData} />
                <InfoPanel focus={this.state.focus} />
                <div className="rightPanel"></div>
                <div className="footer"><p>Developed By: Xuenan Li</p></div>
            </div>
        );
    }
}

export default App;