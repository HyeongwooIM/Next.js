import { Button } from "semantic-ui-react";

export default function Item({ item }) {
	console.log(typeof (item));
	const { image_link, name, price, description } = item;
	return (
		<>
			<div>
				<img src={image_link} alt={name} />
			</div>
			<div>
				{item.name}
				<strong>{name}</strong>
				<strong>${price}</strong>
			</div>
			<Button color="orange">구매하기</Button>
			<div>
				<p>{description}</p>
			</div>
		</>
	);
}