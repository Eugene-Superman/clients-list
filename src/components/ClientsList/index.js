import React, { Component } from 'react';

class ClientsList extends Component {
    render(){
        return (
            <div>
                {this.props.clients.map((element, key) => {
                    return (
                        <div key={key} className="list-item">
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

export default ClientsList;