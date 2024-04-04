import { FunctionComponent, ReactNode } from 'react';

// Animation
import { motion } from 'framer-motion';

// Style
import style from './style.module.scss';

// Components
import Navbar from '../navbar';
import WaveBottom from '../wave-bottom';
import Button from '../button';

// Images
import MicrophoneImg from '../../assets/img/microphone-bg.png';

const Header: FunctionComponent = (): ReactNode => {
	return (
		<header className={style.header}>
			<Navbar />
			<div className='wrapper'>
				<div className={style.content}>
					<div className={style.info}>
						<h1>Best Music</h1>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
							repellendus quasi.
						</p>
						<Button type='button' btnText='Start now' />
					</div>
					<div className={style.img}>
						<motion.img
							whileInView={{
								scale: [0.9, 0.95, 1, 0.95, 0.9],
							}}
							transition={{ duration: 2, repeat: Infinity }}
							src={MicrophoneImg}
							alt='Microphone Music'
						/>
					</div>
				</div>
			</div>
			<WaveBottom />
		</header>
	);
};

export default Header;
