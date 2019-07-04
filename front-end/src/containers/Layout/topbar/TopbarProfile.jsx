import React, { PureComponent } from 'react';
import DownIcon from 'mdi-react/ChevronDownIcon';
import { Collapse } from 'reactstrap';
import TopbarMenuLink from './TopbarMenuLink';

const Ava = `${process.env.PUBLIC_URL}/img/12.jpg`;

export default class TopbarProfile extends PureComponent {
  constructor() {
    super();
    this.state = {
      collapse: false,
    };
  }

  toggle = () => {
    this.setState(prevState => ({ collapse: !prevState.collapse }));
  };

  render() {
    const { collapse } = this.state;

    return (
      <div className="topbar__profile">
        <button className="topbar__avatar" type="button" onClick={this.toggle}>
          <img className="topbar__avatar-img" src={Ava} alt="avatar" />
          <p className="topbar__avatar-name">Clémence Degêne</p>
          <DownIcon className="topbar__icon" />
        </button>
        {collapse && <button className="topbar__back" type="button" onClick={this.toggle} />}
        <Collapse isOpen={collapse} className="topbar__menu-wrap">
          <div className="topbar__menu">
            <TopbarMenuLink title="Mon profil" icon="user" path="/account/profile" />
            <TopbarMenuLink title="Calendrier" icon="calendar-full" path="/default_pages/calendar" />
            <TopbarMenuLink title="Boîte de réception" icon="inbox" path="/mail" />
            <div className="topbar__menu-divider" />
            <TopbarMenuLink title="Paramètres" icon="cog" path="/account/profile" />
            <TopbarMenuLink title="Déconnexion" icon="exit" path="/log_in" />
          </div>
        </Collapse>
      </div>
    );
  }
}
