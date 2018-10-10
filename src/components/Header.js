import React from 'react';
import {Link} from  'react-router-dom';
const Header =()=> {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-primary">
        <Link className="navbar-brand" to="/"><img src="/logo.png" alt="logo" class="logo"/></Link>
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/"><i className="fas fa-ellipsis-h" /> Home <span className="sr-only">(current)</span></Link>
            </li>
            
            <li className="nav-item active">
                <Link className="nav-link" to="/recipe/add"><i className="fas fa-plus" /> Add <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/shoppingList"><i className="fas fa-list-alt"/> SList <span className="sr-only">(current)</span></Link>
            </li>

            <li className="nav-item active">
                <Link className="nav-link" to="/about"><i className="fas fa-question"/> About <span className="sr-only">(current)</span></Link>
            </li>
    
        </ul>
       
    </nav>
  )
}

export default Header;
