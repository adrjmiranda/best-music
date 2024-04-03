import { FunctionComponent, ReactNode } from 'react';

// Style
import style from './style.module.scss';

// Images
import WaveBottomImg from '../../assets/img/wave-bottom.png';

const WaveBottom: FunctionComponent = (): ReactNode => {
	return (
		<div className={style.wave_bottom}>
			<img src={WaveBottomImg} alt='Wave Bottom' />
		</div>
	);
};

export default WaveBottom;
