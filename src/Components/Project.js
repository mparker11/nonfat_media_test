import React, { Component } from 'react';
import Moment from 'react-moment';
import Check from './Check';

class Project extends Component {
	constructor(props) {
        super(props)
        this.state = { 
			checked: localStorage[this.props.project.title + '_checked'] !== undefined ? localStorage[this.props.project.title + '_checked'] : 'false'
		}
    }
	handleCheckClick() {
		this.setState(
			{ 
				checked: this.state.checked === 'false' ? 'true' : 'false'
			}, 
			function() {
				localStorage.setItem(this.props.project.title + '_checked', this.state.checked);
			}
		);
	}
	render() {
		return (
			<div className="single-project">
				<p>{ this.props.project.title }</p>
				<p>{ this.props.project.type }</p>
				<p>{ this.props.project.castingDirector }</p>
				<p>Start Date: <Moment unix>{this.props.project.startDate}</Moment></p>
				<p>Added: <Moment unix>{this.props.project.added}</Moment></p>
				<Check checked={ this.state.checked } onChange={ this.handleCheckClick.bind(this) } />
			</div>
		)
	}
}

export default Project;