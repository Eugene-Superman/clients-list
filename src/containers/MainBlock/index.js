import React, { Component } from 'react';
import { connect } from "react-redux";

class MainBlock extends Component {
    render(){
        const { clientsList, clientIndex } = this.props;
        let selectedClient = clientsList[clientIndex];
        if(selectedClient) 
            return(
                <div>
                    <img alt="" src={selectedClient.general.avatar} />
                    <div className="client-details">
                        <h2>{selectedClient.general.firstName}</h2>
                        <p>{selectedClient.job.title} - {selectedClient.job.company}</p>
                        <h4>Adress information</h4>
                        <p>Country: {selectedClient.address.country}<br />
                        City: {selectedClient.address.city}<br />
                        Street: {selectedClient.address.street}<br />
                        Zip Code: {selectedClient.address.zipCode}</p>
                        <h4>Contacts</h4>
                        <p>Email: {selectedClient.contact.email}<br />
                        Phone Number: {selectedClient.contact.phone}</p>
                    </div>

                </div>
            ) 
        else
            return null; 
    }
}
const mapStateToProps = states => ({
    clientsList: states.clients,
    clientIndex: states.clientIndex
})

export default connect(mapStateToProps)(MainBlock);