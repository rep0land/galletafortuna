
import { useState } from 'react'
import './App.css'
import phrases from './utils/phrases.json'
import bgArr from './utils/bgArr.json'
import getRandomFromArr from './services/getRandomFromArr'
import Phrase from './components/Phrase'
import ButtonPhrase from './components/ButtonPhrase'


function App() {

  const [phraseRandom, setPhraseRandom] = useState (getRandomFromArr(phrases))

  const [bgApp, setBgApp] = useState(getRandomFromArr(bgArr))

  const objStyle = {
    backgroundImage: `url('../fondo${bgApp}.png')`
  }
   
  return (
    
    <div style={objStyle} className='app'> 
      <h1 className='app__title'>Galleta  de  la  Fortuna</h1> 

      <article className='app__card'>

        <Phrase
        phraseRandom = {phraseRandom}
        />

        <ButtonPhrase
        setPhraseRandom = {setPhraseRandom}
        setBgApp = {setBgApp}
       />

      </article>


    </div>

  
      
  )
}

export default App
