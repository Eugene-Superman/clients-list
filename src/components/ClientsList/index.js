import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectClient } from '../../actions';
import { Image } from 'semantic-ui-react'

class ClientsList extends Component {
    handleClick(userIdentification){
        this.props.selectClient(userIdentification);     
    }
    render(){
        const { searchQuery, clients } = this.props;
        let listForDisplaying;
        if(searchQuery) {
            listForDisplaying = clients.filter((client)=> {
                let coincidence = false;
                for (let key in client) {                 
                    let details = client[key];
                    if(coincidence) 
                        break;
                    for(let field in details) {
                        let clientInformation = details[field].toLowerCase();
                        if (clientInformation.includes(searchQuery.toLowerCase()) && field !== "avatar") {
                            coincidence = true;
                            break;
                        }
                    }
                }
                return coincidence;
            })
        } else {
            listForDisplaying = clients;
        }
        return (
            <div className="list-container">
                {listForDisplaying.map((element, key) => {
                    return (
                        <div key={key} className="list-item" onClick={() => this.handleClick(element.contact.email)}>
                            <Image 
                            alt="" src={element.general.avatar} 
                            size="mini" rounded={true} avatar={true}/>
                            <div>
                                <b>{element.general.firstName}</b>
                                <p>{element.job.title}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    searchQuery: state.clientToSearch
})

const mapDispatchToProps = {
    selectClient
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientsList);;