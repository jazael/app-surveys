import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payment';

class Header extends Component {
  renderContent() {
    switch(this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Inicio de sesión con Google</a></li>;
      default:
        return [
          <li key="4"><a href="/">Inicio <i className="material-icons right">home</i></a></li>,
          <li key="1"><Payments /></li>,
          <li key="3" style={{ margin: '0 10px' }}>
            Créditos: { this.props.auth.credits } <i className="material-icons right">credit_card</i>
          </li>,
          <li key="2"><a href="/api/logout">Cerrar sesión <i className="material-icons right">settings_power</i></a></li>
        ];
    }
  }

  render () {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={ this.props.auth ? '/surveys' : '/' } className="left brand-logo">Gestión de Encuestas <i className="material-icons">format_list_bulleted</i> </Link>
          <ul className="right hide-on-med-and-down">
            { this.renderContent() }
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({auth}) {
  return {auth};
}

export default connect(mapStateToProps)(Header);
