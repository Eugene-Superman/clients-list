import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchClient } from '../../actions';
import { Search } from 'semantic-ui-react'

class SearchInput extends Component {
    handleChange(event){
        this.props.searchClient(event.target.value);   
    }
    render(){
        return (
            <div>
                <Search
                    type="text" 
                    onSearchChange={this.handleChange.bind(this)}
                    showNoResults={false}
                />
            </div>
        )
    }
}

const mapDispatchToProps = {
    searchClient
}

SearchInput.propTypes = {
    searchClient: PropTypes.func
};

export default connect(null, mapDispatchToProps)(SearchInput);;