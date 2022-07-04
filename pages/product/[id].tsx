import { Product } from '../../interfaces/product';
import Image from 'next/image';
import { GetStaticProps, GetStaticPaths } from 'next';

interface ProductDetail extends Product {
	description: string;
	addOn: string;
	addOnPrice: string;
}

export default function ProductDetail(props: ProductDetail) {
	return (
		<main className='p-10'>
			<section className='flex justify-evenly'>
				<div className='rounded-lg border-2 border-black p-1'>
					<Image src={props.imgUrl} alt='' width='300' height='400' />
				</div>
				<div className='w-2/5'>
					<h1 className='text-4xl font-semibold'>{props.title}</h1>
					<h2 className='text-xl font-semibold my-5'>{props.series}</h2>
					<p className='break-normal mb-5'>{props.description}</p>
					<div className='mb-5'>
						<button className='p-2 rounded-lg border-2 border-black'>
							{props.addOn}
						</button>
					</div>
					<p className='text-2xl'>${props.price}</p>
					<button className='p-3 bg-violet-200 rounded-lg mt-5'>
						Them vao gio hang
					</button>
				</div>
			</section>
		</main>
	);
}

type PathProps = {
	id: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [{ params: { id: 'test' } }],
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async () => {
	let dummy = {
		title: 'Lorem Ipsum',
		series: 'Genshin',
		imgUrl: '/testImg.jpeg',
		price: 10,
		inStock: true,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis id consectetur purus ut. In arcu cursus euismod quis viverra nibh cras. Malesuada proin libero nunc consequat interdum. Aliquam sem fringilla ut morbi tincidunt augue interdum. Interdum consectetur libero id faucibus nisl tincidunt eget. ',
		addOn: 'shoes',
		addOnPrice: 10,
	};
	return {
		props: dummy,
	};
};
