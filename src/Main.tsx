import {spring, staticFile} from 'remotion';
import {
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
  Audio,
} from 'remotion';
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";


import {Stoicism} from './Scenes/Stoicism'
import {Argument} from './Scenes/Argument'
import {Subtitle} from './HelloWorld/Subtitle';
import {Title} from './HelloWorld/Title';
import {Thinker} from './HelloWorld/Thinker'
import {z} from 'zod';
import {zColor} from '@remotion/zod-types';

export const myCompSchema = z.object({
	titleText: z.string(),
	titleColor: zColor(),
});

export const Main: React.FC<z.infer<typeof myCompSchema>> = ({
	titleText: propOne,
	titleColor: propTwo,
}) => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();


	// A <AbsoluteFill> is just a absolutely positioned <div>!
	return (
    <>
    <TransitionSeries>
		<TransitionSeries.Sequence durationInFrames={1140} style={{backgroundColor: '#343434'}}>
			<AbsoluteFill>
        <Sequence from={0}>
          <Thinker/>
        </Sequence>
				<Sequence from={35}>
					<Title titleText={propOne} titleColor={propTwo}/>
				</Sequence>
				<Sequence from={75}>
					<Subtitle />
				</Sequence>
			</AbsoluteFill>
		</TransitionSeries.Sequence>
    <TransitionSeries.Transition 
          presentation={slide()}
          timing={linearTiming({durationInFrames: 30})} 
        />
    <TransitionSeries.Sequence durationInFrames={570} >
      <Argument/>
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition 
          presentation={slide()}
          timing={linearTiming({durationInFrames: 30})} 
        />
    <TransitionSeries.Sequence durationInFrames={1470}>
      <Stoicism/>
    </TransitionSeries.Sequence>

    </TransitionSeries>
      <Sequence from={0}>
      <Audio src={staticFile("intro.wav")}/>
      </Sequence>
      <Sequence from={1140}>
      <Audio src={staticFile("argument.wav")}/>
      </Sequence>
      <Sequence from={1710}>
      <Audio src={staticFile("stoicism.wav")}/>
      </Sequence>
      <Sequence from={3180}>
      <Audio src={staticFile("existentialism.wav")}/>
      </Sequence>
      <Sequence from={4770}>
      <Audio src={staticFile("fitness.wav")}/>
      </Sequence>
      <Sequence from={6180}>
      <Audio src={staticFile("conclusion.wav")}/>
      </Sequence>
   </> 
	);
};
