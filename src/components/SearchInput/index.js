import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchClient } from '../../actions';

class SearchInput extends Component {
    handleChange(event){
        this.props.searchClient(event.target.value);   
    }
    render(){
        return (
            <div>
                <input type="text" onChange={this.handleChange.bind(this)} />
            </div>
        )
    }
}

const mapDispatchToProps = {
    searchClient
}

export default connect(null, mapDispatchToProps)(SearchInput);;