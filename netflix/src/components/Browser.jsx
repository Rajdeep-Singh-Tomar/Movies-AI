
import useNowPlayingMovie from '../hooks/useNowPlayingMovie'
import usePopularMovie from '../hooks/usePopularMovie';
import Header from './Header'
import MainComponent from './MainComponent';
import SecondryComponent from './SecondryComponent';


const Browser = () => {

useNowPlayingMovie();
usePopularMovie();

 
  return (
    <div >
     <div className='absolute z-90 w-full h-40'><Header/></div> 
      <MainComponent/>
      <SecondryComponent/>
    </div>
  )
}

export default Browser
