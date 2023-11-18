import React from "react"
import { Sequence, spring, useCurrentFrame, useVideoConfig } from "remotion"
import { FONT_FAMILY } from "../HelloWorld/constants";

const imgStyle: React.CSSProperties = {
  position: "absolute",
  right: 100,
  bottom: 50,
}


export const SceneImg: React.FC<{
  start: number;
  src: string;
  width: string;
  height: string;
}> = ({start, src, width, height}) => {
  const {fps} = useVideoConfig()
  const frame = useCurrentFrame()
  const delay = (start / fps) 
  const opacity = spring({
    fps,
    frame: frame - delay, 
    config: {
    damping: 200,
  }

  })
  return (
    <Sequence from={0}>
      <img src={src} style={{...imgStyle,
        opacity: opacity,
        width: width,
        height: height}}/>
    </Sequence>
  )
}

const word: React.CSSProperties = {
	marginLeft: 10,
	marginRight: 10,
	display: 'inline-block',
};

const titleStyle: React.CSSProperties = {
  fontFamily: FONT_FAMILY,
	fontWeight: 'bold',
	textAlign: 'center',
	position: 'absolute',
	top: 50,
	width: '100%',
  whiteSpace: "pre-wrap",
}

export const SceneTitle : React.FC<{
  start: number;
  textColor: string;
  text: string;
  textSize: number;
}> = ({start, textColor, text, textSize}) => {
  const { fps } = useVideoConfig()
  return (
  <Sequence from={0}>
      <h1 style={titleStyle}>
    {text.split(" ").map((t : string, i: number) => {
				const delay = (i * 5) + (start / fps);
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

const textStyle: React.CSSProperties = {
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
      <p style={textStyle}>
    {text.split(" ").map((t : string, i: number) => {
				const delay = (i * 8) + (start / fps);
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


const listStyle: React.CSSProperties = {
  position: "absolute",
  top: 200,
  left: 100,
  fontFamily: FONT_FAMILY,
  width: "50%",
}


export const SceneList: React.FC<{
  items: string[];
  fontSize: number;
  color: string;
  start: number;
}> = ({start,items,fontSize,color}) => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  return (
    <Sequence from={0}>
      <ul style={{...listStyle, fontSize: fontSize, color: color}}>
        {items.map((t : string,i : number) => {
          const delay = (start / fps) + (5 * i)
          const opacity = spring({
            frame: frame - delay,
            fps,
            config: {
              damping: 200,
            }
          });
          return(
              <li key={i} style={{opacity: opacity}}>{t}</li>
            )
          })
        }
        
        
      </ul>
    </Sequence>
  )
}

