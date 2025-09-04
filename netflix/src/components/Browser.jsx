
import useNowPlayingMovie from '../hooks/useNowPlayingMovie'
import Header from './Header'
import MainComponent from './MainComponent';
import SecondryComponent from './SecondryComponent';


const Browser = () => {

useNowPlayingMovie();

 
  return (
    <div >
     <div className='absolute z-90 w-full h-40'><Header/></div> 
      <MainComponent/>
      <SecondryComponent/>
    </div>
  )
}

export default Browser
