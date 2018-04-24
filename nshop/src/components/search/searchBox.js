import React, { Component } from 'react';
import FontAwesomeIcon from 'react-fontawesome';

class searchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleFormSubmit(event) {
        event.preventDefault();
    }

    handleInputChange(event) {
        const SearchBoxTarget = event.target;
        const SearchBoxName = SearchBoxTarget.name;
        // const SearchBoxValue = event.target.value;

        this.setState({
            value: event.target.value
        });

        // console.log(`SearchBoxValue ${ SearchBoxValue }`);
    }

    render() {
        return (
            <form id="omniSearchBox" onSubmit={ this.handleFormSubmit }>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <button className="btn icon-btn" type="button">
                            <FontAwesomeIcon style={{color: '#C0C0C0'}} name="fas fa-ellipsis-h"/>
                        </button>
                    </div>
        
                    <input type="text" autoFocus="autofocus" placeholder="Search" onChange={this.handleInputChange}/>
                    <div className="input-group-append">
                        <button className="btn icon-btn" type="button">
                            <FontAwesomeIcon style={{color: '#ccc', margin:'10px'}} name="fal fa-search"/>
                        </button>
                    </div>
                </div>

                <div className="input-group">
                    <div className="form-group">
                        <label for="stateOption">State</label>
                        <select className="form-control form-control-sm" id="stateOption">
                            <option>Select State</option>
                        </select>
                    </div>
                </div>

                <div className="input-group">
                    <div className="form-group">
                        <label for="cityOption">City</label>
                        <select className="form-control form-control-sm" id="cityOption">
                            <option>Select City</option>
                        </select>
                    </div>
                </div>

                <div className="input-group">
                    <div className="form-group">
                        <label for="distanceOption">Distance</label>
                        <select className="form-control form-control-sm" id="distanceOption">
                            <option>Select Miles</option>
                        </select>
                    </div>
                </div>

                <div className="input-group">
                    <button type="submit" class="btn btn-primary btn-sm mb-2">Search</button>
                </div>
            </form>
        )
    }
}

export default searchForm;