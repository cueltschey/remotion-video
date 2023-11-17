import React from 'react'
import thinker from '../assets/thinker.jpg'

const thinkerStyle : React.CSSProperties  = {
  width: '30%', 
  margin: 'auto',
  height: "60%",
  marginTop: "50px",
}


 export const Thinker : React.FC = () => {
  return (
    <div style={thinkerStyle}>
      <img style={{width:'100%', height:'100%'}} src={thinker}/>
    </div>
  )
}

