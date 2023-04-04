import React, {Fragment} from 'react'


import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton onClick = {props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src='https://www.shutterstock.com/image-photo/arabic-cuisine-middle-eastern-traditional-260nw-1690553083.jpg' alt='A delicious food on meal'/>
      </div>
    </Fragment>
  )
}

export default Header
