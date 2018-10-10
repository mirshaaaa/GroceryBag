import React, { Component } from "react";
import { Consumer } from "../context";

class Ingredient extends Component {
  render() {
    const { id, title, description, link, ingredients } = this.props.recipe;
    return (
      <Consumer>
        {value => {
          return (
            
              <tr className="table-primary">
                <th scope="row">{this.props.ingredient.ingredient_name} </th>
                <td className="alnright">
                  {this.props.ingredient.ingredient_quantity}{" "}
                  {this.props.ingredient.ingredient_unit}
                </td>
              </tr>
            
          );
        }}
      </Consumer>
    );
  }
}
export default Ingredient;
