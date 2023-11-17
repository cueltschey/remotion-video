import { AbsoluteFill } from 'remotion'
import {SceneTitle} from './SceneTitle'

export const Argument : React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor: "#353535"}}>
        <SceneTitle text='My Argument Structure' textColor='white' start={1140} />
    </AbsoluteFill>
  )
}

