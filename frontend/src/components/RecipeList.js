import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom';

const RecipeList = (props) => {
    console.log(props)
    //destructue comes througt as props.recipes 
    const {recipes} = props
    console.log()
    return (
        <div>
                 {recipes && recipes.map((recipe) =>(
                    <div>
                    <Card className="col-12">
                    <Link to={{
                        pathname: `/recipe/${recipe.uuid}`,
                        search: '?query=abc',
                        recipe: recipe 
                        }}
                        
                        >
                        <Card.Title key={recipe.uuid}>{recipe.title}</Card.Title>
                    </Link>
                    
                    <div className="row">
                        <div className="col-4">
                        <Card.Img className='col-4 m-2' src={recipe.images.small} style ={{width:'90%'}}/>

                        </div>
                        <Card.Body className='col-7'>{recipe.description}
                       
                        <p> <span className="m-2"><strong>Prep time:</strong> {recipe.prepTime}</span><strong>Servings:</strong> <span className="m-2">{recipe.servings}</span></p>
                        </Card.Body>
                    </div>
                    

                </Card>

                     </div>
                   

                ))}
        </div>
    )
}

export default RecipeList
