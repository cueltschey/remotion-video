import React from "react";
import { Sequence } from "remotion";
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import { FONT_FAMILY } from "../HelloWorld/constants";

const word: React.CSSProperties = {
	marginLeft: 10,
	marginRight: 10,
	display: 'inline-block',
};

const titleStyle: React.CSSProperties = {
  fontFamily: FONT_FAMILY,
	fontWeight: 'bold',
	fontSize: 60,
	textAlign: 'center',
	position: 'absolute',
	bottom: 160,
	width: '100%',
}

export const SceneTitle : React.FC<{
  start: number;
  textColor: string;
  text: string;
}> = ({start, textColor, text}) => {
  const { fps } = useVideoConfig()
  return (
  <Sequence from={start}>
      <h1 style={titleStyle}>
    {text.split(" ").map((t : string, i: number) => {
				const delay = i * 5;
        const frame = useCurrentFrame()
				const scale = spring({
					fps: fps,
					frame: frame - delay,
					config: {
						damping: 200,
					},
				});

				return (
					<span
						key={t}
						style={{
							...word,
							color: textColor,
							transform: `scale(${scale})`,
						}}
					>
						{t}
					</span>
				);
			})}
      </h1>
  </Sequence>
  )
}

export default SceneTitle
