import React from 'react'
import { ListGroup, Container } from 'react-bootstrap';

const SingleRecipe = (props) => {
    console.log('singrep', props.location.recipe);
    const recipe = props.location.recipe
    return (
        <Container>
            <h2>{recipe.title}</h2>
            <h4>{recipe.description}</h4> 
            <img src={recipe.images.medium}/>
            <h5>Ingredients:</h5>  
            <ListGroup>
                {recipe.ingredients.map(item =>
                    <ListGroup.Item key={item.uuid}>{item.name}</ListGroup.Item>)}
            </ListGroup>
            <h2>Directions:</h2>
            <ol>
                {recipe.directions.map((item) => (<li style= {{float:'left'}}>{item.instructions}</li>))}
            </ol>

        </Container>
    )
}

export default SingleRecipe
