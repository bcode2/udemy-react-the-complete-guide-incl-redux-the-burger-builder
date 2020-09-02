import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.module.css';

class BurgerIngredient extends Component {
    render () {
        let ingredient = null;

        switch ( this.props.type ) {
            case ( 'bread-bottom' ):
                ingredient = <div className={classes.BreadBottom}></div>;
               // console.log("bread-bottom");
                break;
            case ( 'bread-top' ):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
              //  console.log("bread-top");
                break;
            case ( 'meat' ):
                ingredient = <div className={classes.Meat}></div>;
               // console.log("meat");
                break;
            case ( 'cheese' ):
                ingredient = <div className={classes.Cheese}></div>;
              //  console.log("cheese");
                break;
            case ( 'bacon' ):
                ingredient = <div className={classes.Bacon}></div>;
               // console.log("bacon");
                break;
            case ( 'salad' ):
                ingredient = <div className={classes.Salad}></div>;
               // console.log("salad");
                break;
            default:
                ingredient = null;
                console.log("null");
        }
        console.log(": ",ingredient);
        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;
