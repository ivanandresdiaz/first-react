import React from 'react';
import './styles/BadgeNew.css';
import Navbar from '../components/Navbar.js';
import logo from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm'
class BadgeNew extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <div className="BadgeNew_hero">
                    <img className="img-fluid" src={logo} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge firstName="Andres" lastName="Diaz" twitter="sparragus" jobTitle="Frontend Dev"/>
                        </div>
                        <div className="col-6">
                            <BadgeForm/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default BadgeNew;