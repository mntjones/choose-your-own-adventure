import React, { Component } from 'react';

class StoryType extends Component {
	
	handleClick = () => {
		this.props.renderIntro(this.props.StoryType)
	}
}