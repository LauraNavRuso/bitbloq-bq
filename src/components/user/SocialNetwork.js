import React, { Component } from 'react';
// import images from '../images/facebook.svg';
// import images from '../images/google-plus.svg';
// import images from '../images/pinterest.svg';
// import images from '../images/twitter.svg';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			countFacebook: 0,
		 	countTwitter: 0,
			countPinterest: 0,
			countGoogle: 0
	 };

	 this.handleClick = this.handleClick.bind(this);
 }

  handleClick(e) {
		var socialName = e.currentTarget.value;
		switch (socialName) {
			case 'facebook':
				this.setState({countFacebook: this.state.countFacebook + 1});
				break;
			case 'twitter':
				this.setState({countTwitter: this.state.countTwitter + 1});
				break;
			case 'pinterest':
				this.setState({countPinterest: this.state.countPinterest + 1});
				break;
			case 'google':
				this.setState({countGoogle: this.state.countGoogle + 1});
				break;
		}
  }

	render() {
		return (
			<div className="App">
				<div className="social">
					<div className="box--button">
							<button onClick={this.handleClick} className="button--social" type="submit" value="facebook" ><img className="icon" src="../images/facebook.svg" alt="x" />Share</button>
							<div className="counter">{this.state.countFacebook}</div>
						</div>
						<div className="box--button">
							<button onClick={this.handleClick} className="button--social"  type="submit" value="twitter"><img className="icon" src="../images/twitter.svg" alt="x" />Tweet</button>
							<div className="counter">{this.state.countTwitter}</div>
						</div>
						<div className="box--button">
							<button onClick={this.handleClick} className="button--social" type="submit" value="pinterest"><img className="icon" src="../images/pinterest.svg" alt="x" />Pin it</button>
							<div className="counter">{this.state.countPinterest}</div>
						</div>
						<div className="box--button">
							<button onClick={this.handleClick} className="button--social" type="submit" value="google"><img className="icon" src="../images/google-plus.svg" alt="x" /></button>
							<div className="counter">{this.state.countGoogle}</div>
						</div>
							<button className="button--social" type="submit">Enlace</button>
					</div>
				</div>

		);
	}
}

export default App;
