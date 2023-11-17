import { AbsoluteFill } from 'remotion'
import {SceneTitle} from './SceneTitle'
import {SceneText} from './SceneText'

export const Argument : React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor: "#353535"}}>
        <SceneTitle 
        textSize={60} 
        text='My Argument Structure' 
        textColor='white' 
        start={1140} />
        <SceneText 
        textSize={50} 
        text='The argumnet is described in many words and in many ways'
        textColor='white' 
        start={1340} />
    </AbsoluteFill>
  )
}

