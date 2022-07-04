import type { NextPage } from 'next';
import List from '../components/list';
import Card from '../components/card';
import Sidebar from '../components/sidebar';

const Home: NextPage = () => {
	const details = {
		title: 'Test',
		series: '',
		imgUrl: '/testImg.jpeg',
		price: 10,
		sizes: [{ size: 'L', inStock: true, price: 10 }],
	};
	return (
		<div className='flex'>
			<Sidebar />
			<List>
				<Card
					title={details.title}
					series={details.series}
					imgUrl={details.imgUrl}
					price={details.price}
					sizes={details.sizes}
				/>
				<Card
					title={details.title}
					series={details.series}
					imgUrl={details.imgUrl}
					price={details.price}
					sizes={details.sizes}
				/>
				<Card
					title={details.title}
					series={details.series}
					imgUrl={details.imgUrl}
					price={details.price}
					sizes={details.sizes}
				/>
				<Card
					title={details.title}
					series={details.series}
					imgUrl={details.imgUrl}
					price={details.price}
					sizes={details.sizes}
				/>
				<Card
					title={details.title}
					series={details.series}
					imgUrl={details.imgUrl}
					price={details.price}
					sizes={details.sizes}
				/>
			</List>
		</div>
	);
};

export default Home;
