import React, { Component } from 'react'

export default class CartItem extends Component {
    render() {
        const { item } = this.props
        return (
            <>
                <div className="cart-item">
                    <img src={item.image} alt="product" />
                    <div>
                        <h4>{item.title}</h4>
                        <h5>${item.price} </h5>
                        <span className="remove-item" data-id={item.id}>remove</span>
                    </div>
                    <div>
                        <i className="fas fa-chevron-up" data-id={item.id}></i>
                        <p className="item-amount">{item.amount}</p>
                        <i className="fas fa-chevron-down" data-id={item.id}></i>
                    </div>
                </div>
            </>
        )
    }
}
