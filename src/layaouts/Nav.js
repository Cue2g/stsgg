import React from 'react'
import './Nav.css'

export default function Nav() {
  return (
    <nav className="uk-navbar-container uk-animation-slide-top" uk-navbar='true'>
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
            <li className="uk-active"><a href="#!">Inicio</a></li>
            <li className="uk-parent"><a href="#!">Nosotros</a></li>
        </ul>
      </div>
    </nav>
  )
}
