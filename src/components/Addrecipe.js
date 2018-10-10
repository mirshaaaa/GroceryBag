import React, { Component } from "react";
import Ingredients from "./Ingredients";
import Addingredient from "./Addingredient";
import { Consumer } from "../context";
import uuid from "uuid";

export default class Addrecipe extends Component {
  state = {
    id: "",
    title: " ",
    description: "",
    link: "",
    ingredients: []
  };

  handler=()=>{
      console.log("cacat"); //aici marele cacat de handler cu callback din child element ca sa forteze re render pe parent schimband state-ul in fix acelasi state.2 ore
      this.setState({ state: this.state });
  }
  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const { id, title, description, link, ingredients } = this.state;
    const newRecipe = {
      id: uuid(),
      title,
      description,
      link,
      ingredients
    };

    dispatch({
      type: "ADD_RECIPE",
      payload: newRecipe
    });

    this.setState({
        id: "",
        title: "Title",
        description: "",
        link: "",
        ingredients: []
    });
    
    this.props.history.push('/');

  };

  render() {
    const { id, title, description, link, ingredients } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card bg-light mb-3 mt-5 mx-auto">
              <div className="card-header">Add recipe</div>
              <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <form onSubmit={this.onSubmit.bind(this,dispatch)}>
                  <div className="form-group">
                    <label className="col-form-label" htmlFor="inputTitle">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      placeholder="Title"
                      id="inputTitle"
                      value={title}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="col-form-label" htmlFor="inputSource">
                      Source
                    </label>
                    <input
                      type="text"
                      name="link"
                      className="form-control"
                      placeholder="Source"
                      id="inputSource"
                      value={link}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="exampleTextarea">Steps/info</label>
                    <textarea
                      className="form-control"
                      name="description"
                      id="inputsteps"
                      rows="4"
                      value={description}
                      onChange={this.onChange}
                    />
                  </div>

                  <Ingredients key={id} id={id} recipe={this.state} />
                  <Addingredient  recipe={this.state}  action={this.handler}/>

                  <hr className="my-4" />

                  <input
                    type="submit"
                    value="Save Recipe"
                    className="btn btn-primary btn-lg btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
