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
	position: 'absolute',
	top: 200,
  left: 100,
	width: '50%',
}

export const SceneText : React.FC<{
  start: number;
  textColor: string;
  text: string;
  textSize: number;
}> = ({start, textColor, text, textSize}) => {
  const { fps } = useVideoConfig()
  return (
  <Sequence from={0}>
      <p style={titleStyle}>
    {text.split(" ").map((t : string, i: number) => {
				const delay = (i * 3) + (start / fps);
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
	            fontSize: textSize,
							opacity: scale,
						}}
					>
						{t}
					</span>
				);
			})}
      </p>
  </Sequence>
  )
}

