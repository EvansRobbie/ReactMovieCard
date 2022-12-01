
import './App.css';
import Movie from './components/Movie';
import { useGlobalContext } from './Context';


function App() {
    const { styles} = useGlobalContext()
     
  return (
    <div className="app" style={styles} >
      {/* <Movie movies = {movie?.backdrop_path} 
      title = {movie?.title || movie?.original_title || movie?.original_name || movie?.name}
        description ={movie.overview}
        tag = {movie.media_type}
        nextMovie ={nextMovie}
        truncate = {truncate}
        colors = {colors.randomCardBackground }
        textColor ={colors.randomColor}
      /> */}
      <Movie/>
    </div>
  );
}

export default App;
