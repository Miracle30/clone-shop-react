import React, { Component } from "react";
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Cart from '../components/cart'
import * as Message from '../constants/Message'
import CartItem from '../components/cartItem'
import CartTotal from '../components/cartTotal'
import { actChangeMsg, actDeleteItem, actUpdateItem } from '../actions/index'


class cartContainer extends Component {
    
    render() {
        var {cart} = this.props
        //console.log(cart)
        return (
            <Cart> 
                {this.showCartItem(cart)}
                {this.showCartTotal(cart)}
            </Cart>
        );
    }
    
    showCartItem = (cart) =>{ 
        var {onDeleteProduct, onChangeMessage, onUpdateQuantity} = this.props
        var result = Message.MSG_CART_EMPTY
        if(cart.length > 0){
            result = cart.map ((cartItem, index) => {
                return <CartItem 
                            key={index} 
                            cartItem={cartItem}
                            index={index}
                            onDeleteProduct={onDeleteProduct}
                            onChangeMessage={onChangeMessage}
                            onUpdateQuantity={onUpdateQuantity}
                        /> //biến cartItem ở bên cartItem.js component
            })
        }
        return result
    }

    showCartTotal = (cart) => {
        var result = null
        if(cart.length > 0 ){
            result =    <CartTotal cart={cart} /> 
                            
        }
        return result
    }
}

//ràng buộc, kiểm tra bằng propType
cartContainer.propTypes = {
    cart : PropTypes.arrayOf(PropTypes.shape(
        {
            product: PropTypes.shape({
                id : PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                img: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating : PropTypes.number.isRequired
            }).isRequired,

            quantity : PropTypes.number.isRequired
        }
    )).isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onDeleteProduct: PropTypes.func.isRequired,
    onUpdateQuantity: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
    return{
        cart : state.CartReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProduct: (product) =>{
            dispatch(actDeleteItem (product))
        },
        onChangeMessage: (message) =>{
            dispatch(actChangeMsg(message))
        },
        onUpdateQuantity: (product, quantity) =>{
            dispatch(actUpdateItem(product, quantity))
        }
    }
}


export default connect (mapStateToProps, mapDispatchToProps) (cartContainer)