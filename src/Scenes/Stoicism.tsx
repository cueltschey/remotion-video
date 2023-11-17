import { AbsoluteFill } from "remotion"
import { SceneTitle } from "./SceneTitle"

export const Stoicism : React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor:"#343434"}}>
      <SceneTitle 
        textSize={60} 
        start={1170} 
        textColor='white' 
        text='Point One, Stoicism'/>
    </AbsoluteFill>
  )
}


