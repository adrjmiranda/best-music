import { FunctionComponent, ReactNode } from 'react';

// Style
import style from './style.module.scss';

// Data
import influencersData from '../../assets/data/influencers';
import InfluencerCard from '../influencer-card';

const Influencers: FunctionComponent = (): ReactNode => {
	return (
		<div className={style.influencers}>
			<div className='wrapper'>
				<h2>Top influencers</h2>
				<div className={style.content}>
					{influencersData.length > 0 &&
						influencersData.map((data) => (
							<InfluencerCard props={data} key={data.id} />
						))}
				</div>
			</div>
		</div>
	);
};

export default Influencers;
