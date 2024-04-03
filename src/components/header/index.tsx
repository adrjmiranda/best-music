import { FunctionComponent, ReactNode } from 'react';

// Style
import style from './style.module.scss';

// Components
import Navbar from '../navbar';
import WaveBottom from '../wave-bottom';

const Header: FunctionComponent = (): ReactNode => {
	return (
		<header className={style.header}>
			<Navbar />
			<div className={style.content}></div>
			<WaveBottom />
		</header>
	);
};

export default Header;
