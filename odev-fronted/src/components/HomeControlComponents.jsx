import React, { Component } from 'react'



class HomeControlComponents extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="http://localhost:3000/news" >Haberler <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="http://localhost:3000/noties">Duyurular <span className="sr-only">(current)</span></a>
                </li>
                </ul>
            </div>
            </nav>
        )
    }
}

export default HomeControlComponents
