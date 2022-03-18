 import React from 'react';
import { useCharacters } from '../hooks/useCharacters';

 export const CharactersList = () => {
      const {error, loading, data} = useCharacters()
      console.log(error)
     if(loading) return <h1 className="spinner">Spinner ....</h1>

   return (
     <div className='characters'>
      {
          data.characters.results.map((characters) =>{
              return(
                  <div className='result'>
                      <img src={characters.image}/>
                      <h3>{characters.name}</h3>
                  </div>
              )
          })
      }
     </div>
   )
 }
 