import { useEffect } from "react";
import { Button } from "semantic-ui-react";

export default function Item({ item }) {

	const { image_link, name, price, description } = item.data;
	console.log(item.data, "123");
	useEffect(() => {
		console.log(item);

	}, [])
	return (
		<>
			<div>
				<img src={image_link} alt={name} />
			</div>
			<div>
				{name}
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