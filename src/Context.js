import React, { createContext, useContext,useState, useEffect } from 'react'
import Colors from './components/Colors';
import Request from './components/Request';

const MovieContext = createContext()


const Base_URL = 'https://api.themoviedb.org/3/'

const AppContextProvider = ({children}) =>{
    const [movie, setMovie] = useState([])
    const [colors, setColors] = useState([])
    // const [getMovie, setGetMovie] = useState({
    //     randomPoster:'',
    //     randomTitle:'',
    //     randomDesc: ''
    // })

    useEffect(() =>{
       nextMovie()
    },[])
    // console.log(movie)
    // const newMovie =() =>{
    //     const randomMovie = Math.floor(Math.random() * movie.length)
    //     const movieUrl  = movie[randomMovie].poster_path
    //     const movieTitle = movie[randomMovie].title
    //     const movieDesc = movie[randomMovie].overview
    //     setGetMovie(prevMovie => ({...prevMovie, randomPoster:movieUrl, randomTitle:movieTitle, randomDesc:movieDesc}))
        
    // }
    const nextMovie= ()=>{
        fetch(`${Base_URL}${Request.fetchTrending}`)
        .then(res => res.json())
        .then(data => setMovie(data.results[
            Math.floor(Math.random() * data.results.length-1)
        ]))
        newColor()
    }
    const newColor = () =>{
        const colorArr = Colors.colors
        const Random = Math.floor(Math.random() * colorArr.length)
        const randomColor = colorArr[Random].color
        const randomBackground = colorArr[Random].background
        const randomCardBackground = colorArr[Random].cardbackground
        setColors(prevColor => ({...prevColor, randomColor, randomBackground, randomCardBackground}))
        

    }
    // console.log(colors.randomBackground)
    const truncate = (string, n) =>{
        return string?.length> n ?string.substr(0, n-1) + '...': string
    }
    const styles ={
      background: colors.randomBackground,
      transition: 'width 20s linear 100s'
    }

    return <MovieContext.Provider value = {{movie,truncate,nextMovie, colors, styles,}}>
        {children}
    </MovieContext.Provider>
} 
export const useGlobalContext = () =>{
    return useContext(MovieContext)
}
export {AppContextProvider,MovieContext}