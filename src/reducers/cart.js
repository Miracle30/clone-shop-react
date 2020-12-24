import * as types from '../constants/ActionTypes' 

var data = JSON.parse(localStorage.getItem('CART'))
var initState = data ? data : []

// var initState = [
//     {
//         product : {
//             id:1,
//             name:'Iphone 12 xanh nhạt',
//             img:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-xr-blue-select-201809',
//             description:'Dương vip',
//             price:3000,
//             inventory:10,
//             rating : 5
//         },
        
//         quantity: 5
//     },
//     {
//         product : {
//             id:3,
//             name:'Iphoen 12 Trắng',
//             img:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-graphite-hero',
//             description:'Dương vip Pro Graphite Hero',
//             price:1000,
//             inventory:13,
//             rating : 5
//         },
        
//         quantity: 3
//     }
// ]

const cart = (state = initState, action ) => {
    var {product, quantity} = action
    var index = -1 //không tìm thấy là -1
    switch(action.type){

        case types.ADD_TO_CART:
            index = findProductInCart(state, product)
            if(index !== -1){
                state[index].quantity +=quantity
            }
            else{
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]

        case types.DELETE_PRODUCT_IN_CART:
            //xoá 1 item product
            index = findProductInCart(state, product)
            if (index!== -1) {
                state.splice(index, 1)
                
            }


            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]

        case types.UPDATE_PRODUCT_IN_CART:
            index = findProductInCart(state,product)
            if (index !==-1) {
                state[index].quantity = quantity
            }
            
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]
        
        default: return [...state]
    }
}

var findProductInCart = (cart, product) => {
    var index = -1
    if (cart.length > 0 ) {
        for (var i =0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i
                break;
            }
            
        }
    }
    return index
}

export default cart;