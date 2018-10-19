import { ADD_PRODUCTO, DELETE } from '../constants';


const initialState = {
    listaProductos: [{nombre :'Lechuga', id: 0, unidades: 1}, 
               {nombre : 'Pan', id: 1, unidades: 1}, 
               {nombre :'Tomates', id: 2, unidades: 1}, 
               {nombre :'Queso', id: 3, unidades: 1}, 
               {nombre :'Huevos', id: 4, unidades: 1}, 
               {nombre :'Galletas', id: 5, unidades: 1}],

    
}


export default function contentReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCTO:
        return Object.assign({}, state, {
            listaProductos: state.listaProductos.concat([action.producto])
          });
        case DELETE:
        return Object.assign({}, state, {
            listaProductos:[].concat(action.item)
          });
        default:
          return state;
      }

}