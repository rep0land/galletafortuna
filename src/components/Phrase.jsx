import React from 'react'

const Phrase = ({phraseRandom}) => {

    console.log(phraseRandom)

  return (
    
    
   <p className='app__phrase'>{phraseRandom.phrase}</p>
        
    
  )
}

export default Phrase