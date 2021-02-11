export default function products(state = [], action) {
    
    switch(action.type) {
        case 'SET_PRODUCT':
            state = action.products;
            return state;
        default:
            return state;
    } 
}