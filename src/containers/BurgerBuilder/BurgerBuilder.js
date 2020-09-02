import React, {Component} from "react";
import Aux from '../../hoc/Aux'
import  Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }
    render() {
        return (
            <Aux>
                <div>
                    {/*console.log(this.state.ingredients)*/}
                    <Burger ingredients={this.state.ingredients} />
                </div>
                <div> Builder control</div>
            </Aux>
        )
    }
}

export  default BurgerBuilder;
