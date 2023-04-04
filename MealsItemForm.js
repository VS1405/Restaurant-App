import React, { useRef, useState } from 'react';

import Input from '../../UI/Input';
import classes from './MealsItemForm.module.css';

const MealsItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true)

    const amountRef = useRef();

    const submitHandler = event => {

        event.preventDefault();

        const amountInputValue = amountRef.current.value;

        const enteredAmountNumber = +amountInputValue;
        if (amountInputValue.trim().length === 0 || enteredAmountNumber.length < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false)     // wrong entered input
            return;
        }
        console.log(enteredAmountNumber)
        console.log('Counting cart no');

        props.onAddToCart(enteredAmountNumber);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountRef}
                label='Amount'
                input={{
                    id: 'amount' + props.id,
                    type: "number",
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }}
            />
            <button type='submit'> Add</button>
            {!amountIsValid && <p>Enter valid amount (1-5).</p>}
        </form>
    );
}

export default MealsItemForm
