import React, { Component } from 'react'
import InformationsService from '../services/InformationsService';

class UpdateInformationComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            infoName: '',
            infoDescription: ''
        }
        this.changeInfoNameHandler = this.changeInfoNameHandler.bind(this);
        this.changeInfoDescriptionHandler = this.changeInfoDescriptionHandler.bind(this);
        this.updateInformation = this.updateInformation.bind(this);
    }

    componentDidMount(){
        InformationsService.getinformationById(this.state.id).then( (res) =>{
            let info = res.data;
            this.setState({infoName: info.infoName,
                infoDescription : info.infoDescription
            });
        });

    }

    updateInformation = (e) => {
        e.preventDefault();
        let info = {infoName: this.state.infoName, infoDescription: this.state.infoDescription};
        console.log('employee => ' + JSON.stringify(info));
        console.log('id => ' + JSON.stringify(this.state.id));
        InformationsService.updateinformation(info, this.state.id).then( res => {
            this.props.history.push('/Informations');
        });
    }
    
    changeInfoNameHandler= (event) => {
        this.setState({infoName: event.target.value});
    }

    changeInfoDescriptionHandler= (event) => {
        this.setState({infoDescription: event.target.value});
    }

    cancel(){
        this.props.history.push('/Informations');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Employee</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="infoName" className="form-control" 
                                                value={this.state.infoName} onChange={this.changeInfoNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="infoDescription" className="form-control" 
                                                value={this.state.infoDescription} onChange={this.changeInfoDescriptionHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateInformation}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateInformationComponent
