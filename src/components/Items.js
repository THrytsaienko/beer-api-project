import React from 'react';
import Item from './Item';

const Items = (props) => (
	<div className="container d-flex flex-wrap flex-row">
		{
			props.items.map((item, index) => (
				// console.log(item.name);
				// console.log(item.description);
				// console.log(item.first_brewed);
				<Item
					key={index}
					name={item.name}
					description={item.description}
					firstDate={item.first_brewed}
					image={item.image_url}
					tagline={item.tagline}
					foodPairing={item.food_pairing}
					brewersTips={item.brewers_tips}
				/>
			))
		}
	</div>
)

export default Items;