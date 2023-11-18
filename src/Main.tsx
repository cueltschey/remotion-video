import {staticFile, Sequence, Audio } from 'remotion';
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";


import { Intro } from './Scenes/Intro'
import { Argument, Conclusion, End, Existentialism, Fitness, Stoicism } from './Scenes/Scenes'


export const Main: React.FC = () => {


	// A <AbsoluteFill> is just a absolutely positioned <div>!
	return (
    <>
    <TransitionSeries>
		<TransitionSeries.Sequence durationInFrames={1170} style={{backgroundColor: '#343434'}}>
          <Intro />
		</TransitionSeries.Sequence>
    <TransitionSeries.Transition 
          presentation={slide()}
          timing={linearTiming({durationInFrames: 30})} 
        />
    <TransitionSeries.Sequence durationInFrames={600} >
      <Argument/>
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition 
          presentation={slide()}
          timing={linearTiming({durationInFrames: 30})} 
        />
    <TransitionSeries.Sequence durationInFrames={1500}>
      <Stoicism/>
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition 
          presentation={slide()}
          timing={linearTiming({durationInFrames: 30})} 
        />
    <TransitionSeries.Sequence durationInFrames={1620}>
      <Existentialism/>
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition 
          presentation={slide()}
          timing={linearTiming({durationInFrames: 30})} 
        />
    <TransitionSeries.Sequence durationInFrames={1440}>
      <Fitness/>
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition 
          presentation={slide()}
          timing={linearTiming({durationInFrames: 30})} 
        />
    <TransitionSeries.Sequence durationInFrames={1950}>
      <Conclusion/>
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition 
          presentation={slide()}
          timing={linearTiming({durationInFrames: 30})} 
        />
    <TransitionSeries.Sequence durationInFrames={1500}>
      <End/>
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
      <Sequence from={8100}>
        <Audio src={staticFile("end.wav")} />
      </Sequence>
   </> 
	);
};
