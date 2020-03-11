import React, { Component } from 'react'
import items from './products'
import storageHelper from './Utils/storageHelper'
const ProductContext = React.createContext();

class ProductProvider extends Component {
    constructor(props) {
        super()
        this.state = {
            products: [],
            cart: storageHelper.getItem.local('cart'),
            tempTotal: 0,
            itemsTotal: 0,
            showCart: false
        }
    }


    //get products
    componentDidMount = () => {
        let products = this.formatData(items)
        this.setState({
            products,
        })
        this.setCartValue(this.state.cart)
    }

    formatData = (items) => {
        let tempProducts = items.map(item => {
            let id = item.sys.id;
            let image = item.fields.image.fields.file.url
            let inItemInCart = this.state.cart.find(item => item.id === id)
            let inCart = false;
            if (inItemInCart) {
                inCart = true
            }
            let product = { ...item.fields, image, id, inCart }
            return product
        });
        return tempProducts


    }

    addToCart = (product) => {
        product.inCart = true
        let cartItem = { ...product, amount: 1 }
        // add product to cart
        this.setState(state => {
            const cart = [...state.cart, cartItem]
            this.setCartValue(cart)
            storageHelper.setItem.local('cart', cart)
            return {
                cart
            }
        })

    }

    setCartValue = (cart) => {
        let tempTotal = 0;
        let itemsTotal = 0;
        cart.map(item => {
            tempTotal += item.price * item.amount
            itemsTotal += item.amount
        });

        this.setState({
            tempTotal: tempTotal.toFixed(2),
            itemsTotal
        })

    }

    handleCart = () => {
        if (this.state.showCart) {
            this.setState({ showCart: false })
        } else {
            this.setState({showCart: true})
        }
    }
    render() {
        return (
            <ProductContext.Provider value={{ ...this.state, addToCart: this.addToCart, handleCart: this.handleCart }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}


const ProductConsumer = ProductContext.Consumer

export { ProductConsumer, ProductContext, ProductProvider }