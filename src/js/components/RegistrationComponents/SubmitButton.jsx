/**
* SubmitButton.jsx
* Created by Kyle Fox 12/11/15
**/

import React, { PropTypes } from 'react';

const propTypes = {
    buttonDisabled: PropTypes.bool.isRequired,
};

const defaultProps = {
    buttonDisabled: true
};

// A standard button for submission that we can further turn into a sharable component
class SubmitEmailButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonClass: 'usa-button-disabled'
        };
    }

    componentWillReceiveProps(props) {
        var newButtonClass;

        if (props.buttonDisabled) {
            newButtonClass = 'usa-button-disabled';
        } else {
            newButtonClass = 'usa-button';
        }

        this.setState({
            buttonClass: newButtonClass
        });
    }

    emailSubmitted(e) {
        console.log("Clicked!");
    }

    render() {
        return (
            <button className={this.state.buttonClass} onClick={this.emailSubmitted.bind(this)} disabled={this.props.buttonDisabled}>Verify this email address</button>
        );
    }
}

SubmitEmailButton.propTypes = propTypes;
SubmitEmailButton.defaultProps = defaultProps;

export default SubmitEmailButton;
