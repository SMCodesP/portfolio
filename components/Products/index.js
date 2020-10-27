import Link from 'next/link'
import { useState, useEffect } from 'react';
import { FiArrowRight } from "react-icons/fi";
import dynamic from 'next/dynamic'

const Product = dynamic(
	() => import('../Product'),
	{ ssr: false }
)
import styles from './Products.module.css'

export default function Products({ items, category, limit }) {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 100000)
	}, [])

	return (
		<div className={styles.container}>
			<div className={styles.containerItems}>
				<p className={styles.categoryTitle}>{category.title}</p>
				<div className={styles.containerProducts} items={items}>
				{loading ? (
					<Product productIndex={0} product={{}} loading={true} />
				) : category.items.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1).map((item, index) => {
					if (limit && index > 2) {
					} else {
						return (
							<Product key={index} productIndex={index} product={item} loading={loading} />
						)
					}
				})}
				</div>
				{limit && (
					<Link href={category.link}>
						<div className={styles.containerMoreItems}>
							<p className={styles.moreItem}>Ver mais</p>
							<FiArrowRight
								size={28}
								className={styles.moreIcon}
							/>
						</div>
					</Link>
				)}
			</div>
		</div>
	)
}
