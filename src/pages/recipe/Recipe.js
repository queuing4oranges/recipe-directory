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
      {recipe && 
      <>
      <h2 className='page-title'>{recipe.title}</h2>
      <p>Takes {recipe.cookingTime} to cook.</p>
      <ul>{recipe.ingredients.map(ingredient => (<li key={ingredient}>{ingredient}</li>))}</ul> 
      <p>Method: {recipe.method}</p>
      </>    
      }                        
    </div>

  )
}
//logically -> map isnt used with one id!!
