import React from 'react'
import GptSearchbar from './GptSearchbar'
import GptSuggestions from './GptSuggestions'

const GptSearch = () => {
  return (
    <div>
        <div className="fixed -z-20">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
       alt="back image"  />
       </div>
      <GptSearchbar/>
      <GptSuggestions/>
    </div>
  )
}

export default GptSearch
