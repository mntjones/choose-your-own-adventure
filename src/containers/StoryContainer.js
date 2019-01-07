import React, { Component } from 'react';
import StorySection from '../components/StorySection';
import { connect } from 'react-redux';

class StoryContainer extends Component {

	render () {

		return (

			<div className="storyContainer">
				< Story />
				< StorySection />
			</div>
			)
	}
}
