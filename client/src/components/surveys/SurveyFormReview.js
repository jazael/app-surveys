// SurveyFormReview muestra a los usuarios sus entradas de formulario para su revisión
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
    const reviewFields = _.map(formFields, ({ name, label }) => {
        return (
            <div key={ name }>
                <label>{ label }</label>
                <div>{ formValues[name] }</div>
            </div>
        );
    });

    return (
        <div>
            <h5>Por favor confirma sus entradas</h5>
            { reviewFields }
            <button className="yellow darken-3 white-text btn-flat" onClick={onCancel}>
                Regresar <i className="material-icons right">reply</i>
            </button>
            <button className="green btn-flat right white-text" onClick={() => submitSurvey(formValues, history)}>
                Enviar encuesta <i className="material-icons right">email</i>
            </button> 
        </div>
    );
}

function mapStateToProps(state) {
    return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions) (withRouter(SurveyFormReview));