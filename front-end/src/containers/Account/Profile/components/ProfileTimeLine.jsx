/* eslint-disable import/order */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
/* eslint-disable no-useless-escape */
/* eslint-disable import/no-unresolved */
import React from 'react';
import JustifyTabsBorderedTop from '../../../DefaultPage/MesProjets/components/JustifyTabsBorderedTop.1';
import {
  Container, Button, ButtonToolbar,
} from 'reactstrap';

const ProjectSummary = () => (
  <Container>
    <ButtonToolbar className="form__button-toolbar">
      <Button color="primary" className="rounded" outline><a href="/forms/basic_form">Ajouter une compétence</a></Button>
    </ButtonToolbar>
    <JustifyTabsBorderedTop />
  </Container>
);

export default ProjectSummary;
