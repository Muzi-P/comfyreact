import React, { Component } from 'react'
import { ProductContext } from '../context'
import SingleProduct from './SingleProduct'
export default class Products extends Component {
    static contextType = ProductContext
    render() {
        let { products, addToCart } = this.context
        products = products.map(product => {
            return <SingleProduct key={product.id} product={product} addToCart={addToCart}/>
        })

        return (
            <section className="products">
                <div className="section-title">
                    <h2>our products</h2>
                </div>
                <div className="products-center">
                    {products}
                </div>
            </section>
        )
    }
}
