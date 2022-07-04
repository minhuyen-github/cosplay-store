import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

type Props = {
	header: string;
	children: React.ReactNode;
};

export default function Accordion({ header, children }: Props) {
	const [expanded, setExpanded] = useState(false);

	const variants = {
		open: { opacity: 1, height: 'auto' },
		collapsed: { opacity: 0, height: 0 },
	};

	return (
		<>
			<p className='cursor-pointer' onClick={() => setExpanded(!expanded)}>
				{header}
			</p>
			<AnimatePresence>
				{expanded && (
					<motion.div
						key='content'
						initial='collapsed'
						animate='open'
						exit='collapsed'
						transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}>
						{children}
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
