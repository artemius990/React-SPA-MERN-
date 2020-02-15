import React from 'react';
import './Menu.css'
import {NavLink} from "react-router-dom";


class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
    menu:[],
	  };
  }

  componentDidMount() {
	
    fetch('/menu')
      .then(res => res.json())
      .then(menu => this.setState({menu}
      ));
  }	

	render(){
	//let menu=this.props.menu;
  return (
    <div>
      <div className="clear"></div>
      <center>
        <div className="menu">Откроем миру Витебск!!!
          <hr />
        </div>
        <menu className="menuHrefs">

          {this.state.menu.map(a =>
          <NavLink to={a.link}>{a.name}</NavLink>
          )}

        </menu>
      </center>
    </div>

  );
  }
}

export default Menu;

{/* {Object.keys(menu).map(elem => {
        return <NavLink to={menu[elem]} key={elem}>{elem} </NavLink> })} */}
        {/* <NavLink to="index.html">Главная</NavLink>
        <NavLink to="/Showplaces">Достопримечательности</NavLink>
        <NavLink to="/Souvenirs">Что привезти</NavLink>
        <NavLink to="/About_us">О нас</NavLink> */}
		 
		  
