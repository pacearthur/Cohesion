import React from 'react';
import {
  Card, CardBody, Col, Button,
} from 'reactstrap';
import MessageTextOutlineIcon from 'mdi-react/MessageTextOutlineIcon';

const Ava = `${process.env.PUBLIC_URL}/img/12.jpg`;

const ProfileMain = () => (
  <Col md={12} lg={12} xl={12}>
    <Card>
      <CardBody className="profile__card">
        <div className="profile__information">
          <div className="profile__avatar">
            <img src={Ava} alt="avatar" />
          </div>
          <div className="profile__data">
            <p className="profile__name">Clémence DEGÊNE</p>
            <p className="profile__work">Service historique de la défense</p>
            <p className="profile__contact">clemence.degene@intradef.gouv.fr</p>
            <p className="profile__contact">+33 620546378</p>
            <Button color="primary" className="icon profile__btn"><p><MessageTextOutlineIcon /> Contacter</p></Button>
          </div>
        </div>
        <div className="profile__stats">
          <div className="profile__stat">
            <p className="profile__stat-number">340</p>
            <p className="profile__stat-title">COINS</p>
          </div>
          <div className="profile__stat">
            <p className="profile__stat-number">2</p>
            <p className="profile__stat-title">MISSIONS EN COURS</p>
          </div>
          <div className="profile__stat">
            <p className="profile__stat-number">5</p>
            <p className="profile__stat-title">MISSION TERMINEES</p>
          </div>
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default ProfileMain;
