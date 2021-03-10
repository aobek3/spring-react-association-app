import React, { Component } from 'react'

class LoginPanel extends Component {
    constructor(props) {
        super(props)

        this.state = {
                
        }

    }
    logIn(){
        this.props.history.push('/admin-news');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                Login Panel 
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Kullanıcı Adı </label>
                                            <input placeholder="Kullanıcı Adı" name="userName" className="form-control"/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Şifre</label>
                                            <input type="password" placeholder="Şifre" name="infoDescription" className="form-control"/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.logIn.bind(this)} >Giriş</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default LoginPanel
