import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectClient } from '../../actions';

class ClientsList extends Component {
    handleClick(index){
        this.props.selectClient(index);     
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
            <div>
                {listForDisplaying.map((element, key) => {
                    return (
                        <div key={key} className="list-item" onClick={() => this.handleClick(key)}>
                            <img alt="" src={element.general.avatar} />
                            <div>
                                <p>{element.general.firstName}</p>
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