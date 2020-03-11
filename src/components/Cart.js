import React, { Component } from 'react'
import { ProductContext } from '../context'
import CartItem from './CartItem'

export default class Cart extends Component {
    static contextType = ProductContext
    getCartOverlayClass = () => {
        const { showCart } = this.context
        let classList = 'cart-overlay'
        if (showCart) classList = 'cart-overlay transparentBcg'
        return classList
    }
    getCartClass = () => {
        const { showCart } = this.context
        let classList = 'cart'
        if (showCart) classList = 'cart showCart'
        return classList
    }

    handleClick = () => {
        this.context.handleCart()
    }
    render() {
        let { cart, tempTotal } = this.context
        let cartItems = cart.map(item => {
            return <CartItem item={item}/>
        })
        return (
            <div className={this.getCartOverlayClass()}>
                <div className={this.getCartClass()}>
                    <button className="close-cart" onClick={this.handleClick}>
                        <i className="fas fa-window-close" ></i>
                    </button>
                    <h2>your cart</h2>
                    <div className="cart-content">
                        {cartItems}
                    </div>
                    <div className="cart-footer">
                        <h3>your total : $ <span className="cart-total">{tempTotal}</span></h3>
                        <button className="clear-cart banner-btn">clear cart</button>
                    </div>
                </div>
            </div>
        )
    }
}
