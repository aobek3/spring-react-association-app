import React, { Component } from 'react'
import InformationsService from '../services/InformationsService';

class CreateInformationComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            infoName: '',
            infoDescription: '',
            infoType:'1'
        }
        this.changeinfoNameHandler = this.changeinfoNameHandler.bind(this);
        this.changeinfoDescriptionHandler = this.changeinfoDescriptionHandler.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            InformationsService.getinformationById(this.state.id).then( (res) =>{
                let info = res.data;
                this.setState({infoName: info.infoName,
                    infoDescription: info.infoDescription
                });
            });
        }        
    }
    saveOrUpdateInformation = (e) => {
        e.preventDefault();
        let info = {infoName: this.state.infoName, infoDescription: this.state.infoDescription,infoType:this.state.infoType};

        // step 5
        if(this.state.id === '_add'){
            InformationsService.createinformation(info).then(res =>{
               this.props.history.push('/admin-news');
            });
        }else{
            InformationsService.updateinformation(info, this.state.id).then( res => {
                this.props.history.push('/admin-news');
            });
        }
    }
    
    changeinfoNameHandler= (event) => {
        this.setState({infoName: event.target.value});
    }

    changeinfoDescriptionHandler= (event) => {
        this.setState({infoDescription: event.target.value});
    }


    cancel(){
        this.props.history.push('/admin-news');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Haber Ekle</h3>
        }else{
            return <h3 className="text-center">Haber Güncelleme</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Haber Başlığı: </label>
                                            <input placeholder="Haber Başlığı" name="infoName" className="form-control" 
                                                value={this.state.infoName} onChange={this.changeinfoNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Haber Açıklaması: </label>
                                            <input placeholder="Haber Açıklaması" name="infoDescription" className="form-control" 
                                                value={this.state.infoDescription} onChange={this.changeinfoDescriptionHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateInformation}>Kaydet</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Vazgeç</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateInformationComponent
