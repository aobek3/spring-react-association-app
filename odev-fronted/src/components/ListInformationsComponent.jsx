import React, { Component } from 'react'
import InformationsService from '../services/InformationsService'
import AdminControlComponents from './AdminControlComponents'

class ListInformationsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                informations: []
        }
        this.adInformations = this.adInformations.bind(this);
        this.editInformation = this.editInformation.bind(this);
        this.deleteinformation = this.deleteinformation.bind(this);
    }

    deleteinformation(id){
        InformationsService.deleteinformation(id).then( res => {
            this.setState({informations: this.state.informations.filter(informations => informations.id !== id)});
        });
    }
    editInformation(id){
        this.props.history.push(`/add-information/${id}`);
    }

    componentDidMount(){
        InformationsService.getinformations().then((res) => {
            this.setState({ informations: res.data});
        });
    }

    adInformations(){
        this.props.history.push('/add-information/_add');
    }

    render() {
        return (
            <div>
                <AdminControlComponents/>
                 <h2 className="text-center" style={{marginTop:'12px'}}>Haberler</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.adInformations} >Haber Ekle</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Haber Adı</th>
                                    <th > Haber Açıklaması</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.informations.map(
                                        information => 
                                        <tr key = {information.id}>
                                             <td> { information.infoName} </td>   
                                             <td> {information.infoDescription}</td>
                                             <td>
                                                 <button onClick={ () => this.editInformation(information.id)} className="btn btn-info">Güncelle </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteinformation(information.id)} className="btn btn-danger">Sil </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListInformationsComponent;
