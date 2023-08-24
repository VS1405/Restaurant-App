import React, { Fragment } from 'react'


import AvailableMeals from './AvailableMeals'
import MealSumary from './MealSummary'

const Meals = () => {
    return (
        <Fragment>
            <MealSumary />
            <AvailableMeals />
        </Fragment>
    )
}

export default Meals
