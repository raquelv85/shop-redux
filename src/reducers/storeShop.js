import {
    SAVE_SHOP,
    DELETE_SHOP,
    ADD_UNIDAD,
    DELETE_UNIDAD
} from '../constants';

const initialState = {
    compra: []
}

export default function contentReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_SHOP:
            return Object.assign({}, state, {
                compra: state.compra.concat([action.shop])
            });
        case DELETE_SHOP:
            return Object.assign({}, state, {
                compra: [].concat(action.item)
            });
        case ADD_UNIDAD:
            return Object.assign({}, state, {
                compra: [].concat(action.unidad)
            });
        case DELETE_UNIDAD:
            return Object.assign({}, state, {
                compra: [].concat(action.unidad)
            });
        default:
            return state;
    }

}