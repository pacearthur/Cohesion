import React from 'react';
import {
  Container, Button, ButtonToolbar,
} from 'reactstrap';

import JustifyTabsBorderedTop from './components/JustifyTabsBorderedTop';

const ProjectSummary = () => (
  <Container>
    <ButtonToolbar className="form__button-toolbar">
      <Button color="primary" className="rounded" outline><a href="/forms/wizard_form">Proposer une mission</a></Button>
    </ButtonToolbar>
    <JustifyTabsBorderedTop />
  </Container>
);
export default ProjectSummary;
