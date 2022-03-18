import React from 'react'
import { useCharacter } from '../hooks/useCharacter';
import {useParams} from 'react-router-dom';

export const Character = () => {
    const {id} = useParams()

   const {error, loading, data} = useCharacter(id)
   console.log({
       error,
       loading,
       data
   })
   if(error) return <div>something went wrong</div>
   if(loading) return <div className='spinner'><h1>spinnng</h1></div>
  return (
    <div className='character'>
        <img src={data.character.image} />
        <div className='content'>
            <h2>{data.character.name}</h2>
            <p>{data.character.gender}</p>
            <div className='episode'>
                {
      data && data.character.episode.map(epi =>{
                        return <div>

                            {epi.name} - <b>{epi.episode}</b>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
  )
}
