'@jsxImportSource @emotion/react'
import React from 'react'
import {FaStar, FaRegStar} from 'react-icons/fa'
import cast1 from '../assets/cast1.jpg'
import cast2 from '../assets/cast2.jpg'
import cast3 from '../assets/cast3.jpg'
import cast4 from '../assets/cast4.jpg'
import cast5 from '../assets/cast5.jpg'
import { useGlobalContext } from '../Context'


const Movie = () => {
    const {movie, truncate,  nextMovie, colors} = useGlobalContext()
     const {title, backdrop_path, original_title,original_name, name, overview,media_type} = movie
     const {randomCardBackground, randomColor} = colors
//  console.log(textColor)

// https://stackoverflow.com/questions/26070450/can-reactjs-programmatically-handle-before
 const background = randomCardBackground
 const color = randomColor
const styless = {
    '--background':background,
    
    
  
    }
    
  return (
    <div className='card'>
        
       
        <div className='poster' style={styless}>
            <img src ={`https://image.tmdb.org/t/p/original/${backdrop_path}` }alt='poster' className=''/>
          
        </div>
        
        <div className='details'>
            <p className='title' style={{'--color':color}}>{title || original_title || original_name || name}</p>
            <h3>Directed by James Cameron</h3>
            <div className='ratings'>
                <FaStar className='fa-star'/>
                <FaStar className='fa-star'/>
                <FaStar className='fa-star'/>
                <FaStar className='fa-star'/>
                <FaRegStar className='fa-star'/>
                <span>4/5</span>
            </div>
            <div className='tags'>
                <span>{media_type}</span>
                <span>Action</span>
            </div>
            <div className='info'>
                <p>{truncate(overview,  150)}</p>
            </div>
            <div className='cast'>
                <h4>Cast</h4>
                <ul>
                    <li><img src={cast1} alt='cast'/></li>
                    <li><img src={cast2} alt='cast'/></li>
                    <li><img src={cast3} alt='cast'/></li>
                    <li><img src={cast4} alt='cast'/></li>
                    <li><img src={cast5} alt='cast'/></li>
                </ul>
            </div>
            <div className='next'>
                <button className='button' onClick={nextMovie}>NEXT</button>
            </div>
        </div>

    </div>
  )
}

export default Movie