import { FunctionComponent, ReactNode } from 'react';

// Style
import style from './style.module.scss';

// Components
import Influencers from '../influencers';
import Statistics from '../statistics';
import WaveTop from '../wave-top';
import WaveBottom from '../wave-bottom';

const About: FunctionComponent = (): ReactNode => {
	return (
		<div className={style.about}>
			<WaveTop />
			<div className='wrapper'>
				<div className={style.content}>
					<Influencers />
					<Statistics />
				</div>
			</div>
			<WaveBottom />
		</div>
	);
};

export default About;
