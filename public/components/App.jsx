var React = require('react');

var App = React.createClass({
	getInitialState: function() {
		return {
			h: "00",
			m: "00",
			s: "00",
			apm: ""
		};
	},

	setTime: function() {
		const currentTime = new Date(),
		h = currentTime.getHours(),
		m = currentTime.getMinutes(),
		s = currentTime.getSeconds();

		this.setState({
			h: h == 0 ? 12 : (h > 12 ? h - 12 : h),
			m: m > 9 ? m : '0' + m,
			s: s > 9 ? s : '0' + s,
			apm: h > 12 ? 'pm' : 'am'
		});
	},

	componentWillMount: function() {
		this.setTime();
	},

	componentDidMount: function(){
		window.setInterval(function () {
			this.setTime();
		}.bind(this), 1000);
	},

	render: function() {
		return (
			<div>
				{this.state.h} : {this.state.m} : {this.state.s} {' ' + this.state.apm}
			</div>
		);
	}
});


module.exports = App;