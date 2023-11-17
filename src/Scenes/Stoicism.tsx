import { AbsoluteFill } from "remotion"
import SceneTitle from "./SceneTitle"

export const Stoicism : React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor:"#343434"}}>
      <SceneTitle start={1170} textColor="white" text="testing my scenetitle"/>
    </AbsoluteFill>
  )
}

