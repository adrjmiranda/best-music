import { FunctionComponent, ReactNode } from 'react';

// Style
import style from './style.module.scss';

// Props
interface ButtonProps {
	type: 'submit' | 'reset' | 'button' | undefined;
	btnText: string;
}

const Button: FunctionComponent<ButtonProps> = ({
	type,
	btnText,
}): ReactNode => {
	return (
		<button type={type} className={style.button}>
			{btnText}
		</button>
	);
};

export default Button;
