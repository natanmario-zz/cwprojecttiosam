import produce from 'immer';

export default function basket(state = [], action) {
    
    switch(action.type){
        case 'ADD_PRODUCT':
            return produce(state, draft => {
                
                const indexProduto = draft.findIndex(produto => produto.valor === action.produto.valor);

                if(indexProduto >= 0) {
                    draft[indexProduto].amount += 1;
                }
                else {
                    draft.push({
                        ...action.produto,
                        amount: 1,
                    });
                }
                
                
            });
        
        case 'DELETE_PRODUCT':
            return produce(state, draft =>{
                const indexProduto = draft.findIndex(produto => produto.codigo === action.codigo);

                if(indexProduto >= 0) {
                    draft.splice(indexProduto,1);
                }
            })
        
        case 'REMOVE_PRODUCT':
            return produce(state, draft => {
                const indexProduto = draft.findIndex(produto => produto.codigo === action.codigo);

                if(indexProduto >= 0){
                    if(draft[indexProduto].amount === 1) {
                        draft.splice(indexProduto,1);
                    }
                    else {
                        draft[indexProduto].amount -= 1; 
                    }
                }
            })

        default:
            return state;
    }
}