import { AbsoluteFill } from "remotion"
import { SceneTitle, SceneText, SceneImg, SceneList } from './SceneComponents'
import React from "react"
import fitness from '../assets/fitness.png'
import stoic from '../assets/stoic_thinker.png'
import existential from '../assets/existentialism.jpg'
import cartoon from '../assets/cartoon.jpg'

const background : string = "#343434"
const background2 : string = "#343450"

export const Argument : React.FC = () => {
  const argumentTitle: string = 'Argument Overview:'
  const argumentText: string = 'My argument will be in three main parts, Stoicism, Existentialism, and Fitness Culture. The pupose is to convince you of the unique importance that the thinker has in western thought and culture.'
  return (
    <AbsoluteFill style={{backgroundColor: background }}>
        <SceneTitle 
        textSize={60} 
        text={argumentTitle} 
        textColor='white' 
        start={1140} />
        <SceneText 
        textSize={50} 
        text={argumentText}
        textColor='white' 
        start={1340} />
      <SceneImg 
      src={cartoon}
      start={1340}
      width={'40%'}
      height={'70%'}/>
      
    </AbsoluteFill>
  )
}

export const Stoicism : React.FC = () => {
  const title: string = "Philosphy One, Stoicism"
  const points: string[] = ["Popular Stoicism can be viewed as an expert system providing individuals with a specific vision of happiness and the good life, in addition to offering practical knowledge on how to define an area of individual agency by negotiating the boundaries between that which is within one’s power and that which is not.(Dopierla)"]
  return (
    <AbsoluteFill style={{backgroundColor: background2}}>
      <SceneTitle 
        textSize={60} 
        start={1170} 
        textColor='white' 
        text={title}/>
      <SceneList items={points} fontSize={40} color={"white"} start={1170} />
      <SceneImg 
      src={stoic}
      start={1340}
      width={'40%'}
      height={'50%'}/>
    </AbsoluteFill>
  )
}

export const Existentialism : React.FC = () => {
  const title: string = "Philosphy Two, Existentialism"
  const points: string[] = ["The common interest which unites Existentialist philosophers is their interest in human freedom. Readers of Existentialist philosophy are being asked, not merely to contemplate the nature of freedom, but to experience freedom, and to practise it.(Warnock)"]
  return (
    <AbsoluteFill style={{backgroundColor: background2}}>
      <SceneTitle 
        textSize={60} 
        start={1170} 
        textColor='white' 
        text={title}/>
      <SceneList items={points} fontSize={40} color={"white"} start={1200} />
      <SceneImg 
      src={existential}
      start={1340}
      width={'40%'}
      height={'50%'}/>
    </AbsoluteFill>
  )
}

export const Fitness : React.FC = () => {
  const title: string = "Philosphy Three, Fitness Culture"
  const points: string[] = ["Instagram is clearly saturated with posts depicting very lean and very muscular white men exercising. Posts showing this body type received overwhelmingly positive responses and showed a strong health focus.(Gultzow et. al.)"]
  return (
    <AbsoluteFill style={{backgroundColor: background2}}>
      <SceneTitle 
        textSize={60} 
        start={1170} 
        textColor='white' 
        text={title}/>
      <SceneList items={points} fontSize={50} color={"white"} start={1200} />
      <SceneImg 
      src={fitness}
      start={1340}
      width={'40%'}
      height={'70%'}/>
    </AbsoluteFill>
  )
}

export const Conclusion: React.FC = () => {
  const title = "Conclucsion"
  const text = "The thinker is an incredible work of art bacause of the way it shows the mind of the onlooker in the way the onlooker interprets it. This revealing quality is completely unique to great works of art that speak to the soul."
  return(
    <AbsoluteFill style={{background: background}}>
      <SceneTitle 
        textSize={60} 
        start={1170} 
        textColor='white' 
        text={title}/>
      <SceneText 
        textSize={50} 
        text={text}
        textColor='white' 
        start={1340} />
    </AbsoluteFill>
  )
}

export const End: React.FC = () => {
  const title = "Sources:"
  const text : string[] = ["Dopierała Renata “Popular Stoicism in the Face of Social Uncertainty” Wydawnictwo Uniwersytetu Łódzkiego no. 4 December 2022, pp. 154-170 https://www.ceeol.com/search/article-detail?id=1075832 accessed November 3 2023","Gültzow Thomas et al. “Male body image portrayals on instagram” Cyberpsychology, Behavior, and Social Networking. Vol. 23, No. 5, May 2020 https://www.liebertpub.com/doi/full/10.1089/cyber.2019.0368 accessed November 3 2023.","Warnock, Mary (1970). Existentialism. New York,: Oxford University Press."]
  return(
    <AbsoluteFill style={{background: background}}>
      <SceneTitle 
        textSize={60} 
        start={1170} 
        textColor='white' 
        text={title}/>
      <SceneList 
        fontSize={30} 
        items={text}
        color='white' 
        start={1340}/>
    </AbsoluteFill>
  )
}


