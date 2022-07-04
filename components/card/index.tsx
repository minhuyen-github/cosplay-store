import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../../interfaces/product';

interface ProductCard extends Product {
	sizes: {
		size: string;
		inStock: boolean;
		price: number;
	}[];
	addOns?: {
		addOn: string;
		inStock: boolean;
		price: number;
	}[];
}

export default function Card(props: ProductCard) {
	return (
		<Link
			href={{
				pathname: '/product/[id]',
				query: { id: 'test' },
			}}>
			<div className='flex flex-col justify-center rounded-lg border-2 border-black p-3 cursor-pointer'>
				<div className='text-center'>
					<Image
						src={props.imgUrl}
						alt={props.title}
						width='200'
						height='300'
					/>
				</div>
				<div className='text-center'>
					<p>{props.title}</p>
					<p>{props.series}</p>
				</div>
				<div>
					<div className='p-3 rounded-lg border-2 border-black'>
						<p>{props.sizes[0].size}</p>
					</div>
				</div>
			</div>
		</Link>
	);
}
