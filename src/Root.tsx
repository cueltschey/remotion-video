import {Composition} from 'remotion';
import {Main, myCompSchema} from './Main';

// comment test

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="Main"
				component={Main}
				durationInFrames={10800}
				fps={30}
				width={1920}
				height={1080}
				schema={myCompSchema}
				defaultProps={{
          titleText: 'A mirror of stone: Rodin\'s Thinker',
					titleColor: '#91EAE4',
				}}
			/>
		</>
	);
};
