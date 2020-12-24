import React, { Component } from "react";

export default class cartTotal extends Component {
    render() {
        var {cart} = this.props
        return (
            <tr>
                <td colSpan="3"></td>
                <td>
                    <h4>
                        <strong>Tổng Tiền</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        <strong> {this.showTotalAmount(cart)} $</strong>
                    </h4>
                </td>
                <td colSpan="3">
                    <button
                        type="button"
                        className="btn btn-primary waves-effect waves-light"
                    >
                        Complete purchase
                        <i className="fa fa-angle-right right"></i>
                    </button>
                </td>
            </tr>
        );
    }
    showTotalAmount = (cart) =>{
        var total = 0
        if (cart.length >0) {
            for (var index =0; index < cart.length; index++) {
                total += cart[index].product.price * cart[index].quantity
            }
        }
        return total
    }
}
