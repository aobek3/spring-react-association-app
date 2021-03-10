import React, { Component } from 'react'
import InformationsService from '../services/InformationsService';

class CreateNotiesComponenets extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            infoName: '',
            infoFilePath: '',
            infoType:'2'
        }
        this.changeinfoNameHandler = this.changeinfoNameHandler.bind(this);
        this.changeinfoFilePathHandler = this.changeinfoFilePathHandler.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            InformationsService.getinformationById(this.state.id).then( (res) =>{
                let info = res.data;
                console.log(info);
                if(info.infoType=== '1')
                this.setState({infoName: info.infoName,
                    infoFilePath: info.infoFilePath
                });
            });
        }        
    }
    saveOrUpdateInformation = (e) => {
        e.preventDefault();
        let info = {infoName: this.state.infoName, infoFilePath: this.state.infoFilePath,infoType:this.state.infoType};

        // step 5
        if(this.state.id === '_add'){
            InformationsService.createinformation(info).then(res =>{
               this.props.history.push('/admin-noties');
            });
        }else{
            InformationsService.updateinformation(info, this.state.id).then( res => {
                this.props.history.push('/admin-noties');
            });
        }
    }
    
    changeinfoNameHandler= (event) => {
        this.setState({infoName: event.target.value});
    }

    changeinfoFilePathHandler= (event) => {
        console.log(event.preventDefault());
        this.setState({infoFilePath: event.target.value});
    }


    cancel(){
        this.props.history.push('/admin-noties');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Duyuru Ekle</h3>
        }else{
            return <h3 className="text-center">Duyuru Güncelleme</h3>
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
                                            <label>Duyuru Metni </label>
                                            <input placeholder="Duyuru Metni" name="infoName" className="form-control" 
                                                value={this.state.infoName} onChange={this.changeinfoNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                        <div className="file-field">
                                        <label>Dosya Yolu </label>
                                        <div class="input-group mb-3">
                                        <input type="file" class="form-control" id="infoFilePath" onChange={this.changeinfoFilePathHandler}></input>
                                        </div>
                                        </div>
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

export default CreateNotiesComponenets
