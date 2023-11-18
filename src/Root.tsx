import {Composition} from 'remotion';
import {Main} from './Main';

// comment test

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="Main"
				component={Main}
				durationInFrames={8650}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
