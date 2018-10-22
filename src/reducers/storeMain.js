import { ADD_PRODUCT, DELETE } from '../constants';


const initialState = {
    productList: [{name :'Lechuga', id: 0, units: 1}, 
               {name : 'Pan', id: 1, units: 1}, 
               {name :'Tomates', id: 2, units: 1}, 
               {name :'Queso', id: 3, units: 1}, 
               {name :'Huevos', id: 4, units: 1}, 
               {name :'Galletas', id: 5, units: 1}],
}

export default function contentReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
        return Object.assign({}, state, {
            productList: state.productList.concat([action.product])
          });
        case DELETE:
        return Object.assign({}, state, {
            productList:[].concat(action.item)
          });
        default:
          return state;
      }

}