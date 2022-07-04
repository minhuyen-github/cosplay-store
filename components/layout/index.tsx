import Head from 'next/head';
import Nav from '../nav';

type Props = {
	children: React.ReactNode;
};

export default function Layout({ children }: Props) {
	return (
		<>
			<Head>
				<title>VanillaJeje</title>
				<meta name='description' content='' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Nav />
			<main className='relative p-20'>{children}</main>
		</>
	);
}
