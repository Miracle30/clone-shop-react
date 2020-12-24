var initState = [
    {
        id:1,
        name:'Iphone 12 xanh nhạt',
        img:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-xr-blue-select-201809',
        description:'Dương vip',
        price:3000,
        inventory:10, //cập nhập lại inventory
        rating : 5
    },
    {
        id:2,
        name:'Iphone 12 Xanh',
        img:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-blue-hero',
        description:'Dương vip blue hero',
        price:2000,
        inventory:12,
        rating : 4
    },
    {
        id:3,
        name:'Iphoen 12 Trắng',
        img:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-graphite-hero',
        description:'Dương vip Pro Graphite Hero',
        price:1000,
        inventory:16,
        rating : 5
    }
]

const product = (state = initState, action ) => {
    switch(action.type){
        default: return [...state]
    }
}

export default product;