import React, { Component } from 'react';
import Recipe from './Recipe';
import {Consumer} from '../context';
import Addrecipe from './Addrecipe'

export default class Recipes extends Component {
  render() {

    return(
        <div>
        <Consumer>
            
            {value =>{
                const{ recipes}=value;
                return(<div>
                    {recipes.map(recipe=> (<Recipe
                        key={recipe.id}
                        recipe={recipe}
                        />
                    ))}
                 </div>)
            }}
        </Consumer>
            </div>
    )
  }
}
