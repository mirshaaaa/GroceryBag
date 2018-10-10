import React, { Component } from 'react'
import {Consumer} from'../context';
import Ingredients from './Ingredients'

class Recipe extends Component {

    state={
        showRecipeDetails:false
    };

    onShowClick=(e) =>{this.setState({showRecipeDetails:!this.state.showRecipeDetails})};

    

    onDeleteClick=(id,dispatch) =>{
        dispatch({
            type:'DELETE_RECIPE',
            payload:id

        })
    }

    onAddClick=(ingredients,value,dispatch) =>{
        ingredients.forEach(ingredient=> 
         {    dispatch({
            type:'ADD_INGREDIENT',
            payload:ingredient

        })}
        )
    }


  render() {
      const {id,title,description,link,ingredients}=this.props.recipe;
      const {showRecipeDetails} =this.state;


    return (

        <Consumer>
            {value=>{
                const {dispatch} =value;
                return(
                <div className="card bg-light mb-3 mt-3 mx-auto">
                <div onClick={this.onShowClick} className="card-header">{title}
                    
                    <i className="fas fa-chevron-down"></i>
                </div>
                
                

                {showRecipeDetails ?(
                     <div className="card-body">
                     <i onClick={this.onAddClick.bind(this,ingredients,value,dispatch)} className="fas fa-2x fa-plus-square"></i>
                   
                     <br/> <br/>
                     
                     <h4 className="card-title">{description}</h4>
                        


                        <Ingredients key={id} id={id} recipe={this.props.recipe}/>
                        <a target="#blank" href={link} className="card-title">Source <i className="fas fa-link"/></a>
                        <i className="fas fa-2x fa-times-circle" onClick={this.onDeleteClick.bind(this,id,dispatch)}></i>
                     </div> 
                ):null}
                  
            </div>)
            }}
            </Consumer>
      
        
    )
  }
}
export default Recipe;