import React, { Component } from "react";
import { Consumer } from "../context";

export default class SList extends Component {
  onListReset = value => {
    value.dispatch({
        type: "RESET_LIST",
      });
  };

  render() {
    return (
      <div>
        <Consumer>
          {value => {
            const { slist } = value;
            return (
              <div className="card bg-light mb-3 mt-3 mx-auto">
                <div onClick={this.onShowClick} className="card-header">
                  Shopping List
                  
                </div>

                <div className="card-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Ingredient</th>
                        <th className="alnright" scope="col">
                          Quantity
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {slist.map(ingredient => {
                        return (
                          <tr className="table-primary">
                            <th scope="row">{ingredient.ingredient_name} </th>
                            <td className="alnright">
                              {ingredient.ingredient_quantity}{" "}
                              {ingredient.ingredient_unit}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>

                  <button
                    type="button"
                    onClick={()=>this.onListReset(value)}
                    className="offset-1 btn btn-outline-secondary col-10"
                  >
                    ResetList
                  </button>
                </div>
              </div>
            );
          }}
        </Consumer>
      </div>
    );
  }
}
