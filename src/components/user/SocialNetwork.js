import React, { Component } from 'react';
// import images from '../images/facebook.svg';
// import images from '../images/google-plus.svg';
// import images from '../images/pinterest.svg';
// import images from '../images/twitter.svg';

class App extends Component {
	constructor(props) {
	 super(props);
	 this.state = {
		 count: 0
	 };

	 this.handleClick = this.handleClick.bind(this);
 }

  handleClick() {
    this.setState({count: this.state.count + 1});
  }
	render() {
		return (
			<div className="App">
				<div className="social">
					<div className="box--button">
							<button onClick={this.handleClick} className="button--social" type="submit"><img className="icon" src="../images/facebook.svg" alt="x" />Share</button>
							<div className="counter">{this.state.count}</div>
						</div>
						<div className="box--button">
							<button onClick={this.handleClick} className="button--social"  type="submit"><img className="icon" src="../images/twitter.svg" alt="x" />Tweet</button>
							<div className="counter">{this.state.count}</div>
						</div>
						<div className="box--button">
							<button onClick={this.handleClick} className="button--social" type="submit"><img className="icon" src="../images/pinterest.svg" alt="x" />Pin it</button>
							<div className="counter">{this.state.count}</div>
						</div>
						<div className="box--button">
							<button onClick={this.handleClick} className="button--social" type="submit"><img className="icon" src="../images/google-plus.svg" alt="x" /></button>
							<div className="counter">{this.state.count}</div>
						</div>
							<button className="button--social" type="submit">Enlace</button>
					</div>
				</div>

		);
	}
}

export default App;
