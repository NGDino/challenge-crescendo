import React, {useEffect, useState} from 'react';
import { Container} from 'react-bootstrap';

import RecipeList from './RecipeList'

import axios from 'axios';

const AllRecipes = () => {
    // define state to set array of data sources
    let [recipes, setRecipes] = useState([]);
    let [loading, setLoading] = useState(true)
    //use effecct to fetch on page load if adding filters, sort, etc would also refresh when changed
    useEffect( ()=>{
        const getRecipes = async () => {
            const recipeData = await axios.get('/recipes')
            console.log(recipeData.data)
            setRecipes(recipeData.data)
            setLoading(false)
            console.log(recipes,'state')
        }
        getRecipes()
    },[loading])
    return (
        <Container>
            {loading ? <div>Loading...</div> :
                <RecipeList recipes = {recipes}/>
            }
           
        </Container>
            
    )
}

export default AllRecipes
