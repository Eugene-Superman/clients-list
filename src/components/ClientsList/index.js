import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectClient } from '../../actions';

class ClientsList extends Component {
    selectClient(index){
        this.props.selectClient(index);     
    }
    render(){
        return (
            <div>
                {this.props.clients.map((element, key) => {
                    return (
                        <div key={key} className="list-item" onClick={() => this.selectClient(key)}>
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
    index: state.index
})

const mapDispatchToProps = {
    selectClient
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientsList);;