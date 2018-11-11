import React, { Component } from 'react';
import { connect } from "react-redux";
import { Grid } from 'semantic-ui-react'

class MainBlock extends Component {
    render(){
        const { clientsList, clientIdentificator } = this.props;
        let selectedClient;
        for(var index in clientsList) {
            if(clientsList[index].contact.email === clientIdentificator) {
                selectedClient = clientsList[index];
                break;
            }
        }
        if(selectedClient) 
            return(
                <div>
                    <Grid>
                        <Grid.Column width={4}>
                            <img alt="" src={selectedClient.general.avatar} />
                        </Grid.Column>
                        <Grid.Column width={12}>
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
                        </Grid.Column>
                    </Grid>

                </div>
            ) 
        else
            return null; 
    }
}
const mapStateToProps = states => ({
    clientsList: states.clients,
    clientIdentificator: states.clientIdentificator
})

export default connect(mapStateToProps)(MainBlock);