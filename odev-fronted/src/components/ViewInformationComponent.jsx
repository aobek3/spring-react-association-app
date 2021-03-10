import React, { Component } from 'react'
import InformationsService from '../services/InformationsService'

class ViewInformationComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            information: {}
        }
    }

    componentDidMount(){
        InformationsService.getinformationById(this.state.id).then( res => {
            this.setState({information: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Haber Detayı</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label>Haber Başlığı: </label>
                            <div> { this.state.information.infoName }</div>
                        </div>
                        <div className = "row">
                            <label>Haber Açıklaması: </label>
                            <div>{this.state.information.infoDescription }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewInformationComponent
