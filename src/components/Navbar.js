import React, { Component } from 'react'
import { ProductContext } from '../context'
import logo from '../images/logo.svg'
export class Navbar extends Component {
    static contextType = ProductContext
    handleClick = () => {
        this.context.handleCart()
    }
    render() {
        let { itemsTotal } = this.context
        return (
            <nav className="navbar">
                <div className="navbar-center">
                    <span className="nav-icon">
                        <i className="fas fa-bars"></i>
                    </span>
                    <img src={logo} alt="store logo" />
                    <button className="cart-btn" onClick={this.handleClick}>
                        <span className="nav-icon">
                            <i className="fas fa-cart-plus"></i>
                        </span>
                        <div className="cart-items">{itemsTotal}</div>
                    </button>
                </div>
            </nav>
        )
    }
}

export default Navbar
