import { FunctionComponent, ReactNode } from 'react';

// Style
import style from './style.module.scss';

// Images
import Logo from '../../assets/img/logo.png';

const Navbar: FunctionComponent = (): ReactNode => {
	return (
		<nav className={style.navbar}>
			<a href='#' className={style.logo}>
				<img src={Logo} alt='Logo' />
				<span>Best Music</span>
			</a>
			<div className={style.menu}>
				<ul>
					<li>
						<a href='#' className='btn'>
							Login
						</a>
					</li>
					<li>
						<a href='#' className='btn'>
							Sign up
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
