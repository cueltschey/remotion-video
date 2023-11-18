import React from 'react'
import { AbsoluteFill, Sequence } from 'remotion'
import { Subtitle} from '../HelloWorld/Subtitle'
import { Title } from '../HelloWorld/Title'
import { Thinker } from '../HelloWorld/Thinker'



 export const Intro = () => {
  return (
    <AbsoluteFill>
        <Sequence from={0}>
          <Thinker/>
        </Sequence>
				<Sequence from={35}>
					<Title titleText={"A Mirror of Stone: The Thinker"} titleColor={"white"}/>
				</Sequence>
				<Sequence from={75}>
					<Subtitle />
				</Sequence>
			</AbsoluteFill>  )
}

