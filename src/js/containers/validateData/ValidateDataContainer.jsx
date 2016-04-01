/**
* ValidateDataContainer.jsx
* Created by Kevin Li 3/29/16
**/

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

import * as uploadActions from '../../redux/actions/uploadActions.js';

import ValidateDataContent from '../../components/validateData/ValidateDataContent.jsx';
import { fileTypes } from '../addData/fileTypes.js';
import { kGlobalConstants } from '../../GlobalConstants.js';

import * as UploadHelper from '../../helpers/uploadHelper.js';
import * as ReviewHelper from '../../helpers/reviewHelper.js';

class ValidateDataContainer extends React.Component {
	constructor(props) {
		super(props);
	}


	componentDidMount() {
		
		this.validateSubmission();
		
	}

	checkForCompletion(data) {
		// check if all the validations are done
		let finished = true;
		for (let key in data) {
			let item = data[key];
			if (item.job_status != 'finished' && item.job_status != 'invalid') {
				finished = false;
				break;
			}
		}

		return finished;
	}

	validateSubmission() {
		ReviewHelper.validateSubmission(this.props.submissionID)
			.then((data) => {
				this.props.setValidation(data);

				if (!this.checkForCompletion(data)) {
					setTimeout(() => {
						this.validateSubmission();
					}, 5*1000);
				}
			})
			.catch((err) => {

			});
	}

	render() {
		return (
			<ValidateDataContent {...this.props} submissionID={this.props.id} />
		);
	}
}

export default connect(
	state => ({ submission: state.submission }),
	dispatch => bindActionCreators(uploadActions, dispatch)
)(ValidateDataContainer)