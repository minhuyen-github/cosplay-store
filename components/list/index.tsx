type Props = {
	children: React.ReactNode;
};

export default function List({ children }: Props) {
	return (
		<div className='p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 grow'>
			{children}
		</div>
	);
}
