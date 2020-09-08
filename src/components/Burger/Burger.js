import React from "react";
import classes from './Burger.module.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import { useDrag } from 'react-dnd'
import ReactDOM from 'react-dom'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


const burger = (props) => {
        let transformedIngredients = Object.keys(props.ingredients)
            .map(igKey => {
                return [...Array(props.ingredients[igKey])].map((_, i) => {
                    return <BurgerIngredient key={igKey + i} type={igKey}/>;
                });
            }).reduce((acc, currValue) => acc.concat(currValue), [])

        if (transformedIngredients.length === 0) transformedIngredients = <p>Add ingredients</p>;

        return (

            <div className={classes.Burger}>
                <BurgerIngredient type='bread-top'/>
                {          console.log(transformedIngredients)}
                <DndProvider backend={HTML5Backend}>
                {transformedIngredients}
                </DndProvider>
                <BurgerIngredient type='bread-bottom'/>
            </div>
        );
    }
;

export default burger;
