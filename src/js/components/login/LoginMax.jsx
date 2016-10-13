/**
  * LoginMax.jsx
  * Createdd by Kevin Li 10/13/16
  **/

import React from 'react';
import { kGlobalConstants } from '../../GlobalConstants.js';
import ErrorMessage from '../SharedComponents/ErrorMessage.jsx';

export default class LoginMax extends React.Component {
	render() {
		let errorMessageComponent = null;

        if (this.props.errorMessage && this.props.errorMessage != "") {
            errorMessageComponent = <ErrorMessage message={this.props.errorMessage} />;
        }

		return (
			<div className="col-md-5 usa-da-login-container">
                    <div className="row">
                        <div className="col-xs-12">
                            <a href={ kGlobalConstants.CAS_ROOT + '/cas/login?service=' + encodeURIComponent(kGlobalConstants.AUTH_CALLBACK)}>Log in with MAX</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {errorMessageComponent}
                        </div>
                    </div>
            </div>
		)
	}
}