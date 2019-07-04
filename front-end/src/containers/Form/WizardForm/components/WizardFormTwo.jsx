import React from 'react';
import { Button, ButtonToolbar } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

const WizardFormTwo = ({ handleSubmit, previousPage }) => (
  <form className="form form--horizontal wizard__form" onSubmit={handleSubmit}>
    <h3 className="wizard__title">Votre mission</h3>
    <div className="form__form-group">
      <span className="form__form-group-label">Titre du projet</span>
      <div className="form__form-group-field">
        <Field
          name="titre"
          component="input"
          type="text"
          placeholder="Titre du projet"
        />
      </div>
    </div>
    <div className="form__form-group">
      <span className="form__form-group-label">Compétence</span>
      <div className="form__form-group-field">
        <Field
          name="competence"
          component="input"
          type="text"
          placeholder="Compétences"
        />
      </div>
    </div>
    <div className="form__form-group">
      <span className="form__form-group-label">Nombre de personnes requises</span>
      <div className="form__form-group-field">
        <Field
          name="nombre"
          component="input"
          type="int"
        />
      </div>
    </div>
    <div className="form__form-group">
      <span className="form__form-group-label">Début du projet</span>
      <div className="form__form-group-field">
        <Field
          name="start"
          component="input"
          type="date"
        />
      </div>
    </div>
    <div className="form__form-group">
      <span className="form__form-group-label">Fin du projet</span>
      <div className="form__form-group-field">
        <Field
          name="end"
          component="input"
          type="date"
        />
      </div>
    </div>
    <ButtonToolbar className="form__button-toolbar wizard__toolbar">
      <Button color="primary" type="button" className="previous" onClick={previousPage}>Retour</Button>
      <Button color="primary" type="submit" className="next">Suivant</Button>
    </ButtonToolbar>
  </form>
);

WizardFormTwo.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(WizardFormTwo);
