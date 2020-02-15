import React, {useContext} from 'react'
import {NavLink,useHistory} from 'react-router-dom'
import {AuthContext} from '../../context/AuthContext'

import './Header.css';



export const Header = () => {
	
        let today = new Date();
        let day = today.getDate();
        let month = today.getMonth();
        let year = today.getFullYear();
      
        let hours = today.getHours();
        let min = today.getMinutes();
		
    const history = useHistory()
  const auth = useContext(AuthContext)

  const logoutHandler = event => {
    event.preventDefault()
    auth.logout()
    history.push('/')
  }		
        
  return (
    <div>
        <header>

            <span className="right">


            <span className="contact">
                 <a href="/" onClick={logoutHandler}>Выйти</a> 
                </span>

                <span className="contact">
                    <NavLink to="/Contacts" title="Наши контакты"> Контакты</NavLink>
                </span>
               
                <p className="date">&nbsp;
                    {day}-{month+1}-{year}, {hours}ч.&nbsp;{min}мин.
                </p>

            </span>
            <br />

            <br />

            <span className="left">
                <NavLink to="index.html" title="На главную" className="logo">VitOpen</NavLink>
            </span>
            
        </header>
    </div>
  );
}

export default Header;


