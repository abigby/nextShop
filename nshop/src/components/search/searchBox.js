import React, { Component } from 'react';
import FontAwesomeIcon from 'react-fontawesome';

class searchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        };
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleInputChange(event) {
        const SearchBoxTarget = event.target;
        const SearchBoxName = SearchBoxTarget.name;
        const SearchBoxValue = event.target.value;

        this.setState({
            [SearchBoxName]: SearchBoxValue
        });
    }

    render() {
        return (
            <form id="omniSearchBox" onSubmit={ this.handleSubmit }>
                <div className="input-group">
                    <div className="input-group-prepend" style={{margin:'10px'}}>
                        <FontAwesomeIcon style={{color: '#C0C0C0'}} name="fas fa-ellipsis-h"/>
                    </div>
                    <input type="text" autoFocus="autofocus" placeholder="Search"/>
                    <div className="input-group-append">
                    <FontAwesomeIcon style={{color: '#ccc', margin:'10px'}} name="fal fa-search"/>
                    </div>
                </div>
            </form>
        )
    }
}

export default searchForm;