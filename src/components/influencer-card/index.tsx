import { FunctionComponent, ReactNode } from 'react';

// Style
import style from './style.module.scss';

// Props
interface InfluencerCardProps {
	id: number;
	name: string;
	image: string;
	followers: number;
}

const InfluencerCard: FunctionComponent<{ props: InfluencerCardProps }> = ({
	props,
}): ReactNode => {
	return (
		<div className={style.influencer_card}>
			<div className={style.img}>
				<img src={props.image} alt={props.name} />
			</div>
			<div className={style.info}>
				<h4>{props.name}</h4>
				<span>
					<b>{props.followers}k</b> followers
				</span>
			</div>
		</div>
	);
};

export default InfluencerCard;
