import { SAVE_FAV, DELETE_FAV } from '../constants';

const initialState = {
    favoritos: []
}


export default function contentReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_FAV:
        return Object.assign({}, state, {
          favoritos: state.favoritos.concat([action.fav])
        });
        case DELETE_FAV:
        return Object.assign({}, state, {
            favoritos:[].concat(action.item)
          }); 
        default:
          return state;
      }

}