import React from 'react';
import ReactDom from 'react-dom';
import Header from './Header';
import SearchForm from './SearchForm';
import Items from './Items';

export default class PunkApp extends React.Component {
	constructor(){
		super();
		this.state = {
			data: [],
			openItem: undefined
		};
	}

	// state = {
	// 	data: []
	// };
	
	componentDidMount(){
		this.getItems();
	}

	getItems () {
		fetch('https://api.punkapi.com/v2/beers?page=2&per_page=3')
			.then((response) => {
				return response.json();
			})
			.then(resData => {
				console.log(resData)
				this.setState((prevState) => { 
					return {
						data: prevState.data.concat(resData)
					};
				})
			})
			.catch(err => console.log(err));
	}

	render () {
		return (
			<div>
				<Header />
				<SearchForm />
				<Items 
					items={this.state.data}
				/>
			</div>
		)
	}
}