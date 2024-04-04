import { FunctionComponent, ReactNode } from 'react';

// Style
import style from './style.module.scss';

// Images
import CatImg from '../../assets/img/cat-bg.png';

import Button from '../button';

const Statistics: FunctionComponent = (): ReactNode => {
	return (
		<div className={style.statistics}>
			<div className='wrapper'>
				<div className={style.content}>
					<div className={style.info}>
						<h3>The trending songs</h3>
						<p>The best hits you find here</p>
						<ul>
							<li>
								<span>2.53M</span>
								<span>Downloads</span>
							</li>
							<li>
								<span>2.1M</span>
								<span>Likes</span>
							</li>
							<li>
								<span>10.5M</span>
								<span>Shares</span>
							</li>
						</ul>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Voluptatum expedita dolore vel aspernatur neque repudiandae
							ratione, rem illum praesentium odit libero accusantium dicta
							adipisci. Mollitia error eveniet labore explicabo quae!
						</p>
						<Button type='button' btnText='Learn more' />
					</div>
					<div className={style.img}>
						<img src={CatImg} alt='Cat Image' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Statistics;
