import React from 'react';
import { Button, ButtonToolbar } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import renderToggleButtonField from '../../../../shared/components/form/ToggleButton';

const WizardFormOne = ({ handleSubmit, previousPage }) => (
  <form className="form form--horizontal wizard__form" onSubmit={handleSubmit}>
    <h3 className="wizard__title">Description de la mission</h3>
    <div className="form__form-group">
      <div className="form__form-group-field">
        <Field
          name="textarea"
          component="textarea"
          type="text"
        />
      </div>
    </div>
    <div className="form__form-group">
      <span className="form__form-group-label">Conditions</span>
      <div className="form__form-group-field">
        <Field
          name="phone_notifications"
          component={renderToggleButtonField}
        />
      </div>
      <p className="wizard__description">Ce projet sera inscrit dans une blockchain et donc immuable. En acceptant
        de soummetre ce projet, je comprends qu&apos;il sera impossible de le supprimer et car il sera archivé à jamais.
      </p>
    </div>
    <ButtonToolbar className="form__button-toolbar wizard__toolbar">
      <Button color="primary" type="button" className="previous" onClick={previousPage}>Retour</Button>
      <Button color="primary" type="submit" onClick={handleSubmit}> Valider</Button>
    </ButtonToolbar>
  </form>
);

WizardFormOne.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'wizard', //                 <------ same form namez
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(WizardFormOne);
