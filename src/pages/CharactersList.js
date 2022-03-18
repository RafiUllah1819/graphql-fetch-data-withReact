 import React from 'react';
import { useCharacters } from '../hooks/useCharacters';
import { Link } from 'react-router-dom';

 export const CharactersList = () => {
      const {error, loading, data} = useCharacters()
      console.log(error)
     if(loading) return <h1 className="spinner">Spinner ....</h1>

   return (
     <div className='characters'>
      {
          data.characters.results.map((character) =>{
              return(
                  <div className='result'>
                   <Link to={`/${character.id}`}>
                   <img src={character.image}/>
                      <h3>{character.name}</h3>
                   </Link>
                  </div>
              )
          })
      }
     </div>
   )
 }
 