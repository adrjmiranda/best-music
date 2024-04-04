import { FunctionComponent, ReactNode } from 'react';

// Style
import style from './style.module.scss';

// Icons
import { FaGooglePlay } from 'react-icons/fa6';
import { FaApple } from 'react-icons/fa';
import { TiHeart } from 'react-icons/ti';

const Footer: FunctionComponent = (): ReactNode => {
	return (
		<footer className={style.footer}>
			<div className='wrapper'>
				<div className={style.content}>
					<div className={style.download}>
						<a href='#' className='btn'>
							<FaGooglePlay />
							<span>Google Play</span>
						</a>
						<a href='#' className='btn'>
							<FaApple />
							<span>Apple Store</span>
						</a>
					</div>
					<p>
						Made with <TiHeart /> by Adriano Miranda &copy; 2024
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
