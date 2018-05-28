import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Landing extends Component {
    render () {
        return (
            <div style = {{ textAlign: 'center'}}>
                <div className="row">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                        <span className="card-title">Bienvenido al registro de encuestas</span>
                        <p>
                            Estimado usuario, en esta aplicación podra ingresar título, asunto, cuerpo y los correos electrónicos donde se enviara un corrreo electrónico, para constatar la validez de los mismos.
                            Podra registrar sus creditos con pagos en línea modo Test
                        </p>
                        </div>
                        <div className="card-action">
                            <Link to={ this.props.auth ? '/surveys/new' : '/' }>Presiona este link para crear tu encuesta</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps)(Landing);