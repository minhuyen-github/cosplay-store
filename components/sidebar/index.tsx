import Accordion from '../accordion';

export default function Sidebar() {
	return (
		<div className='p-5'>
			<input
				type='text'
				placeholder='Search'
				className='p-1.5 mb-5 rounded-lg border-[1px] border-gray-300 focus:border-black focus:outline-none'
			/>
			<div>
				<Accordion header='Series'>
					<ul>
						<li>
							<input type='checkbox' id='genshin' />
							<label className='ml-2'>Genshin</label>
						</li>
					</ul>
				</Accordion>
			</div>
		</div>
	);
}
