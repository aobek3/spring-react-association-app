import React, { Component } from 'react'
import InformationsService from '../services/InformationsService'
import HomeControlComponents from './HomeControlComponents'


class ListHomeNewsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                informations: []
        }
    }

    componentDidMount(){
        InformationsService.getinformations().then((res) => {
            this.setState({ informations: res.data});
        });
    }
    viewEmployee(id){
        this.props.history.push(`/view-information/${id}`);
    }


    render() {
        return (
            <div>
                <HomeControlComponents/>
                 <h2 className="text-center" style={{marginTop:'12px'}}>Haberler</h2>
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
                                             <td> {information.infoName} </td>   
                                             <td> {information.infoDescription}</td>
                                             <td>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(information.id)} className="btn btn-info">Görüntüle </button>
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

export default ListHomeNewsComponent;
