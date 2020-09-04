import classes from './BuildControls.module.css'
import React from "react";
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {
            controls.map(ctrl => (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.ingredientAddedHandler(ctrl.type)}
                    removed={() => props.removeIngredientHandler(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                    price={props.price}
                />
            ))}

        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            {console.log(props.ordered)}
            onClick={props.ordered}
        >ORDER NOW
        </button>
    </div>
);

export default buildControls;
