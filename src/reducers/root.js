import { combineReducers } from 'redux'

import catalogo from './storeCatalogo';
import fav from './storeFav';
import shop from './storeShop'

const rootReducer = combineReducers({
  catalogo,
  fav,
  shop
})

export default rootReducer;