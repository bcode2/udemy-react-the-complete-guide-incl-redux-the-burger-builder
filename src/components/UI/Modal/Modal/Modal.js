import React from 'react';
import classes from './Modal.module.css';
import BackDrop from '../../BackDrop/BackDrop/BackDrop'
import Aux from '../../../../hoc/Aux'


const modal = (props) => (
    <Aux>
        {console.log(props.show)}
        <BackDrop show={props.show} clicked={props.modalClosed}>
            <div className={classes.Modal}
                 style={{
                     transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                     opacity: props.show ? '1' : '1'
                 }}>
                {
                    props.children
                }
            </div>
        </BackDrop>
    </Aux>
);
export default modal;
