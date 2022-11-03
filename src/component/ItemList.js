import { Grid } from "semantic-ui-react";
import styles from "./ItemList.module.css";
import Link from "next/Link";
import { useRouter } from "next/router";

export default function ItemList({ list }) {
	const router = useRouter();
	return (
		<div>
			<Grid columns={3} divided>
				<Grid.Row>
					{list.map((item) => (
						<Grid.Column key={item.id}>
							{/* <Link href={`/pages/${item.id}`}> */}

							<div className={styles.wrap} onClick={() => router.push(`/pages/${item.id}`)}>
								<img
									src={item.image_link}
									alt={item.name}
									className={styles.img_item}
								/>
								<strong className={styles.iti_item}>{item.name}</strong>
								<span className={styles.txt_info}>
								</span>
								<strong className={styles.num_price}> ${item.price}</strong>
							</div>
							{/* </Link> */}
						</Grid.Column>
					))}
				</Grid.Row>
			</Grid>
		</div>
	);
}