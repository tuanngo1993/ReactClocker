var React = require('react');

class App extends React.Component {
	constructor(props) {
		super(props);

		const currentTime = new Date();
		this.state = {
			h : currentTime.getHours(),
			m : currentTime.getMinutes(),
			s : currentTime.getSeconds(),
			apm: currentTime.getHours() >= 12 ? 'pm' : 'am'
		};

		this.setTimer();
	}

	setTimer() {
		setTimeout(this.updateClock.bind(this), 1000);
	}

	updateClock() {
		const currentTime = new Date();
		this.setState({
			h : currentTime.getHours(),
			m : currentTime.getMinutes(),
			s : currentTime.getSeconds(),
			apm: currentTime.getHours() >= 12 ? 'pm' : 'am'
		}, this.setTimer);
	}

	render() {
		const {h, m, s, apm} = this.state;
		return (
			<div>
				{h == 0 ? 12 : (h > 12 ? h - 12 : h)}
					: {m > 9 ? m : '0' + m}
						: {s > 9 ? s : '0' + s}
							{' ' + apm}
			</div>
		);
	}
}

module.exports = App;