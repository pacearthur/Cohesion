import React, { PureComponent } from 'react';
import { Button, ButtonToolbar } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

class WizardFormOne extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      showPassword: false,
    };
  }

  showPassword = (e) => {
    e.preventDefault();
    this.setState(prevState => ({ showPassword: !prevState.showPassword }));
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form className="form form--horizontal wizard__form" onSubmit={handleSubmit}>
        <h3 className="wizard__title">Quelques informations sur vous.</h3>
        <div className="form__form-group">
          <span className="form__form-group-label">Nom</span>
          <div className="form__form-group-field">
            <Field
              name="username"
              component="input"
              type="text"
              placeholder="Degêne"
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">E-mail</span>
          <div className="form__form-group-field">
            <Field
              name="email"
              component="input"
              type="email"
              placeholder="clemence.degene@intradef.gouv.fr"
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Entité</span>
          <div className="form__form-group-field">
            <Field
              name="Entité"
              component="input"
              type="Entite"
              placeholder="Entite"
            />
          </div>
        </div>
        <ButtonToolbar className="form__button-toolbar wizard__toolbar">
          <Button color="primary" type="button" disabled className="previous">Retour</Button>
          <Button color="primary" type="submit" className="next">Suivant</Button>
        </ButtonToolbar>
      </form>
    );
  }
}

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(WizardFormOne);
