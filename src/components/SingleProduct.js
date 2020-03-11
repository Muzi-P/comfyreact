import React, { Component } from 'react'
import logo from '../images/product-2.jpeg'


export default class SingleProduct extends Component {

    handleClick(product) {
        this.props.addToCart(product)
    }
    render() {
        const { product } = this.props
        return (
            <article className="product">
                <div className="img-container">
                    <img src={product.image} className="product-img" alt="prodct" />
                    <button className="bag-btn" disabled={product.inCart}  data-id={product.id} onClick={() => this.handleClick(product)} >
                        <i className="fas fa-shopping-cart"></i>
                        {product.inCart ? "in cart" : "add to cart"}
                    </button>
                </div>
                <h3>{product.title}</h3>
                <h4>${product.price}</h4>
            </article>
        )
    }
}
