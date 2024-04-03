import { FunctionComponent, ReactNode } from 'react';

// Components
import Header from './components/header';
import Footer from './components/footer';
import About from './components/about';

const App: FunctionComponent = (): ReactNode => {
	return (
		<div>
			<Header />
			<About />
			<Footer />
		</div>
	);
};

export default App;
