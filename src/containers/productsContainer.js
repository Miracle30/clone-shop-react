import React, { Component } from "react";
import {connect} from 'react-redux'
import ProductList from '../components/productList'
import Product from '../components/product'
import PropTypes from 'prop-types'
import {actAddToCart, actChangeMsg} from '../actions/index'

class productsContainer extends Component {
    render() {
        var {productList} = this.props
        return (
            <ProductList>
                {this.showProduct(productList)}
            </ProductList>
        );
    }
    showProduct( productList){
        var result = null 
        var {onAddToCart, onChangeMsg} = this.props
        if(productList.length > 0){
            result = productList.map ((product, index) => {
                return <Product 
                    key={index} 
                    product={product} 
                    onAddToCart = {onAddToCart}
                    onChangeMsg = {onChangeMsg}
                /> //biến product ở bên product.js component
            })
        }
        return result
    }
}

//ràng buộc, kiểm tra bằng propType
productsContainer.propTypes = {
    productList : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired
        })
    ).isRequired,
    onChangeMsg: PropTypes.func.isRequired,
    onAddToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        productList : state.ProductReducer // trong reducer product
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) =>{
            dispatch(actAddToCart(product, 1))
        },
        onChangeMsg : (message) => {
            dispatch(actChangeMsg(message))
        }
    }
}


export default connect (mapStateToProps, mapDispatchToProps ) (productsContainer)