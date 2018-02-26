import React, { Component } from 'react';
import Facebook from '../images/facebook.svg';
import Twitter from '../images/twitter.svg';
import Pinterest from '../images/pinterest.svg';
import Google from '../images/google-plus-logo.svg';

//API KEY - AIzaSyBSUbqT3dIdr5ulOjOfHdgCFf7sdFeG484

class SocialNetwork extends Component {
	constructor(props) {
		super(props);
		this.state = {
			countFacebook: 0,
		 	countTwitter: 0,
			countPinterest: 0,
			countGoogle: 0,
			link:''
	  };

	 this.handleClick = this.handleClick.bind(this);
	 this.getRandom = this.getRandom.bind(this);
 	}

	componentWillMount(){
		let randomFacebook = this.getRandom();
		let randomTwitter = this.getRandom();
		let randomPinterest = this.getRandom();
		let randomGoogle = this.getRandom();
		this.setState({
			countFacebook:randomFacebook,
			countTwitter:randomTwitter,
			countPinterest:randomPinterest,
			countGoogle:randomGoogle
		});
	}

	getRandom(){
		return Math.floor(Math.random()*100);
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

	// shouldComponentUpdate(nextProps, nextState) {
	//   this.shortenUrl(window.location.href);
	// }

  componentDidMount() {
    ('Estoy en el componentDidMount');
		this.shortenUrl(window.location.href);
  }

	createShortUrllink(shortUrl){
	  let shortLink ="<a href='"+shortUrl+"' target='aboutblank'>"+shortUrl+"</a>";
		this.setState({
			link: shortLink
		});
	}

	shortenUrl(url){
		const { setKey, shorten } = require('react-native-google-shortener');
		setKey(this.props.apiKey);
		shorten(url).then(response => {
			this.createShortUrllink(response.id);
		});
	}

	render() {
		return (
			<div className="App">
				<div className="social">
					<div className="box--button">
							<button onClick={this.handleClick} className="button--social" type="submit" value="facebook" ><img className="icon--social" src={Facebook} alt="x" />Share</button>
							<div className="counter">{this.state.countFacebook}</div>
						</div>
						<div className="box--button">
							<button onClick={this.handleClick} className="button--social"  type="submit" value="twitter"><img className="icon--social" src={Twitter} alt="x" />Tweet</button>
							<div className="counter">{this.state.countTwitter}</div>
						</div>
						<div className="box--button">
							<button onClick={this.handleClick} className="button--social" type="submit" value="pinterest"><img className="icon--social" src={Pinterest} alt="x" />Pin it</button>
							<div className="counter">{this.state.countPinterest}</div>
						</div>
						<div className="box--button">
							<button onClick={this.handleClick} className="button--social" type="submit" value="google"><img className="icon--social" src={Google} alt="x" /></button>
							<div className="counter">{this.state.countGoogle}</div>
						</div>
						<div className="box--link">
							<button className="button--social url--link" type="submit" dangerouslySetInnerHTML={{__html:this.state.link}}></button>
						</div>
					</div>
				</div>

		);
	}
}

SocialNetwork.defaultProps = {
	apiKey: 'AIzaSyBSUbqT3dIdr5ulOjOfHdgCFf7sdFeG484'
};

export default SocialNetwork;
