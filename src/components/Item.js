import React from 'react';

const Item = (props) => (
	<div className="card m-2 d-flex flex-row justify-content-between">
		<div className="card-image">
			<img className="card-img-top my-5 ml-5" src={props.image} alt="Card image cap" />
			<svg className="star" xmlns="svg/symbol/svg/sprite.symbol.svg#star" width="30px" height="30px">
				<g fill="red"></g>
			</svg>
		</div>
		<div className="card-body">
			<a href="" className="card-title">Name: {props.name}</a>
			<p className="card-text text-muted">Date: {props.firstDate}</p>
		</div>
	</div>
)

export default Item;