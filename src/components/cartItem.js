import React, { Component } from "react";
import * as Message from '../constants/Message'

export default class cartItem extends Component {
    
    //lấy trên store k cần state

    render() {
        var {cartItem} = this.props
        var {quantity} = cartItem
        return (
            <tr>
                <th scope="row">
                    <img
                        src={cartItem.product.img}                    
                        alt={cartItem.product.name}
                        className="img-fluid z-depth-0"
                    />
                </th>

                <td>
                    <h5>
                        <strong>{cartItem.product.name}</strong>
                    </h5>
                </td>

                <td>{cartItem.product.price} $</td>

                <td className="center-on-small-only">
                    {/* <span className="qty"> {cartItem.quantity} </span> */}
                    <span className="qty"> {quantity} </span>
                    <div
                        className="btn-group radio-group"
                        data-toggle="buttons"
                    >
                        <label
                            onClick= {() => this.onUpdateQuantity(cartItem.product, cartItem.quantity-1)}
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                        >
                            <a href="."> — </a>
                        </label>
                        <label
                            onClick= {() => this.onUpdateQuantity(cartItem.product, cartItem.quantity+1)}
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                        >
                            <a href="."> + </a>
                        </label>
                    </div>
                </td>

                <td>{this.showSubtotal(cartItem.product.price, cartItem.quantity)} $</td>
                
                <td>
                    <button
                        type="button"
                        className="btn btn-sm btn-primary waves-effect waves-light"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Remove item"
                        onClick= {() => this.onDeleteProduct(cartItem.product)}
                    >
                        X
                    </button>
                </td>
            </tr>
        );
    }
    showSubtotal = (price, quantity) =>{
        return price * quantity
    }

    onDeleteProduct(product){
        console.log(product);
        //dòng onDeleteProduct={onDeleteProduct} bên cartCOntainer
        var { onDeleteProduct, onChangeMessage } = this.props
        onDeleteProduct(product)
        onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS)
    }

    onUpdateQuantity= (product, quantity) =>{
        if(quantity>0){
            var { onUpdateQuantity ,onChangeMessage } = this.props
            onUpdateQuantity(product, quantity)
            onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS)
        }

    }
}
