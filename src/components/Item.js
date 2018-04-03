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
			<h2 className="card-title">Name: {props.name}</h2>
			<p className="card-text text-muted">Date: {props.firstDate}</p>
			<p className="card-text text-muted tags">Tags: {props.tagline}</p>
			<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
				See more details
			</button>

			<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header bg-primary">
							<h4 className="modal-title text-white" id="exampleModalLabel">{props.name}</h4>
							<button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<p className="card-text text-muted"><span className="font-weight-bold text-danger">Food: </span>{props.foodPairing}</p>
							<p className="card-text text-muted"><span className="font-weight-bold text-warning">Description: </span>{props.description}</p>
							<p className="card-text text-muted"><span className="font-weight-bold text-success">Ingredients: </span>malt, hops, yeast</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default Item;