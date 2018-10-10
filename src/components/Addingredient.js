import React, { Component } from "react";

export default class Addingredient extends Component {
  state = {
    ingredient_name: "",
    ingredient_quantity: 0,
    ingredient_unit: "g"
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  onIngredientAdd = e => {
    console.log(this.props.recipe);
    const a=this.props.recipe;
    console.log(a);

    this.props.recipe.ingredients.push({
      ingredient_name: this.state.ingredient_name,
      ingredient_quantity: this.state.ingredient_quantity,
      ingredient_unit: this.state.ingredient_unit
    });

    this.props.action();

    this.setState( {
        ingredient_name: "",
        ingredient_quantity: 0,
        ingredient_unit: "g"
      });

  
  };

  render() {
    const {
      ingredient_name,
      ingredient_quantity,
      ingredient_unit
    } = this.state;
    return (
      <div>
        <div className="row">
          <div className="form-group col-5">
            <label className="col-form-label" htmlFor="inputIngredient">
              Add ingredient
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="ingredient"
              id="inputIngredient"
              name="ingredient_name"
              value={ingredient_name}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group col-4">
            <label className="col-form-label" htmlFor="inputCant">
              Quantity
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="quantity"
              id="inputQuantity"
              name="ingredient_quantity"
              value={ingredient_quantity}
              onChange={this.onChange}
            />
          </div>

          <div id="unitSelect" className="form-group col-3">
            <label className="col-form-label" htmlFor="inputCant">
              Unit
            </label>
            <select
              name="ingredient_unit"
              value={ingredient_unit}
              onChange={this.onChange}
              className="form-control"
              id="unitSelect"
            >
              <option>piece</option>
              <option>g</option>
              <option>kg</option>
              <option>ml</option>
              <option>l</option>
              <option>tablespoon</option>
              <option>teaspoon</option>
              <option>pack</option>
              <option>can</option>
              <option>pinch</option>
              <option>bunch</option>
             
            
            </select>
          </div>
        </div>
        <div className="row">
          <button
            type="button"
            onClick={this.onIngredientAdd}
            className="offset-1 btn btn-outline-secondary col-10"
          >
            Add ingredient!
          </button>
        </div>
      </div>
    );
  }
}
