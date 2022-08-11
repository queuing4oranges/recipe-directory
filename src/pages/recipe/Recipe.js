import './Recipe.css';
import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';

export default function Recipe() {
  const {id} = useParams()
  const { data:recipe, isPending, error } = useFetch("http://localhost:3000/recipes/"+id)  

  console.log(recipe)

  return (
    <div className='recipe'>
      {error && <div className='error'>{error}</div>}
      {isPending && <div className='loading'>Waiting...</div>}
      {recipe && <h1>{recipe.title}</h1>}                        
    </div>

  )
}
//doesnt need map fct since it's just ONE recipe!
