import React, { Component } from "react";

const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_RECIPE":
      return {
        ...state,
        recipes: state.recipes.filter(recipe => recipe.id !== action.payload)
      };
    case "ADD_RECIPE":
      return {
        ...state,
        recipes: [action.payload, ...state.recipes]
      };
    case "RESET_LIST":
      return {
        ...state,
        slist: []
      };
    case "ADD_INGREDIENT":
      let ingredientAlreadyExists = false;
      state.slist.forEach(element => {if(element.ingredient_name==action.payload.ingredient_name) ingredientAlreadyExists = true;
        
      });
      if (ingredientAlreadyExists) {
        return {
          ...state,
          slist: [
            ...state.slist.map(
              ingredient =>
                ingredient.ingredient_name === action.payload.ingredient_name
                  ? {
                      ingredient_id: action.payload.ingredient_id,
                      ingredient_name: action.payload.ingredient_name,
                      ingredient_quantity:
                        ingredient.ingredient_quantity +
                        action.payload.ingredient_quantity,
                      ingredient_unit: action.payload.ingredient_unit
                    }
                  : ingredient
            )
          ]
        };
      } else {
        return {
          ...state,
          slist: [...state.slist, action.payload]
        };
      }

    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    recipes: [
      {
        id: 1,
        title: "Penne alla vodka",
        description:
          "Fill a stock pot or other large pot three-quarters full with water and heat over high. Toss in a handful of salt and bring to a boil while you do your other prep. Peel and finely chop 1 onion. ",
        link:
          "https://www.bonappetit.com/recipe/rigatoni-with-easy-vodka-sauce",
        ingredients: [
          {
            ingredient_id: 1,
            ingredient_name: "onion",
            ingredient_quantity: 1,
            ingredient_unit: "piece"
          },
          {
            ingredient_id: 2,
            ingredient_name: "garlic",
            ingredient_quantity: 4,
            ingredient_unit: "piece"
          },
          {
            ingredient_id: 3,
            ingredient_name: "parm",
            ingredient_quantity: 200,
            ingredient_unit: "g"
          },
          {
            ingredient_id: 4,
            ingredient_name: "pasta",
            ingredient_quantity: 200,
            ingredient_unit: "g"
          },
          {
            ingredient_id: 5,
            ingredient_name: "olive oil",
            ingredient_quantity: 3,
            ingredient_unit: "tablespoons"
          },
          {
            ingredient_id: 6,
            ingredient_name: "vodka",
            ingredient_quantity: 60,
            ingredient_unit: "ml"
          },
          {
            ingredient_id: 7,
            ingredient_name: "tomato paste",
            ingredient_quantity: 100,
            ingredient_unit: "ml"
          },
          {
            ingredient_id: 8,
            ingredient_name: "heavy cream",
            ingredient_quantity: 150,
            ingredient_unit: "ml"
          }
        ]
      },
      {
        id: 2,
        title: "Green Pesto Pasta",
        description: "Blend basil, boil pasta, mix and eat. ",
        link: "https://www.allrecipes.com/recipe/11887/pesto-pasta/",
        ingredients: [
          {
            ingredient_id: 1,
            ingredient_name: "basil",
            ingredient_quantity: 1,
            ingredient_unit: "bunch"
          },
          {
            ingredient_id: 2,
            ingredient_name: "pine nuts",
            ingredient_quantity: 60,
            ingredient_unit: "g"
          },
          {
            ingredient_id: 3,
            ingredient_name: "olive oil",
            ingredient_quantity: 3,
            ingredient_unit: "tablespoons"
          },
          {
            ingredient_id: 4,
            ingredient_name: "garlic",
            ingredient_quantity: 2,
            ingredient_unit: "piece"
          },
          {
            ingredient_id: 5,
            ingredient_name: "pasta",
            ingredient_quantity: 200,
            ingredient_unit: "g"
          }
        ]
      },
      {
        id: 3,
        title: "Pancakes",
        description: "Mix fry etc",
        link: "www.ceafalacuptor.com/asdasd",
        ingredients: [
          {
            ingredient_id: 1,
            ingredient_name: "flour",
            ingredient_quantity: 200,
            ingredient_unit: "g"
          },
          {
            ingredient_id: 2,
            ingredient_name: "baking powder",
            ingredient_quantity: 1,
            ingredient_unit: "pack"
          },
          {
            ingredient_id: 3,
            ingredient_name: "sugar",
            ingredient_quantity: 1,
            ingredient_unit: "tablespoons"
          },
          {
            ingredient_id: 4,
            ingredient_name: "egg",
            ingredient_quantity: 1,
            ingredient_unit: "piece"
          },
          {
            ingredient_id: 5,
            ingredient_name: "milk",
            ingredient_quantity: 220,
            ingredient_unit: "ml"
          },
          {
            ingredient_id: 6,
            ingredient_name: "butter",
            ingredient_quantity: 30,
            ingredient_unit: "g"
          },
          {
            ingredient_id: 7,
            ingredient_name: "vanilla extract",
            ingredient_quantity: 1,
            ingredient_unit: "ml"
          }
        ]
      },
      {
        id: 4,
        title: "Tiramisu",
        description: "cocoa for dusting, dark chocolate for shaving",
        link:
          "https://foodwishes.blogspot.com/2014/02/tiramisu-it-will-pick-you-up-and-not.html",
        ingredients: [
          {
            ingredient_id: 1,
            ingredient_name: "Coffee",
            ingredient_quantity: 120,
            ingredient_unit: "ml"
          },
          {
            ingredient_id: 2,
            ingredient_name: "Marsala wine",
            ingredient_quantity: 2,
            ingredient_unit: "tablespoons"
          },
          {
            ingredient_id: 3,
            ingredient_name: "ladyfingers",
            ingredient_quantity: 1,
            ingredient_unit: "pack"
          },
          {
            ingredient_id: 4,
            ingredient_name: "egg",
            ingredient_quantity: 2,
            ingredient_unit: "piece"
          },
          {
            ingredient_id: 5,
            ingredient_name: "sugar",
            ingredient_quantity: 3,
            ingredient_unit: "tablespoons"
          },
          {
            ingredient_id: 6,
            ingredient_name: "vanilla extract",
            ingredient_quantity: 1,
            ingredient_unit: "ml"
          },
          {
            ingredient_id: 7,
            ingredient_name: "Mascarpone cheese",
            ingredient_quantity: 175,
            ingredient_unit: "g"
          }
        ]
      },
      {
        id: 5,
        title: "Chicken Soup",
        description: "water with chicken",
        link:
          "https://foodwishes.blogspot.com/2012/02/classic-chicken-noodle-soup-thank.html",
        ingredients: [
          {
            ingredient_id: 1,
            ingredient_name: "butter",
            ingredient_quantity: 20,
            ingredient_unit: "g"
          },
          {
            ingredient_id: 2,
            ingredient_name: "carrot",
            ingredient_quantity: 3,
            ingredient_unit: "piece"
          },
          {
            ingredient_id: 3,
            ingredient_name: "onion",
            ingredient_quantity: 3,
            ingredient_unit: "piece"
          },
          {
            ingredient_id: 4,
            ingredient_name: "celery",
            ingredient_quantity: 5,
            ingredient_unit: "piece"
          },
          {
            ingredient_id: 5,
            ingredient_name: "chicken broth",
            ingredient_quantity: 1,
            ingredient_unit: "l"
          },
          {
            ingredient_id: 6,
            ingredient_name: "chicken breast",
            ingredient_quantity: 4,
            ingredient_unit: "piece"
          },
          {
            ingredient_id: 7,
            ingredient_name: "egg noodles",
            ingredient_quantity: 200,
            ingredient_unit: "g"
          }
        ]
      }
    ],
    slist: [],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
