import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addClients } from '../../actions';

import SearchInput from '../../components/SearchInput';
import ClientsList from '../../components/ClientsList';

class Sidebar extends Component {
    componentDidMount() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'clients.json', true);
        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) {
                return false
            }
            if (xhr.status !== 200 ) {
                console.log(xhr.status + ': ' + xhr.statusText)
            } else {
                var clientsData = JSON.parse(xhr.responseText);
                this.props.addClients(clientsData);
            }
        }
    }

    render(){
        const { clients } = this.props;
        return (
            <div>
                <SearchInput />
                <ClientsList clients={clients} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    clients: state.clients
})

const mapDispatchToProps = {
    addClients
}

Sidebar.propTypes = {
    addClients: PropTypes.func,
    clients: PropTypes.arrayOf(PropTypes.object)
};


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);