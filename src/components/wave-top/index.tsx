import { FunctionComponent, ReactNode } from 'react';

// Style
import style from './style.module.scss';

// Images
import WaveTopImg from '../../assets/img/wave-top.png';

const WaveTop: FunctionComponent = (): ReactNode => {
	return (
		<div className={style.wave_top}>
			<img src={WaveTopImg} alt='Wave Top' />
		</div>
	);
};

export default WaveTop;
