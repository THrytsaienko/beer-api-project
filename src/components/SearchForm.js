import React from 'react';

const SearchForm = (props) => {
	return (
		<div className="container">
			<form className="form-inline my-2 my-lg-5">
				<input className="form-control form-control-lg mr-5" type="search" placeholder="Search" aria-label="Search" />
				<button className="btn btn-primary btn-lg" type="submit">Search</button>
			</form>
		</div>
	)
}

export default SearchForm;