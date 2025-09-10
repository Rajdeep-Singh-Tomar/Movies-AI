
import { useSelector } from 'react-redux';
import useNowPlayingMovie from '../hooks/useNowPlayingMovie'
import usePopularMovie from '../hooks/usePopularMovie';
import Header from './Header'
import MainComponent from './MainComponent';
import SecondryComponent from './SecondryComponent';
import GptSearch from './GptSearch';


const Browser = () => {
const showGptSearch = useSelector(store=>store.gpt. showGptSearch);
useNowPlayingMovie();
usePopularMovie();

 
  return (
    <div >
      <div className='absolute z-90 w-full h-40'><Header/></div> 
      {
        showGptSearch?<GptSearch/>:<> <MainComponent/>
      <SecondryComponent/></>
      }
  
    
     
    </div>
  )
}

export default Browser
