import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="home">
          <span className="title">
            <FormattedMessage id="general.evil-corp" />
          </span>
          <div className="fsociety-logo" />
          <div className="support-options">
            <Link to={'/support'} className="link get-support">
              {' '}
              <FormattedMessage id="home.get-support" />
            </Link>
            <Link to={'/admin/support'} className="link give-support">
              {' '}
              <FormattedMessage id="home.give-support" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
