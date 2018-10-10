import React, { Component } from "react";
import { Consumer } from "../context";
import Ingredient from "./Ingredient"

class Ingredients extends Component {
  render() {
    const {id,title,description,link,ingredients}=this.props.recipe;
    return (
      <Consumer>
        {value => {
          return (
            <div>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Ingredient</th>
                    <th className="alnright" scope="col">
                      Quantity
                    </th>
                  </tr>
                </thead>

                <tbody>
                {ingredients.map(ingredient=> (
                <Ingredient ingredient={ingredient} recipe={this.props.recipe}/>
                    ))}
                </tbody>
              </table>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default Ingredients;
