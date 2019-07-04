import React, { PureComponent } from 'react';
import {
  Button, ButtonToolbar,
} from 'reactstrap';
import { reduxForm } from 'redux-form';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

class HorizontalForm extends PureComponent {
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
      <form className="form form--horizontal" onSubmit={handleSubmit}>
        <ButtonToolbar className="form__button-toolbar">
          <Button color="primary" type="submit">Récupérer ma récompense</Button>
        </ButtonToolbar>
      </form>
    );
  }
}

export default reduxForm({
  form: 'horizontal_form', // a unique identifier for this form
})(withTranslation('common')(HorizontalForm));
