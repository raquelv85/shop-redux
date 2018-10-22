import { SAVE_FAV, DELETE_FAV } from '../constants';

const initialState = {
    favorites: []
}


export default function contentReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_FAV:
        return Object.assign({}, state, {
          favorites: state.favorites.concat([action.fav])
        });
        case DELETE_FAV:
        return Object.assign({}, state, {
            favorites:[].concat(action.item)
          }); 
        default:
          return state;
      }

}