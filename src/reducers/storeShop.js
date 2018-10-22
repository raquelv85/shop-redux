import {
    SAVE_SHOP,
    DELETE_SHOP,
    ADD_UNITY,
    DELETE_UNITY
} from '../constants';

const initialState = {
    shop: []
}

export default function contentReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_SHOP:
            return Object.assign({}, state, {
                shop: state.shop.concat([action.shop])
            });
        case DELETE_SHOP:
            return Object.assign({}, state, {
                shop: [].concat(action.item)
            });
        case ADD_UNITY:
            return Object.assign({}, state, {
                shop: [].concat(action.unity)
            });
        case DELETE_UNITY:
            return Object.assign({}, state, {
                shop: [].concat(action.unity)
            });
        default:
            return state;
    }

}