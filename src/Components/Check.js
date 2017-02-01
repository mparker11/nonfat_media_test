import React, { Component } from 'react';

class Check extends Component {
	render() {
		return (
			<div className="interested-check">
				{
					this.props.checked === 'true' ? (
						<input type="checkbox" onChange={ this.props.onChange } checked />
					) : (
						<input type="checkbox" onChange={ this.props.onChange } />
					)
				}
				I&rsquo;m interested
			</div>	
		)
	}
}

export default Check;
